
'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ShieldCheck, Sparkles, Leaf, ListChecks } from 'lucide-react';
import React, { useRef, type ElementType } from 'react';
import { useFadeIn } from '@/hooks/use-fade-in';

interface CarouselItem {
  id: string;
  type: 'image' | 'video' | 'textBlock';
  content: {
    src?: string; // For image/video
    alt?: string; // For image
    title?: string; // For textBlock
    text?: string | string[]; // For textBlock (string array for list items)
    Icon?: ElementType; // Optional icon for textBlock
    dataAiHint?: string; // For images/videos
  };
}

const carouselItems: CarouselItem[] = [
  {
    id: 'serum-image',
    type: 'image',
    content: {
      src: 'https://placehold.co/400x500.png',
      alt: 'Lustrous Locks Hair Serum Bottle',
      dataAiHint: 'serum bottle beauty',
    },
  },
  {
    id: 'serum-video-1',
    type: 'video',
    content: {
      src: 'https://videos.pexels.com/video-files/7697121/7697121-sd_540_960_25fps.mp4',
      dataAiHint: 'woman beautiful hair',
    },
  },
  {
    id: 'dermatologically-tested',
    type: 'textBlock',
    content: {
      Icon: ShieldCheck,
      title: 'Dermatologically Tested',
      text: 'Our formula is rigorously tested for safety and efficacy, ensuring it\'s gentle on your scalp.',
    },
  },
  {
    id: 'claims',
    type: 'textBlock',
    content: {
      Icon: Sparkles,
      title: 'Proven Claims',
      text: ['Visibly Thicker Hair in Weeks', 'Reduces Hair Fall Significantly', 'Boosts Natural Shine & Softness', 'Healthier, Revitalized Scalp'],
    },
  },
  {
    id: 'ingredients',
    type: 'textBlock',
    content: {
      Icon: Leaf,
      title: 'Key Ingredients',
      text: ['Biotin Complex', 'Rosemary Extract', 'Redensyl™', 'Peptide Blend', 'Botanical Oils'],
    },
  },
  {
    id: 'how-to-use',
    type: 'textBlock',
    content: {
      Icon: ListChecks,
      title: 'Simple How-To-Use',
      text: ['1. Apply a few drops to clean scalp daily.', '2. Massage gently for 1-2 minutes.', '3. Do not rinse. Style as usual.'],
    },
  },
  {
    id: 'serum-video-2',
    type: 'video',
    content: {
      src: 'https://videos.pexels.com/video-files/8131991/8131991-sd_540_960_25fps.mp4',
      dataAiHint: 'hair product application',
    },
  },
];


export function ProductShowcaseCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const fadeIn = useFadeIn<HTMLDivElement>();

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.75; // Scroll by 75% of visible width
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section ref={fadeIn.ref} className={`py-12 md:py-16 bg-secondary ${fadeIn.className}`}>
      <div className="container mx-auto px-4">
        {/* Title and description removed as per request */}
        <div className="relative">
          <div ref={scrollContainerRef} className="flex overflow-x-auto space-x-6 pb-6 scrollbar-hide">
            {carouselItems.map((item) => (
              <div key={item.id} className="flex-shrink-0 w-[300px]">
                <Card className="h-[450px] flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-background">
                  {item.type === 'image' && item.content.src && (
                    <CardHeader className="p-0 relative w-full h-2/3">
                      <Image
                        src={item.content.src}
                        alt={item.content.alt || 'Product image'}
                        fill
                        className="object-cover"
                        data-ai-hint={item.content.dataAiHint}
                      />
                    </CardHeader>
                  )}
                  {item.type === 'video' && item.content.src && (
                    <div className="relative w-full h-2/3 bg-black">
                      <video
                        className="w-full h-full object-cover"
                        src={item.content.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        data-ai-hint={item.content.dataAiHint}
                      />
                    </div>
                  )}
                  
                  {(item.type === 'image' || item.type === 'video') && (item.content.title || item.content.text) && (
                     <CardContent className="p-4 flex flex-col justify-center items-center text-center flex-grow">
                        {item.content.Icon && <item.content.Icon className="w-10 h-10 text-primary mb-2" />}
                        {item.content.title && <CardTitle className="text-lg font-headline text-primary mb-1">{item.content.title}</CardTitle>}
                        {typeof item.content.text === 'string' && <p className="text-sm text-muted-foreground">{item.content.text}</p>}
                     </CardContent>
                  )}

                  {item.type === 'textBlock' && (
                    <CardContent className="p-6 flex flex-col justify-center items-center text-center h-full">
                      {item.content.Icon && <item.content.Icon className="w-12 h-12 text-primary mb-4" />}
                      {item.content.title && <CardTitle className="text-xl font-headline text-primary mb-3">{item.content.title}</CardTitle>}
                      {typeof item.content.text === 'string' && (
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.content.text}</p>
                      )}
                      {Array.isArray(item.content.text) && (
                        <ul className="space-y-1 text-sm text-muted-foreground list-none text-left">
                          {item.content.text.map((line, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-primary mr-2 text-lg">&#8226;</span> {/* Custom bullet */}
                              {line}
                            </li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                  )}
                </Card>
              </div>
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background hidden md:flex"
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background hidden md:flex"
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
