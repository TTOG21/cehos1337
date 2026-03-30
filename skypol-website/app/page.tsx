import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Bento from './components/Bento';
import Process from './components/Process';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Bento />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
