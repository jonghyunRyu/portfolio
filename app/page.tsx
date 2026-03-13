import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ScrollIndicator from "@/components/layout/ScrollIndicator";
import ScrollToTop from "@/components/layout/ScrollToTop";
import About from "@/components/sections/About";
import Archiving from "@/components/sections/Archiving";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

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
