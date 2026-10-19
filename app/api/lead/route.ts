import { NextResponse } from 'next/server';
import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

const dataDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(process.cwd(), 'data', 'leads.db');
const db = new Database(dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    intent TEXT,
    comment TEXT,
    utm_source TEXT,
    utm_medium TEXT,
    utm_campaign TEXT,
    page_url TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      phone,
      intent,
      comment,
      utm_source,
      utm_medium,
      utm_campaign,
      page_url,
    } = body;

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Пожалуйста, укажите ваше имя' },
        { status: 400 },
      );
    }

    const cleanPhone = (phone || '').replace(/\D/g, '');
    const isByPhone = /^375(29|33|44|25|17)\d{7}$/.test(cleanPhone);

    if (!isByPhone) {
      return NextResponse.json(
        {
          success: false,
          error: 'Введите корректный белорусский номер: +375 (XX) XXX-XX-XX',
        },
        { status: 400 },
      );
    }

    const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000).toISOString();
    const existingLead = db
      .prepare(`SELECT id FROM leads WHERE phone = ? AND created_at > ?`)
      .get(cleanPhone, tenMinutesAgo);

    if (existingLead) {
      return NextResponse.json({
        success: true,
        message:
          'Ваша заявка уже принята! Менеджер свяжется с вами в ближайшее время.',
        isDuplicate: true,
      });
    }

    const stmt = db.prepare(`
      INSERT INTO leads (name, phone, intent, comment, utm_source, utm_medium, utm_campaign, page_url)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);

    stmt.run(
      name.trim(),
      cleanPhone,
      intent || 'Регулярная подписка',
      comment || '',
      utm_source || null,
      utm_medium || null,
      utm_campaign || null,
      page_url || '',
    );

    return NextResponse.json({
      success: true,
      message: 'Заявка успешно отправлена!',
    });
  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json(
      {
        success: false,
        error:
          'Произошла ошибка на сервере. Попробуйте еще раз или позвоните нам.',
      },
      { status: 500 },
    );
  }
}
