'use client';

import { useRef } from 'react';
import { products } from '@/constants/products';
import { ProductCard } from '@/components/ui/ProductCard';

function Arrow({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path
        d={dir === 'left' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Catalog() {
  const track = useRef<HTMLUListElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' });
  };

  const arrowClass =
    'grid size-11 place-items-center rounded-md border-2 border-ink text-ink transition-colors hover:bg-ink hover:text-white focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-ink';

  return (
    <section id="catalog" className="py-14 md:py-24">
      <div className="wrap">
        <p className="mb-3 text-[13px] font-semibold uppercase tracking-wide text-muted">
          Ассортимент
        </p>
        <div className="mb-3 flex items-end justify-between gap-4">
          <h2 className="display text-[25px] md:text-4xl">
            Три зерна и дрип-пакеты
          </h2>
          <span className="whitespace-nowrap text-[13px] font-semibold uppercase tracking-wide text-muted md:hidden">
            Листайте →
          </span>
          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              aria-label="Назад"
              onClick={() => scroll(-1)}
              className={arrowClass}
            >
              <Arrow dir="left" />
            </button>
            <button
              type="button"
              aria-label="Вперёд"
              onClick={() => scroll(1)}
              className={arrowClass}
            >
              <Arrow dir="right" />
            </button>
          </div>
        </div>
        <ul
          ref={track}
          tabIndex={0}
          aria-label="Каталог, листайте по горизонтали"
          className="-mx-1 -mb-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-11 pt-4 [scrollbar-color:var(--color-ink)_#e1e4ea] scrollbar-thin focus-visible:outline-[3px] focus-visible:outline-ink"
        >
          {products.map((p) => (
            <li
              key={p.id}
              className="shrink-0 basis-[78%] snap-start md:basis-[calc(30%-12px)]"
            >
              <ProductCard product={p} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
