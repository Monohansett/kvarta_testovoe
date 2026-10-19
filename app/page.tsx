import { Hero } from '@/components/sections/Hero';
import { About } from './components/sections/About';
import { Catalog } from './components/sections/Catalog';
import { Subscription } from './components/sections/Subscription';
import { Delivery } from './components/sections/Delivery';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Catalog />
      <Subscription />
      <Delivery />
    </main>
  );
}
