'use client';

import Image from 'next/image';
import { useFadeIn } from '@/hooks/use-fade-in';

const steps = [
  {
    id: 1,
    title: 'Step 1: Prepare',
    description: 'Start with a clean, dry or towel-dried scalp. Ensure your hair is free of other styling products.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'clean scalp hair'
  },
  {
    id: 2,
    title: 'Step 2: Apply',
    description: 'Apply 1-2 droppers full of serum directly to your scalp in areas of concern. Part hair as needed.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'serum application scalp'
  },
  {
    id: 3,
    title: 'Step 3: Massage',
    description: 'Gently massage the serum into your scalp with your fingertips for 1-2 minutes to ensure even distribution and absorption.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'scalp massage hair'
  },
  {
    id: 4,
    title: 'Step 4: Style',
    description: 'Do not rinse. Style your hair as usual. For best results, use daily, morning or night.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'styled hair healthy'
  },
];

export function HowToUseSection() {
  const fadeIn = useFadeIn<HTMLDivElement>();

  return (
    <section ref={fadeIn.ref} className={`py-12 md:py-20 bg-secondary ${fadeIn.className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-headline text-primary">Simple Steps to Luscious Hair</h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
          Integrating Lustrous Locks into your routine is easy. Follow these simple steps for optimal results.
        </p>
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="md:w-1/2">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl object-cover w-full"
                  data-ai-hint={step.dataAiHint}
                />
              </div>
              <div className="md:w-1/2">
                <span className="text-sm font-semibold text-accent uppercase tracking-wider">Step {step.id}</span>
                <h3 className="text-2xl md:text-3xl font-bold my-2 text-primary font-headline">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
