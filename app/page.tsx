'use client';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ContactSection from './components/ContactSection';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Hero />
      <Navbar />
      <ContactSection />
    </div>
  );
}
