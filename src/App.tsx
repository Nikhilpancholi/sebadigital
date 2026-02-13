import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryIcons } from './components/CategoryIcons';
import { AboutSection } from './components/AboutSection';
import { FeaturedProducts } from './components/FeaturedProducts';
import { BenefitsSection } from './components/BenefitsSection';
import { TVSpecialists } from './components/TVSpecialists';
import { CTASection } from './components/CTASection';
import { LatestArrivals } from './components/LatestArrivals';
import { TransferToDVD } from './components/TransferToDVD';
import { ServicesAccordion } from './components/ServicesAccordion';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <CategoryIcons />
        <AboutSection />
        <FeaturedProducts />
        <BenefitsSection />
        <TVSpecialists />
        <CTASection />
        <LatestArrivals />
        <TransferToDVD />
        <ServicesAccordion />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}