'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
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

const arrowClass =
  'absolute top-[calc(50%-12px)] z-10 hidden size-12 -translate-y-1/2 place-items-center rounded-full ' +
  'border border-ink/10 bg-white text-ink shadow-[0_8px_24px_rgba(10,16,28,.22)] transition ' +
  'hover:bg-ink hover:text-white focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-ink ' +
  'disabled:pointer-events-none disabled:opacity-0 motion-reduce:transition-none md:grid';

export function Catalog() {
  const track = useRef<HTMLUListElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setEdge({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    });
  }, []);

  useEffect(() => {
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [update]);

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' });
  };

  return (
    <section id="catalog" className="py-14 md:py-24">
      <div className="wrap">
        <p className="mb-3 text-[13px] font-semibold uppercase tracking-wide text-muted">
          Ассортимент
        </p>
        <h2 className="display mb-3 text-[25px] md:text-4xl">
          Три зерна и дрип-пакеты
        </h2>

        <div className="relative">
          <button
            type="button"
            aria-label="Назад"
            onClick={() => scroll(-1)}
            disabled={edge.start}
            className={`${arrowClass} left-0 md:-translate-x-1/2`}
          >
            <Arrow dir="left" />
          </button>
          <button
            type="button"
            aria-label="Вперёд"
            onClick={() => scroll(1)}
            disabled={edge.end}
            className={`${arrowClass} right-0 md:translate-x-1/2`}
          >
            <Arrow dir="right" />
          </button>

          <ul
            ref={track}
            onScroll={update}
            tabIndex={0}
            aria-label="Каталог, листайте по горизонтали"
            className="-mx-5 -mb-4 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-11 pt-4 scrollbar-none focus-visible:outline-[3px] focus-visible:outline-ink md:-mx-1 md:scroll-px-1 md:px-1 [&::-webkit-scrollbar]:hidden"
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
      </div>
    </section>
  );
}
