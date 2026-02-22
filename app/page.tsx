import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Archiving from '@/components/Archiving';
import Footer from '@/components/Footer';
import ScrollIndicator from '@/components/ScrollIndicator';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Archiving />
      <Footer />
      <ScrollIndicator />
      <ScrollToTop />
    </main>
  );
}
