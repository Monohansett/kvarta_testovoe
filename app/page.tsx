import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Catalog } from '@/components/sections/Catalog';
import { Subscription } from '@/components/sections/Subscription';
import { Delivery } from '@/components/sections/Delivery';
import { OrderForm } from '@/components/sections/OrderForm';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Catalog />
      <Subscription />
      <Delivery />
      <OrderForm />
      <Footer />
    </main>
  );
}
