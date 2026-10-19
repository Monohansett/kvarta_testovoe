import Image from 'next/image';

const steps = [
  {
    day: 'Четверг',
    text: 'Обжариваем партию по 5 кг',
    image: '/coffee_roaster.jpg',
    alt: 'Обжарочная машина',
  },
  {
    day: 'Пятница',
    text: 'Развозим свежую обжарку по Минску',
    image: '/coffee_bag.jpg',
    alt: 'Пачки кофе готовы к доставке',
  },
  {
    day: '1–3 день',
    text: 'Зерно у вас, пока вкус на пике',
    image: '/brewing_coffee.jpg',
    alt: 'Чашка кофе дома',
  },
];

export function About() {
  return (
    <section id="about" className="bg-mist py-14 md:py-24">
      <div className="wrap">
        <div className="md:grid md:grid-cols-2 md:items-start md:gap-12">
          <div>
            <p className="mb-3 text-[13px] font-semibold uppercase tracking-wide text-muted">
              Кто мы
            </p>
            <h2 className="display text-[25px] md:text-4xl">
              Аня и Дмитрий. Раньше стояли за баром, теперь за обжарочной
              машиной
            </h2>
          </div>
          <p className="mt-5 text-lg text-ink-soft md:mt-5">
            С 2019 года обжариваем сами, партиями по 5 кг. Мы бывшие бариста,
            поэтому знаем, каким кофе бывает на баре и каким он должен быть
            дома. Мало, зато каждую партию помним в лицо.
          </p>
        </div>

        <ul className="mt-8 grid gap-3 md:mt-10 md:grid-cols-3 md:gap-5">
          {steps.map((s) => (
            <li
              key={s.day}
              className="group rounded-lg bg-white p-3 shadow-[0_2px_10px_rgba(10,16,28,.06)] transition duration-200 hover:-translate-y-1.5 hover:shadow-[0_24px_40px_-12px_rgba(10,16,28,.38),0_0_0_1px_rgba(27,36,51,.22)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <div className="relative aspect-16/10 overflow-hidden rounded">
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
              </div>
              <div className="px-2 pb-2 pt-4">
                <h3 className="display text-xl">{s.day}</h3>
                <p className="mt-1.5 text-ink-soft">{s.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
