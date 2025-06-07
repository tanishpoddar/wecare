import type { LucideIcon } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface IngredientCardProps {
  Icon: LucideIcon;
  name: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  imageAiHint: string;
}

export function IngredientCard({ Icon, name, description, imageUrl, imageAlt, imageAiHint }: IngredientCardProps) {
  return (
    <Card className="bg-secondary/50 shadow-lg text-center h-full flex flex-col">
      <CardHeader className="p-0">
        {imageUrl && (
          <div className="relative w-full h-48 rounded-t-lg overflow-hidden">
            <Image src={imageUrl} alt={imageAlt} fill className="object-cover" data-ai-hint={imageAiHint} />
          </div>
        )}
      </CardHeader>
      <div className="p-6 flex flex-col flex-grow">
        <div className="mx-auto bg-primary text-primary-foreground rounded-full p-3 w-16 h-16 flex items-center justify-center mb-3 mt-[-32px] relative z-10 border-4 border-secondary/50">
          <Icon className="w-8 h-8" />
        </div>
        <CardTitle className="text-xl text-primary font-headline mb-2">{name}</CardTitle>
        <CardContent className="p-0 flex-grow">
          <p className="text-muted-foreground text-sm">{description}</p>
        </CardContent>
      </div>
    </Card>
  );
}
