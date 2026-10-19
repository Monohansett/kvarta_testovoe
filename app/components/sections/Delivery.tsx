export function Delivery() {
  return (
    <section id="delivery" className="pb-14 md:pb-24">
      <div className="wrap">
        <p className="mb-3 text-[13px] font-semibold uppercase tracking-wide text-muted">
          Доставка и самовывоз
        </p>
        <h2 className="display mb-7 text-[25px] md:text-4xl">
          Привезём в пятницу или заберите сами
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-mist p-6">
            <h3 className="display mb-2 text-lg">Доставка по Минску</h3>
            <p>По пятницам. От 50 BYN бесплатно.</p>
          </div>
          <div className="rounded-lg bg-mist p-6">
            <h3 className="display mb-2 text-lg">Самовывоз</h3>
            <p>
              Минск, ул. Короля, 9.
              <br />
              Пн–пт 8:00–20:00, сб–вс 10:00–18:00.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
