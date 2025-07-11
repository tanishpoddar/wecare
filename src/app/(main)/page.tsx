import React from 'react';
import { HeroVideoSection } from '@/components/sections/home/hero-video-section';
import { ProductShowcaseCarousel } from '@/components/sections/home/product-showcase-carousel';
import { ConsumerStudyResultsBanner } from '@/components/sections/home/consumer-study-results-banner';
import { RollingBenefitsTiles } from '@/components/sections/home/rolling-benefits-tiles';
import { IngredientsAccordionSection } from '@/components/sections/home/ingredients-accordion-section';
import { CertificationsBanner } from '@/components/sections/home/certifications-banner';

export default function HomePage() {
  return (
    <>
      <HeroVideoSection />
      <ProductShowcaseCarousel />
      <ConsumerStudyResultsBanner />
      <RollingBenefitsTiles />
      <IngredientsAccordionSection />
      <CertificationsBanner />
    </>
  );
}
