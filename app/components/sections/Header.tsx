import Link from 'next/link';
import { ButtonLink } from '@/components/ui/Button';

const links = [
  { href: '#catalog', label: 'Кофе' },
  { href: '#subscription', label: 'Подписка' },
  { href: '#delivery', label: 'Доставка' },
  { href: '#order', label: 'Контакты' },
];

export function Header() {
  return (
    <header className="relative z-10">
      <div className="wrap flex min-h-[72px] items-center justify-between gap-3">
        <Link
          href="#top"
          className="display text-[22px] text-white transition-opacity hover:opacity-75 focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-blush"
        >
          кварта<span className="text-blush">.</span>
        </Link>

        <nav aria-label="Разделы" className="hidden gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="bg-[linear-gradient(var(--color-blush),var(--color-blush))] bg-[length:0_2px] bg-[position:left_bottom] bg-no-repeat py-2 font-medium text-white transition-[background-size] duration-300 hover:bg-[length:100%_2px] focus-visible:bg-[length:100%_2px] focus-visible:outline-none motion-reduce:transition-none"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <ButtonLink
          href="#order"
          variant="white"
          size="sm"
          className="focus-visible:outline-blush"
        >
          Оставить заявку
        </ButtonLink>
      </div>
    </header>
  );
}
