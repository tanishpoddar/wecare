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
    <section ref={fadeIn.ref} className={`py-4 bg-primary overflow-hidden ${fadeIn.className}`}>
      {/* Title removed */}
      <div className="relative flex overflow-hidden group">
        <div className="flex animate-scroll-horizontal group-hover:pause-animation py-2">
          {duplicatedBenefits.map((benefit, index) => (
            <div key={`benefit-${index}`} className="mx-4 flex-shrink-0 w-auto">
              <div className="text-primary-foreground p-4 rounded-lg flex items-center space-x-3 min-w-[300px] h-auto justify-center">
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
