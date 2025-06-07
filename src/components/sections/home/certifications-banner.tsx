
'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { BadgeCheck, Leaf, ShieldAlert, TestTube2, Smile, Rabbit, WineOff, ChevronLeft, ChevronRight } from 'lucide-react';
import { CertificationBadge } from '@/components/common/certification-badge';
import { useFadeIn } from '@/hooks/use-fade-in';
import { Button } from '@/components/ui/button';

const certifications = [
  { Icon: TestTube2, label: 'Clinically Tested' },
  { Icon: BadgeCheck, label: 'Dermatologically Tested' },
  { Icon: Leaf, label: 'Clean Ingredients' },
  { Icon: Rabbit, label: 'Cruelty Free' },
  { Icon: WineOff, label: 'Alcohol Free' },
  { Icon: ShieldAlert, label: 'Hypoallergenic' },
  { Icon: Smile, label: 'Vegan Friendly' },
];

const carouselImagesData = [
  { id: 1, src: 'https://placehold.co/400x300.png', alt: 'Serum Feature Example 1', dataAiHint: 'product lifestyle' },
  { id: 2, src: 'https://placehold.co/400x300.png', alt: 'Serum Feature Example 2', dataAiHint: 'natural ingredients' },
  { id: 3, src: 'https://placehold.co/400x300.png', alt: 'Serum Feature Example 3', dataAiHint: 'hair results' },
  { id: 4, src: 'https://placehold.co/400x300.png', alt: 'Serum Feature Example 4', dataAiHint: 'serum texture' },
];

export function CertificationsBanner() {
  const fadeIn = useFadeIn<HTMLDivElement>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImagesData.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + carouselImagesData.length) % carouselImagesData.length);
  };
  
  const currentImage = carouselImagesData[currentImageIndex];

  return (
    <section ref={fadeIn.ref} className={`py-12 md:py-20 bg-primary/5 ${fadeIn.className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-headline text-primary">Trusted & Certified Quality</h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
          We are committed to the highest standards of safety and efficacy. Our serum is formulated with care and rigorously tested.
        </p>
        
        <div className="md:grid md:grid-cols-2 md:gap-8 lg:gap-12 items-center">
          {/* Column 1: Certification Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-5">
            {certifications.map((cert) => (
              <CertificationBadge key={cert.label} Icon={cert.Icon} label={cert.label} />
            ))}
          </div>

          {/* Column 2: Image Carousel */}
          <div className="relative mt-8 md:mt-0">
            <div className="aspect-video w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-xl bg-background">
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                width={400}
                height={300}
                className="w-full h-full object-cover"
                data-ai-hint={currentImage.dataAiHint}
                priority={currentImageIndex === 0}
              />
            </div>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background flex shadow-md transform -translate-x-1/2 sm:-translate-x-1/4 md:-translate-x-4"
              onClick={prevImage}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background flex shadow-md transform translate-x-1/2 sm:translate-x-1/4 md:translate-x-4"
              onClick={nextImage}
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
             <div className="flex justify-center space-x-2 mt-4">
              {carouselImagesData.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`Go to image ${index + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                    currentImageIndex === index ? "bg-primary scale-110" : "bg-muted hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
