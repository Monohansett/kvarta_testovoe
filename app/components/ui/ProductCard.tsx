import Image from 'next/image';
import { ButtonLink } from '@/components/ui/Button';
import type { Product } from '@/constants/products';

export function ProductCard({ product }: { product: Product }) {
  const { image, alt, origin, name, description, price } = product;

  return (
    <article className="flex h-full flex-col gap-3 rounded-lg bg-mist p-4 transition duration-200 hover:-translate-y-1.5 hover:shadow-[0_24px_40px_-12px_rgba(10,16,28,.38),0_0_0_1px_rgba(27,36,51,.22)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div className="relative aspect-4/3 overflow-hidden rounded">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 768px) 30vw, 78vw"
          className="object-cover"
        />
      </div>
      <span className="text-[13px] font-semibold uppercase tracking-wide text-muted">
        {origin}
      </span>
      <h3 className="display text-lg">{name}</h3>
      <p className="text-ink-soft">{description}</p>
      <div className="mt-auto flex items-center justify-between">
        <span className="display text-xl">{price}</span>
        <ButtonLink href="#order" variant="outline" size="sm">
          Заказать
        </ButtonLink>
      </div>
    </article>
  );
}
