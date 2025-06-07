import { HeroVideoSection } from '@/components/sections/home/hero-video-section';
import { ProductShowcaseCarousel } from '@/components/sections/home/product-showcase-carousel';
import { ConsumerStudyResultsBanner } from '@/components/sections/home/consumer-study-results-banner';
import { RollingBenefitsTiles } from '@/components/sections/home/rolling-benefits-tiles';
import { IngredientsBanner } from '@/components/sections/home/ingredients-banner';
import { CertificationsBanner } from '@/components/sections/home/certifications-banner';
import { UgcVideoSection } from '@/components/sections/home/ugc-video-section';
import { HowToUseSection } from '@/components/sections/home/how-to-use-section';
import { BrandStoryVerticalBanners } from '@/components/sections/home/brand-story-vertical-banners';

export default function HomePage() {
  return (
    <>
      <HeroVideoSection />
      <ProductShowcaseCarousel />
      <ConsumerStudyResultsBanner />
      <RollingBenefitsTiles />
      <IngredientsBanner />
      <CertificationsBanner />
      <UgcVideoSection />
      <HowToUseSection />
      <BrandStoryVerticalBanners />
    </>
  );
}
