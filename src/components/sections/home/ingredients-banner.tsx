
'use client';

import { Leaf, Zap, ShieldPlus, ShieldCheck, Droplets } from 'lucide-react';
import { IngredientCard } from '@/components/common/ingredient-card';
import { useFadeIn } from '@/hooks/use-fade-in';

const ingredients = [
  {
    Icon: Leaf,
    name: 'Biotin & Rosemary',
    description: 'Support & revitalize hair health',
    imageUrl: 'https://placehold.co/400x250.png',
    imageAlt: 'Biotin and Rosemary illustration',
    imageAiHint: 'herbs leaves',
  },
  {
    Icon: Zap,
    name: 'Redensyl & Baicapil',
    description: 'Stimulate & reactivate growth',
    imageUrl: 'https://placehold.co/400x250.png',
    imageAlt: 'Redensyl and Baicapil molecular structure',
    imageAiHint: 'science molecules',
  },
  {
    Icon: ShieldPlus,
    name: 'Ashwagandha & Zinc',
    description: 'Fortify & strengthen hair',
    imageUrl: 'https://placehold.co/400x250.png',
    imageAlt: 'Ashwagandha root and Zinc mineral',
    imageAiHint: 'root minerals',
  },
  {
    Icon: ShieldCheck,
    name: 'Saw Palmetto & Lycopodium',
    description: 'Protect & prevent hair loss',
    imageUrl: 'https://placehold.co/400x250.png',
    imageAlt: 'Saw Palmetto berries and Lycopodium plant',
    imageAiHint: 'plant extract',
  },
  {
    Icon: Droplets,
    name: 'Glycerin & Arnica',
    description: 'Hydrate & soothe the scalp',
    imageUrl: 'https://placehold.co/400x250.png',
    imageAlt: 'Glycerin droplets and Arnica flower',
    imageAiHint: 'flower droplets',
  },
];

export function IngredientsBanner() {
  const fadeIn = useFadeIn<HTMLDivElement>();
  return (
    <section ref={fadeIn.ref} className={`py-12 md:py-20 bg-background ${fadeIn.className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-headline text-primary">Powered by Nature & Science</h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
          Our unique blend of potent, carefully selected ingredients works synergistically to deliver transformative results.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {ingredients.map((ingredient, index) => (
            <IngredientCard
              key={ingredient.name}
              Icon={ingredient.Icon}
              name={ingredient.name}
              description={ingredient.description}
              imageUrl={ingredient.imageUrl}
              imageAlt={ingredient.imageAlt}
              imageAiHint={ingredient.imageAiHint}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
