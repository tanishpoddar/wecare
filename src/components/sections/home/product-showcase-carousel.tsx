
'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ShieldCheck, Sparkles, Leaf, ListChecks } from 'lucide-react';
import React, { useRef, type ElementType, useState, useEffect } from 'react';
import { useFadeIn } from '@/hooks/use-fade-in';
import { cn } from '@/lib/utils';

interface CarouselItemDef {
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

const baseCarouselItems: CarouselItemDef[] = [
  {
    id: 'midimage1', // Updated ID
    type: 'image',
    content: {
      src: '/assets/images/midimage1.png', // Updated src
      alt: 'Lustrous Locks Hair Serum Feature', // Generic alt
      dataAiHint: 'serum feature product', // Generic hint
    },
  },
  {
    id: 'midvideo2', // Updated ID
    type: 'video',
    content: {
      src: '/assets/videos/midimage2.mp4', // Updated src
      dataAiHint: 'hair demonstration video', // Generic hint
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
    id: 'midvideo3', // Updated ID
    type: 'video',
    content: {
      src: '/assets/videos/midimage3.mp4', // Updated src
      dataAiHint: 'product in use lifestyle', // Generic hint
    },
  },
];

const CARD_WIDTH = 300;
const CARD_GAP = 24; 
const ITEMS_TO_SCROLL_BY_BUTTON = 1; 
const REPETITIONS = 6; 

const carouselItemsForDisplay = Array(REPETITIONS)
  .fill(null)
  .flatMap(() => baseCarouselItems);


export function ProductShowcaseCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const fadeIn = useFadeIn<HTMLDivElement>();
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = (CARD_WIDTH + CARD_GAP) * ITEMS_TO_SCROLL_BY_BUTTON;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleDotClick = (dotIndex: number) => {
    if (scrollContainerRef.current) {
      const targetScrollLeft = dotIndex * (CARD_WIDTH + CARD_GAP);
      scrollContainerRef.current.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollTimeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(scrollTimeoutId);
      scrollTimeoutId = setTimeout(() => {
        if (!container) return;
        const scrollLeft = container.scrollLeft;
        const itemWidthWithGap = CARD_WIDTH + CARD_GAP;
        
        const currentIndexInRepeatedList = Math.round(scrollLeft / itemWidthWithGap);
        
        const newActiveDotIndex = currentIndexInRepeatedList % baseCarouselItems.length;
        
        if (activeDotIndex !== newActiveDotIndex) {
          setActiveDotIndex(newActiveDotIndex);
        }
      }, 150); 
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
      clearTimeout(scrollTimeoutId);
    };
  }, [activeDotIndex]); 

  return (
    <section ref={fadeIn.ref} className={`py-12 md:py-16 bg-secondary ${fadeIn.className}`}>
      <div className="w-full">
        <div className="relative">
          <div 
            ref={scrollContainerRef} 
            className="flex overflow-x-auto space-x-6 pb-6 scrollbar-hide px-4 sm:px-6 lg:px-8"
          >
            {carouselItemsForDisplay.map((item, index) => (
              <div key={`${item.id}-rep-${index}`} className="flex-shrink-0 w-[300px] h-[450px]">
                <Card className="w-full h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-background">
                  {(item.type === 'image' || item.type === 'video') && item.content.src && (
                    <div className="relative w-full h-full">
                      {item.type === 'image' ? (
                        <Image
                          src={item.content.src}
                          alt={item.content.alt || 'Product image'}
                          fill
                          className="object-cover"
                          data-ai-hint={item.content.dataAiHint}
                          priority={index < 3} 
                        />
                      ) : (
                        <video
                          className="w-full h-full object-cover"
                          src={item.content.src}
                          autoPlay
                          loop
                          muted
                          playsInline
                          data-ai-hint={item.content.dataAiHint}
                        />
                      )}
                    </div>
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
                          {item.content.text.map((line, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-primary mr-2 text-lg">&#8226;</span>
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
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background flex shadow-md"
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background flex shadow-md"
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-2 mt-8">
          {baseCarouselItems.map((_, index) => (
            <button
              key={`dot-${index}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to item ${index + 1}`}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                activeDotIndex === index ? "bg-primary scale-110" : "bg-transparent border-2 border-primary/40 hover:bg-primary/20"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
