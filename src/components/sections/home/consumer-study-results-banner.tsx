
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';
import { useFadeIn } from '@/hooks/use-fade-in';

const studyHighlights = [
  { stat: '90%', text: 'noticed an improvement in the look of fullness of their hair' },
  { stat: '87%', text: 'noticed an increase in how dense their hair looked*' },
  { stat: '82%', text: 'noticed their scalp felt less dry*' },
];

const carouselImages = [
  { id: 'month0', src: 'https://placehold.co/400x400.png', alt: 'Hair transformation - Month 0', label: 'MONTH 0', dataAiHint: 'hair before' },
  { id: 'month3', src: 'https://placehold.co/400x400.png', alt: 'Hair transformation - Month 3', label: 'MONTH 3', dataAiHint: 'hair after' },
  { id: 'month6', src: 'https://placehold.co/400x400.png', alt: 'Hair transformation - Month 6', label: 'MONTH 6', dataAiHint: 'hair progress' },
];

export function ConsumerStudyResultsBanner() {
  const fadeIn = useFadeIn<HTMLDivElement>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length);
  };

  const currentImage = carouselImages[currentImageIndex];

  return (
    <section ref={fadeIn.ref} className={`py-12 md:py-20 bg-secondary ${fadeIn.className}`}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
              Introducing Our Award Winning Scalp Serum
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Give your scalp a spa day, every day, with our award-winning, clinically tested Scalp Serum. With ingredients like caffeine, peppermint and rosemary oil, this water-based formula has been shown to improve the look of hair fullness and density in as little as 6 weeks*. So, show your scalp the TLC it deserves—your hair will thank you, too.
            </p>
            <p className="text-xs text-muted-foreground">*In an independent study over 6 weeks of daily use.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {studyHighlights.map((result, index) => (
                <Card key={index} className="text-center bg-background p-4 shadow-md">
                  <CardContent className="p-0">
                    <div className="text-4xl font-bold text-accent mb-2">{result.stat}</div>
                    <p className="text-sm text-muted-foreground leading-tight">{result.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
             <p className="text-xs text-muted-foreground pt-2">*Results from a user self-assessment questionnaire in an independent study over 12 weeks of daily use. Results may vary.</p>
          </div>

          {/* Right Column: Image Carousel */}
          <div className="relative">
            <div className="aspect-square w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-xl bg-background">
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                width={400}
                height={400}
                className="w-full h-full object-cover"
                data-ai-hint={currentImage.dataAiHint}
                priority
              />
            </div>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background flex shadow-md transform -translate-x-1/2 sm:-translate-x-1/4 md:-translate-x-8"
              onClick={prevImage}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background flex shadow-md transform translate-x-1/2 sm:translate-x-1/4 md:translate-x-8"
              onClick={nextImage}
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
