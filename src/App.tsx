import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatWeDo } from './components/WhatWeDo';
import { AIProducts } from './components/AIProducts';
import { CorporateSuite } from './components/CorporateSuite';
import { Services } from './components/Services';
import { WhyNornx } from './components/WhyNornx';
import { Process } from './components/Process';
import { UseCases } from './components/UseCases';
import { Vision } from './components/Vision';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-background transition-colors duration-300">
      <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
      <main>
        <Hero isDark={isDark} />
        <WhatWeDo />
        <AIProducts isDark={isDark} />
        <CorporateSuite />
        <Services />
        <WhyNornx />
        <Process isDark={isDark} />
        <UseCases />
        <Vision />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
