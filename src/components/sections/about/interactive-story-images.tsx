'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlusCircle, MinusCircle } from 'lucide-react';
import { useFadeIn } from '@/hooks/use-fade-in';

const storyItems = [
  {
    id: 1,
    image: 'https://placehold.co/800x600.png',
    title: 'Our Humble Beginnings',
    text: 'Lustrous Locks was born from a personal journey to find effective, natural hair care solutions. Frustrated by products filled with harsh chemicals, our founders embarked on a mission to create something truly different.',
    dataAiHint: 'nature landscape serene'
  },
  {
    id: 2,
    image: 'https://placehold.co/800x600.png',
    title: 'The Science of Beauty',
    text: 'We delved deep into trichology and plant-based actives, partnering with leading scientists to blend ancient wisdom with modern research. Each ingredient is chosen for its proven benefits and synergistic power.',
    dataAiHint: 'laboratory research science'
  },
  {
    id: 3,
    image: 'https://placehold.co/800x600.png',
    title: 'Commitment to Quality',
    text: 'From sourcing the finest raw materials to meticulous manufacturing processes, quality is at the heart of everything we do. We believe you deserve the best, and we strive to deliver it in every bottle.',
    dataAiHint: 'artisans crafting product'
  },
  {
    id: 4,
    image: 'https://placehold.co/800x600.png',
    title: 'Empowering Confidence',
    text: 'Our ultimate goal is to help you feel confident and beautiful in your own hair. We celebrate all hair types and are dedicated to creating products that make a real difference in your hair health journey.',
    dataAiHint: 'diverse people smiling'
  },
];

export function InteractiveStoryImages() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const fadeIn = useFadeIn<HTMLDivElement>();

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section ref={fadeIn.ref} className={`py-12 md:py-20 bg-background ${fadeIn.className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-headline">Our Journey</h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
          Discover the passion, research, and dedication that goes into every bottle of Lustrous Locks serum.
        </p>
        <div className="space-y-8">
          {storyItems.map((item) => (
            <Card key={item.id} className="overflow-hidden shadow-lg">
              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={expandedId === item.id ? 400 : 600} // Adjust height on expand
                  className="w-full object-cover transition-all duration-500 ease-in-out"
                  data-ai-hint={item.dataAiHint}
                />
                <div 
                  className="absolute inset-0 bg-black/30 flex flex-col items-center justify-end p-6 text-white cursor-pointer"
                  onClick={() => toggleExpand(item.id)}
                >
                  <div className="flex items-center justify-between w-full">
                    <h3 className="text-2xl font-bold font-headline">{item.title}</h3>
                    {expandedId === item.id ? <MinusCircle className="w-8 h-8" /> : <PlusCircle className="w-8 h-8" />}
                  </div>
                </div>
              </div>
              {expandedId === item.id && (
                <CardContent className="p-6 bg-secondary">
                  <p className="text-secondary-foreground leading-relaxed animate-accordion-down">{item.text}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
