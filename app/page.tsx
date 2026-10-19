import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Catalog } from '@/components/sections/Catalog';
import { Subscription } from '@/components/sections/Subscription';
import { Delivery } from '@/components/sections/Delivery';
import { OrderForm } from '@/components/sections/OrderForm';
import { Footer } from '@/components/sections/Footer';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Catalog />
      <Subscription />
      <Delivery />
      <Suspense
        fallback={<div className="py-12 text-center">Загрузка формы...</div>}
      >
        <OrderForm />
      </Suspense>
      <Footer />
    </main>
  );
}
