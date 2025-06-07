'use client';
import { CheckCircle } from 'lucide-react';
import { useFadeIn } from '@/hooks/use-fade-in';

const benefits = [
  "Promotes visible hair growth",
  "Reduces hair loss",
  "Boosts hair density & fullness",
  "Supports a healthier scalp",
];

// Duplicate benefits for seamless looping effect
const duplicatedBenefits = [...benefits, ...benefits, ...benefits]; // Ensure enough for smooth loop

export function RollingBenefitsTiles() {
  const fadeIn = useFadeIn<HTMLDivElement>();

  return (
    <section ref={fadeIn.ref} className={`py-12 md:py-16 bg-background overflow-hidden ${fadeIn.className}`}>
      <div className="container mx-auto px-4">
         <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-headline">Unlock Your Hair's Full Potential</h2>
      </div>
      <div className="relative flex overflow-hidden group">
        <div className="flex animate-scroll-horizontal group-hover:pause-animation py-4">
          {duplicatedBenefits.map((benefit, index) => (
            <div key={`benefit-${index}`} className="mx-4 flex-shrink-0 w-auto">
              <div className="bg-primary text-primary-foreground p-6 rounded-lg shadow-md flex items-center space-x-3 min-w-[300px] h-20 justify-center">
                <CheckCircle className="h-6 w-6 text-accent" />
                <span className="text-lg font-medium">{benefit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
