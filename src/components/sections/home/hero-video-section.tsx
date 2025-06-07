
'use client';

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useFadeIn } from "@/hooks/use-fade-in";

// Updated to use local video file names
const baseVideoSources = [
  "/assets/videos/topvideo1.mp4",
  "/assets/videos/topvideo2.mp4",
  "/assets/videos/topvideo3.mp4",
  "/assets/videos/topvideo4.mp4",
  "/assets/videos/topvideo5.mp4",
];

// Corresponding AI hints, ensure this array length matches baseVideoSources if used
const baseVideoDataAiHints = [
  "skincare application model",
  "face care routine",
  "woman beautiful hair",
  "makeup tutorial beauty",
  "hair serum model",
];

const CARD_WIDTH_CLASSES = "w-64 sm:w-72 md:w-80"; 
const SCROLL_SPACING_CLASSES = "space-x-4 md:space-x-6"; 
const SCROLL_AMOUNT_PX = 320 + 24; // Approximate width of md card (320px) + md gap (24px)

export function HeroVideoSection() {
  const fadeIn = useFadeIn<HTMLDivElement>();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -SCROLL_AMOUNT_PX : SCROLL_AMOUNT_PX,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section ref={fadeIn.ref} className={`py-8 md:py-12 bg-background ${fadeIn.className}`}>
      <div className="relative">
        
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-background/80 hover:bg-background flex shadow-md md:left-4"
          onClick={() => scroll('left')}
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        
        <div 
          ref={scrollContainerRef}
          className={`flex overflow-x-auto ${SCROLL_SPACING_CLASSES} pb-4 scroll-smooth scrollbar-hide px-4 sm:px-6 lg:px-8`}
        >
          {baseVideoSources.map((src, index) => (
            <div
              key={`hero-video-${src}-${index}`} 
              className={`flex-shrink-0 ${CARD_WIDTH_CLASSES} aspect-[9/16] rounded-lg overflow-hidden shadow-lg`}
            >
              <video
                className="w-full h-full object-cover"
                src={src} // Use the local path
                autoPlay
                loop
                muted
                playsInline
                data-ai-hint={baseVideoDataAiHints[index % baseVideoDataAiHints.length]}
              />
            </div>
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-background/80 hover:bg-background flex shadow-md md:right-4"
          onClick={() => scroll('right')}
          aria-label="Scroll right"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
}
