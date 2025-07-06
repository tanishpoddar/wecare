'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { StarRating } from '@/components/common/star-rating';
import { CheckCircle, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useFadeIn } from '@/hooks/use-fade-in';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const product = {
  id: 'wecare-serum',
  name: 'wecare Hair Growth Serum',
  price: '$49.99',
  images: [
    { id: 1, src: 'https://placehold.co/600x800.png', alt: 'Serum Bottle Front', dataAiHint: 'serum bottle primary' },
    { id: 2, src: 'https://placehold.co/600x800.png', alt: 'Serum Texture', dataAiHint: 'serum texture cosmetic' },
    { id: 3, src: 'https://placehold.co/600x800.png', alt: 'Serum Packaging', dataAiHint: 'product packaging beauty' },
    { id: 4, src: 'https://placehold.co/600x800.png', alt: 'Model using Serum', dataAiHint: 'model hair product' },
  ],
  amazonLink: '#', // Placeholder Amazon link
  amazonReviews: { stars: 4.8, count: 1250 },
  description: "Unlock the secret to healthier, fuller hair with wecare Growth Serum. Our expertly formulated serum combines the best of nature and science to nourish your scalp, strengthen follicles, and promote visible hair growth. Lightweight, non-greasy, and suitable for all hair types.",
  keyBenefits: [
    'Promotes visible hair growth and thickness',
    'Reduces hair thinning and loss',
    'Strengthens hair follicles from the root',
    'Nourishes and revitalizes the scalp',
    'Improves hair density and fullness',
    'Made with clean, clinically tested ingredients',
  ],
  howToUse: "Apply a few drops to a clean, dry or damp scalp. Massage gently for 1-2 minutes. Use daily for best results. Do not rinse.",
  ingredients: "Biotin, Rosemary Extract, Redensyl, Baicapil, Ashwagandha, Zinc, Saw Palmetto, Lycopodium Extract, Glycerin, Arnica Montana Flower Extract, Aqua, Propanediol, etc."
};

export function ShopProductDetailSection() {
  const [mainImage, setMainImage] = React.useState(product.images[0]);
  const fadeIn = useFadeIn<HTMLDivElement>();

  return (
    <section ref={fadeIn.ref} id={`product-${product.id}`} className={`py-12 md:py-16 bg-background ${fadeIn.className}`}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src={mainImage.src}
                alt={mainImage.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 hover:scale-105"
                priority
                data-ai-hint={mainImage.dataAiHint}
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img) => (
                <button
                  key={img.id}
                  onClick={() => setMainImage(img)}
                  className={`relative aspect-square w-full overflow-hidden rounded-md border-2 transition-all ${
                    mainImage.id === img.id ? 'border-primary ring-2 ring-primary' : 'border-transparent hover:border-primary/50'
                  }`}
                  aria-label={`View image ${img.id}`}
                >
                  <Image src={img.src} alt={img.alt} fill className="object-cover" data-ai-hint={img.dataAiHint.replace('primary', 'thumbnail')}/>
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold font-headline text-primary">{product.name}</h1>
            
            <div className="flex items-center space-x-2">
              <StarRating rating={product.amazonReviews.stars} size={24} />
              <span className="text-muted-foreground">({product.amazonReviews.count} Amazon reviews)</span>
            </div>

            <p className="text-3xl font-semibold text-accent">{product.price}</p>
            
            <p className="text-foreground/80 leading-relaxed">{product.description}</p>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-primary">Key Benefits:</h3>
              <ul className="space-y-1">
                {product.keyBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-foreground/80">
                    <CheckCircle className="w-5 h-5 text-accent mr-2 shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            
            <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-3" asChild>
              <Link href={product.amazonLink} target="_blank" rel="noopener noreferrer">
                <ShoppingCart className="w-5 h-5 mr-2" /> Buy Now on Amazon
              </Link>
            </Button>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="how-to-use">
                <AccordionTrigger className="text-primary font-semibold hover:text-accent">How to Use</AccordionTrigger>
                <AccordionContent className="text-foreground/80">
                  {product.howToUse}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="ingredients">
                <AccordionTrigger className="text-primary font-semibold hover:text-accent">Ingredients</AccordionTrigger>
                <AccordionContent className="text-foreground/80">
                  {product.ingredients}
                </AccordionContent>
              </AccordionItem>
            </Accordion>

          </div>
        </div>
      </div>
    </section>
  );
}
