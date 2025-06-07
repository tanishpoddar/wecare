'use client';

import Image from 'next/image';
import { StarRating } from '@/components/common/star-rating';
import { Card, CardContent } from '@/components/ui/card';
import { useFadeIn } from '@/hooks/use-fade-in';

const testimonials = [
  {
    id: 1,
    name: 'Sarah L.',
    review: "My hair has never felt stronger or looked shinier! I saw noticeable growth in just 4 weeks.",
    rating: 5,
    image: 'https://placehold.co/100x100/F5F5DC/228B22.png',
    dataAiHint: 'happy customer portrait'
  },
  {
    id: 2,
    name: 'Michael B.',
    review: "Reduced hair fall significantly. The serum is lightweight and smells great. Highly recommend!",
    rating: 4.5,
    image: 'https://placehold.co/100x100/F5F5DC/228B22.png',
    dataAiHint: 'satisfied user'
  },
  {
    id: 3,
    name: 'Jessica P.',
    review: "My scalp feels so much healthier and my hair is definitely denser. This is a game changer.",
    rating: 5,
    image: 'https://placehold.co/100x100/F5F5DC/228B22.png',
    dataAiHint: 'smiling person'
  },
];

const studyResults = [
  { id: 1, stat: '92%', text: 'Reported visible hair growth' },
  { id: 2, stat: '88%', text: 'Experienced reduced hair loss' },
  { id: 3, stat: '95%', text: 'Noticed boosted hair density & fullness' },
];

export function ConsumerStudyResultsBanner() {
  const fadeIn = useFadeIn<HTMLDivElement>();

  return (
    <section ref={fadeIn.ref} className={`py-12 md:py-20 bg-secondary ${fadeIn.className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-headline text-primary">Real Results, Real People</h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
          Don't just take our word for it. See what our customers and clinical studies say about Lustrous Locks serum.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {studyResults.map(result => (
            <Card key={result.id} className="text-center bg-background p-6 shadow-lg">
              <div className="text-5xl font-bold text-accent mb-2">{result.stat}</div>
              <p className="text-muted-foreground">{result.text}</p>
            </Card>
          ))}
        </div>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-background shadow-lg overflow-hidden">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full mb-4 border-2 border-accent"
                  data-ai-hint={testimonial.dataAiHint}
                />
                <h3 className="font-semibold text-lg mb-1 text-primary">{testimonial.name}</h3>
                <StarRating rating={testimonial.rating} size={20} className="mb-2" />
                <p className="text-sm text-muted-foreground italic">"{testimonial.review}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
