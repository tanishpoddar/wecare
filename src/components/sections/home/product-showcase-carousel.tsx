'use client';

import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { useFadeIn } from '@/hooks/use-fade-in';

const products = [
  { id: 1, name: 'Growth Serum', image: 'https://placehold.co/400x500.png', price: '$49.99', benefits: ['Promotes Growth', 'Reduces Loss'], dataAiHint: 'serum bottle' },
  { id: 2, name: 'Density Serum', image: 'https://placehold.co/400x500.png', price: '$52.99', benefits: ['Boosts Density', 'Adds Fullness'], dataAiHint: 'hair product' },
  { id: 3, name: 'Scalp Health Serum', image: 'https://placehold.co/400x500.png', price: '$45.99', benefits: ['Soothes Scalp', 'Hydrates'], dataAiHint: 'cosmetic bottle' },
  { id: 4, name: 'Repair Serum', image: 'https://placehold.co/400x500.png', price: '$55.99', benefits: ['Repairs Damage', 'Strengthens'], dataAiHint: 'beauty serum' },
  { id: 5, name: 'Shine Serum', image: 'https://placehold.co/400x500.png', price: '$42.99', benefits: ['Adds Shine', 'Smooths Frizz'], dataAiHint: 'luxury cosmetic' },
];

export function ProductShowcaseCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const fadeIn = useFadeIn<HTMLDivElement>();

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8; // Scroll by 80% of visible width
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section ref={fadeIn.ref} className={`py-12 md:py-20 bg-background ${fadeIn.className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-headline">Discover Our Serums</h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
          Targeted solutions for your unique hair needs, crafted with the finest ingredients.
        </p>
        <div className="relative">
          <div ref={scrollContainerRef} className="flex overflow-x-auto space-x-6 pb-6 scrollbar-hide">
            {products.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-[280px] md:w-[300px] lg:w-[230px]"> {/* Adjusted widths for responsiveness */}
                <Card className="h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="p-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={500}
                      className="w-full h-64 object-cover" // Standardized image height
                      data-ai-hint={product.dataAiHint}
                    />
                  </CardHeader>
                  <CardContent className="flex-grow p-4">
                    <CardTitle className="text-xl mb-2 font-headline">{product.name}</CardTitle>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      {product.benefits.map(benefit => <li key={benefit}>{benefit}</li>)}
                    </ul>
                  </CardContent>
                  <CardFooter className="p-4 flex flex-col items-start">
                     <p className="text-lg font-semibold text-primary mb-3">{product.price}</p>
                    <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Link href={`/shop#product-${product.id}`}>View Product</Link>
                    </Button>
                  </CardFooter>
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
