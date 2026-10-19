import { Hero } from '@/components/sections/Hero';
import { About } from './components/sections/About';
import { Catalog } from './components/sections/Catalog';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Catalog />
    </main>
  );
}
