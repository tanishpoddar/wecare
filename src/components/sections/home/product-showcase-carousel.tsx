
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

const CARD_WIDTH = 300;
const CARD_GAP = 24; // Tailwind space-x-6 is 1.5rem = 24px
const ITEMS_TO_SCROLL_BY_BUTTON = 1; 
const REPETITIONS = 6; // Increase repetitions for a more "endless" feel

// Repeat items to simulate infinite scroll
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
      // Scroll to the first occurrence of this item's original index
      const targetScrollLeft = dotIndex * (CARD_WIDTH + CARD_GAP);
      scrollContainerRef.current.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth',
      });
      // setActiveDotIndex will be updated by the onScroll handler
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollTimeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(scrollTimeoutId);
      scrollTimeoutId = setTimeout(() => {
        const scrollLeft = container.scrollLeft;
        const itemWidthWithGap = CARD_WIDTH + CARD_GAP;
        
        // Calculate current index based on what item is at the start of the viewport
        const currentIndexInRepeatedList = Math.round(scrollLeft / itemWidthWithGap);
        
        const newActiveDotIndex = currentIndexInRepeatedList % baseCarouselItems.length;
        
        if (activeDotIndex !== newActiveDotIndex) {
          setActiveDotIndex(newActiveDotIndex);
        }
      }, 150); // Debounce scroll event slightly
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check in case of pre-existing scroll position

    return () => {
      container.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeoutId);
    };
  }, [activeDotIndex]); // Re-attach if activeDotIndex changes from outside, though mostly driven by scroll

  return (
    <section ref={fadeIn.ref} className={`py-12 md:py-16 bg-secondary ${fadeIn.className}`}>
      <div className="container mx-auto px-4">
        <div className="relative">
          <div ref={scrollContainerRef} className="flex overflow-x-auto space-x-6 pb-6 scrollbar-hide">
            {carouselItemsForDisplay.map((item, index) => (
              <div key={`${item.id}-rep-${index}`} className="flex-shrink-0 w-[300px] h-[450px]"> {/* Unique key */}
                <Card className="w-full h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-background">
                  {(item.type === 'image' || item.type === 'video') && item.content.src && (
                    <div className="relative w-full h-full bg-black">
                      {item.type === 'image' ? (
                        <Image
                          src={item.content.src}
                          alt={item.content.alt || 'Product image'}
                          fill
                          className="object-cover"
                          data-ai-hint={item.content.dataAiHint}
                          priority={index < 3} // Prioritize loading for initial items
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

        {/* Pagination Dots */}
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
