import React from 'react';
import { Navbar } from '../components/ui/navbar';
import { Hero } from '../components/ui/Hero';
import { Features } from '../components/ui/Features';
import { WhyTypid } from '../components/ui/WhyTypid';
import { FAQ } from '../components/ui/FAQ';
import { CTA } from '../components/ui/CTA';
import { Footer } from '../components/ui/Footer';

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <WhyTypid />
        <FAQ />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}