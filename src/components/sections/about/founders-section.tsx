'use client';

import Image from 'next/image';
import { useFadeIn } from '@/hooks/use-fade-in';

const founders = [
  {
    id: 1,
    name: 'Dr. Evelyn Reed',
    title: 'Co-Founder & Chief Scientist',
    image: 'https://placehold.co/400x400.png',
    bio: "Dr. Reed is a renowned trichologist with over 15 years of experience in hair and scalp research. Her passion for natural remedies and scientific innovation led her to co-found Lustrous Locks, aiming to create effective solutions that honor both nature and efficacy.",
    dataAiHint: 'professional woman scientist'
  },
  {
    id: 2,
    name: 'Marcus Chen',
    title: 'Co-Founder & CEO',
    image: 'https://placehold.co/400x400.png',
    bio: "With a background in sustainable business and a personal quest for better hair care, Marcus teamed up with Dr. Reed to bring Lustrous Locks to life. He champions the brand's commitment to quality, transparency, and customer satisfaction.",
    dataAiHint: 'professional man ceo'
  },
];

export function FoundersSection() {
  const fadeIn = useFadeIn<HTMLDivElement>();

  return (
    <section ref={fadeIn.ref} className={`py-12 md:py-20 bg-secondary ${fadeIn.className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-headline text-primary">Meet Our Founders</h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
          The visionaries behind Lustrous Locks, dedicated to revolutionizing hair wellness.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          {founders.map((founder) => (
            <div key={founder.id} className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-8 bg-background p-8 rounded-lg shadow-xl">
              <Image
                src={founder.image}
                alt={founder.name}
                width={200}
                height={200}
                className="rounded-full w-40 h-40 md:w-48 md:h-48 object-cover border-4 border-accent flex-shrink-0"
                data-ai-hint={founder.dataAiHint}
              />
              <div>
                <h3 className="text-2xl font-bold text-primary font-headline">{founder.name}</h3>
                <p className="text-accent font-semibold mb-2">{founder.title}</p>
                <p className="text-muted-foreground leading-relaxed">{founder.bio}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold mb-2 text-primary font-headline">Our Mission</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                "To empower individuals worldwide with healthier, more vibrant hair through innovative, nature-infused solutions, fostering confidence and well-being, one strand at a time."
            </p>
        </div>
      </div>
    </section>
  );
}
