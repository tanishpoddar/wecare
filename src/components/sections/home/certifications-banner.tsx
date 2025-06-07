'use client';

import { BadgeCheck, Leaf, ShieldAlert, TestTube2, Smile, Rabbit, WineOff } from 'lucide-react';
import { CertificationBadge } from '@/components/common/certification-badge';
import { useFadeIn } from '@/hooks/use-fade-in';

const certifications = [
  { Icon: TestTube2, label: 'Clinically Tested' },
  { Icon: BadgeCheck, label: 'Dermatologically Tested' },
  { Icon: Leaf, label: 'Clean Ingredients' },
  { Icon: Rabbit, label: 'Cruelty Free' },
  { Icon: WineOff, label: 'Alcohol Free' },
  { Icon: ShieldAlert, label: 'Hypoallergenic' },
  { Icon: Smile, label: 'Vegan Friendly' }, // Using Smile instead of Vegan icon as per instructions to check if icon exists
];

export function CertificationsBanner() {
  const fadeIn = useFadeIn<HTMLDivElement>();
  return (
    <section ref={fadeIn.ref} className={`py-12 md:py-20 bg-primary/5 ${fadeIn.className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-headline text-primary">Trusted & Certified Quality</h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
          We are committed to the highest standards of safety and efficacy. Our serum is formulated with care and rigorously tested.
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 md:gap-6">
          {certifications.map((cert) => (
            <CertificationBadge key={cert.label} Icon={cert.Icon} label={cert.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
