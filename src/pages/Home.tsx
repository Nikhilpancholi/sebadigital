import { Hero } from '../components/Hero';
import { CategoryIcons } from '../components/CategoryIcons';
import { AboutSection } from '../components/AboutSection';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { BenefitsSection } from '../components/BenefitsSection';
import { TVSpecialists } from '../components/TVSpecialists';
import { CTASection } from '../components/CTASection';
import { LatestArrivals } from '../components/LatestArrivals';
import { TransferToDVD } from '../components/TransferToDVD';
import { ServicesAccordion } from '../components/ServicesAccordion';
import { Testimonials } from '../components/Testimonials';

export function Home() {
  return (
    <>
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
    </>
  );
}
