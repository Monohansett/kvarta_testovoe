import Image from 'next/image';
import { ButtonLink } from '@/components/ui/Button';
import { Header } from './Header';

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-160 flex-col bg-navy text-white md:min-h-190"
    >
      {/*<video autoPlay muted loop playsInline poster="..." className="absolute inset-0 h-full w-full object-cover" /> */}
      <Image
        src="/images/hero.svg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-b from-[#0a101c]/60 via-[#0a101c]/50 to-[#0a101c]/70" />

      <Header />

      <div className="wrap relative flex flex-1 flex-col items-center justify-center py-8 text-center">
        <p className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-white/85">
          Обжарка в Минске · партии по 5 кг
        </p>
        <h1 className="display max-w-220 text-[34px] md:text-[64px]">
          Кофе, обжаренный в четверг, у вас в пятницу
        </h1>
        <p className="mb-8 mt-5 max-w-135 text-lg text-white/90">
          Зерно приходит к вам на 1–3 день после обжарки. Свежее, пока вкус ещё
          громкий.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <ButtonLink href="#order" className="focus-visible:outline-blush">
            Оформить подписку
          </ButtonLink>
          <ButtonLink
            href="#catalog"
            variant="outlineLight"
            className="focus-visible:outline-blush"
          >
            Смотреть кофе
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
