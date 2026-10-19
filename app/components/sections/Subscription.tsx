import { ButtonLink } from '@/components/ui/Button';

export function Subscription() {
  return (
    <section id="subscription" className="pb-14 md:pb-24">
      <div className="wrap">
        <div className="flex flex-col gap-4 rounded-lg bg-navy p-6 text-white md:p-12">
          <p className="text-[13px] font-semibold uppercase tracking-wide text-[#c4c9d4]">
            Подписка
          </p>
          <h2 className="display text-[25px] md:text-4xl">
            2 пачки по 250 г раз в месяц
          </h2>
          <p className="max-w-130">
            Выбираете зёрна, мы привозим свежую обжарку. Доставка бесплатно.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <span className="display text-3xl">54 BYN / мес</span>
            <ButtonLink
              href="#order"
              variant="white"
              className="focus-visible:outline-blush"
            >
              Оформить подписку
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
