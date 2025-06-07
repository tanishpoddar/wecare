
'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem } from '@/components/ui/accordion';
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useFadeIn } from '@/hooks/use-fade-in';

const CustomAccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & { isOpen: boolean }
>(({ children, isOpen, className, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex w-full flex-1 items-center justify-between py-4 font-medium transition-all hover:no-underline text-left",
        className
      )}
      {...props}
    >
      {children}
      {isOpen ? <Minus className="h-5 w-5 shrink-0 text-primary" /> : <Plus className="h-5 w-5 shrink-0 text-primary" />}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
CustomAccordionTrigger.displayName = "CustomAccordionTrigger";


const accordionData = [
  {
    id: 'biotin-rosemary',
    title: 'Biotin & Rosemary',
    description: 'Support & revitalize hair health',
  },
  {
    id: 'redensyl-baicapil',
    title: 'Redensyl & Baicapil',
    description: 'Stimulate & reactivate growth',
  },
  {
    id: 'ashwagandha-zinc',
    title: 'Ashwagandha & Zinc',
    description: 'Fortify & strengthen hair',
  },
  {
    id: 'sawpalmetto-lycopodium',
    title: 'Saw Palmetto & Lycopodium',
    description: 'Protect & prevent hair loss',
  },
  {
    id: 'glycerin-arnica',
    title: 'Glycerin & Arnica',
    description: 'Hydrate & soothe the scalp',
  },
];
const defaultOpenValue = 'biotin-rosemary'; // Make the first item open by default

export function IngredientsAccordionSection() {
  const fadeIn = useFadeIn<HTMLDivElement>();
  const [activeValue, setActiveValue] = useState<string | undefined>(defaultOpenValue);

  return (
    <section ref={fadeIn.ref} className={`py-12 md:py-20 bg-background ${fadeIn.className}`}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Column: Image */}
          <div className="relative w-full aspect-[3/4] min-h-[400px] md:min-h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://placehold.co/600x800.png"
              alt="Natural ingredients research"
              fill
              className="object-cover"
              data-ai-hint="hands seeds natural"
            />
          </div>

          {/* Right Column: Accordion */}
          <div className="pt-0 md:pt-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline text-primary">Key Ingredients</h2>
            <Accordion
              type="single"
              collapsible
              value={activeValue}
              onValueChange={setActiveValue}
              className="w-full"
            >
              {accordionData.map((item) => (
                <AccordionItem key={item.id} value={item.id} className="border-b border-primary/30 last:border-b-0">
                  <CustomAccordionTrigger isOpen={activeValue === item.id}>
                    <span className="text-xl md:text-2xl font-medium text-primary font-headline">{item.title}</span>
                  </CustomAccordionTrigger>
                  <AccordionContent className="pt-2 pb-4">
                    <p className="text-foreground/80 text-sm leading-relaxed">{item.description}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
