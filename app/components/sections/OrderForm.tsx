'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PatternFormat } from 'react-number-format';
import { Button } from '@/components/ui/Button';
import { leadSchema, type LeadFormData } from '@/lib/validations/lead';

const topics = [
  { value: 'subscription', label: 'Подписка' },
  { value: 'one-time', label: 'Разовый заказ' },
  { value: 'question', label: 'Вопрос' },
] as const;

const field =
  'min-h-12 w-full rounded-md border-2 border-field bg-white px-3.5 py-2.5 text-base text-ink focus:outline-none focus:border-navy';

const label = 'mb-1.5 block font-semibold';

export function OrderForm() {
  const searchParams = useSearchParams();

  const [serverStatus, setServerStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
    clearErrors,
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: '',
      phone: '',
      topic: 'subscription',
      comment: '',
    },
  });

  const onSubmit = async (data: LeadFormData) => {
    setServerStatus({ type: null, message: '' });

    const utmData = {
      utm_source: searchParams.get('utm_source') || '',
      utm_medium: searchParams.get('utm_medium') || '',
      utm_campaign: searchParams.get('utm_campaign') || '',
      page_url: typeof window !== 'undefined' ? window.location.href : '',
    };

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          intent: data.topic,
          comment: data.comment,
          ...utmData,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Не удалось отправить заявку');
      }

      setServerStatus({
        type: 'success',
        message: result.message || 'Заявка успешно отправлена!',
      });

      reset();
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : 'Непредвиденная ошибка';

      setServerStatus({
        type: 'error',
        message:
          errorMessage ||
          'Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз или позвоните нам.',
      });
    }
  };

  return (
    <section id="order" className="bg-mist py-14 md:py-24">
      <div className="wrap md:grid md:grid-cols-2 md:items-start md:gap-12">
        <div>
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-wide text-muted">
            Заявка
          </p>
          <h2 className="display text-[25px] md:text-4xl">
            Оставьте номер, мы перезвоним и всё оформим
          </h2>
          <p className="mt-4 text-ink-soft">
            Оплата не нужна: менеджер уточнит детали по телефону.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-5 flex flex-col gap-4 rounded-xl bg-white p-5 md:mt-0 shadow-sm"
        >
          <div>
            <label htmlFor="name" className={label}>
              Имя
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              placeholder="Как к вам обращаться"
              className={`${field} ${errors.name ? 'border-brick' : ''}`}
              {...register('name')}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-brick font-medium">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className={label}>
              Телефон
            </label>
            <Controller
              name="phone"
              control={control}
              render={({ field: { onChange, value, ref } }) => (
                <PatternFormat
                  getInputRef={ref}
                  format="+375 (##) ###-##-##"
                  mask="_"
                  allowEmptyFormatting={false}
                  value={value}
                  onValueChange={(values, sourceInfo) => {
                    if (sourceInfo.source === 'event') {
                      onChange(values.formattedValue);
                    }
                  }}
                  id="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="+375 (29) 123-45-67"
                  className={`${field} ${errors.phone ? 'border-brick' : ''}`}
                />
              )}
            />
            {errors.phone ? (
              <p className="mt-1 text-sm text-brick font-medium">
                {errors.phone.message}
              </p>
            ) : (
              <p className="mt-1.5 text-sm text-muted">
                Белорусский номер, например +375 (29) 123-45-67
              </p>
            )}
          </div>

          <fieldset>
            <legend className={label}>Что интересует</legend>
            <div className="grid gap-2 md:grid-cols-3">
              {topics.map((t) => (
                <div key={t.value} className="relative">
                  <input
                    id={`topic-${t.value}`}
                    type="radio"
                    value={t.value}
                    className="peer sr-only"
                    {...register('topic')}
                  />
                  <label
                    htmlFor={`topic-${t.value}`}
                    className="flex min-h-12 cursor-pointer items-center justify-center rounded-md border-2 border-field bg-white px-3 text-center text-sm font-medium peer-checked:border-navy peer-checked:bg-[#e6e9f0] peer-focus-visible:outline-[3px] peer-focus-visible:outline-navy transition-colors"
                  >
                    {t.label}
                  </label>
                </div>
              ))}
            </div>
            {errors.topic && (
              <p className="mt-1 text-sm text-brick font-medium">
                {errors.topic.message}
              </p>
            )}
          </fieldset>

          <div>
            <label htmlFor="comment" className={label}>
              Комментарий
            </label>
            <textarea
              id="comment"
              rows={3}
              placeholder="Какое зерно, помол, адрес доставки"
              className={field}
              {...register('comment')}
            />
          </div>

          {serverStatus.message && (
            <div
              className={`rounded-md p-4 text-sm font-medium ${
                serverStatus.type === 'success'
                  ? 'bg-green-50 text-green-800 border border-green-200'
                  : 'bg-red-50 text-brick border border-red-200'
              }`}
            >
              {serverStatus.message}
            </div>
          )}
          <Button
            type="submit"
            variant="navy"
            disabled={isSubmitting}
            className="w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Отправляем...' : 'Отправить заявку'}
          </Button>
        </form>
      </div>
    </section>
  );
}
