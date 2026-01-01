
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HowToBook from './components/HowToBook';
import Portfolio from './components/Portfolio';
import WhyChoose from './components/WhyChoose';
import Reviews from './components/Reviews';
import Comparison from './components/Comparison';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import SEOSchema from '../../components/SEOSchema';

export default function Home() {
  return (
    <>
      <SEOSchema type="home" />
      <Navbar />
      <Hero />
      <Services />
      <HowToBook />
      <Portfolio />
      <WhyChoose />
      <Reviews />
      <Comparison />
      <FAQ />
      <Contact />
    </>
  );
}
