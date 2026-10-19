import { Button } from '@/components/ui/Button';

const topics = [
  { value: 'subscription', label: 'Подписка' },
  { value: 'one-time', label: 'Разовый заказ' },
  { value: 'question', label: 'Вопрос' },
];

const field =
  'min-h-12 w-full rounded-md border-2 border-field bg-white px-3.5 py-2.5 text-base text-ink';

const label = 'mb-1.5 block font-semibold';

export function OrderForm() {
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

        <form className="mt-5 flex flex-col gap-4 rounded-xl bg-white p-5 md:mt-0">
          <div>
            <label htmlFor="name" className={label}>
              Имя
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Как к вам обращаться"
              className={field}
            />
          </div>

          <div>
            <label htmlFor="phone" className={label}>
              Телефон
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="+375 29 123-45-67"
              className={field}
            />
            <p className="mt-1.5 text-sm text-muted">
              Белорусский номер, например +375 29 123-45-67
            </p>
          </div>

          <fieldset>
            <legend className={label}>Что интересует</legend>
            <div className="grid gap-2 md:grid-cols-3">
              {topics.map((t, i) => (
                <div key={t.value} className="relative">
                  <input
                    id={`topic-${t.value}`}
                    type="radio"
                    name="topic"
                    value={t.value}
                    defaultChecked={i === 0}
                    className="peer sr-only"
                  />
                  <label
                    htmlFor={`topic-${t.value}`}
                    className="flex min-h-12 cursor-pointer items-center rounded-md border-2 border-field bg-white px-4 font-medium peer-checked:border-navy peer-checked:bg-[#e6e9f0] peer-focus-visible:outline-[3px] peer-focus-visible:outline-navy"
                  >
                    {t.label}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>

          <div>
            <label htmlFor="comment" className={label}>
              Комментарий
            </label>
            <textarea
              id="comment"
              name="comment"
              rows={3}
              placeholder="Какое зерно, помол, адрес доставки"
              className={field}
            />
          </div>

          <Button type="submit" variant="navy" className="w-full">
            Отправить заявку
          </Button>
        </form>
      </div>
    </section>
  );
}
