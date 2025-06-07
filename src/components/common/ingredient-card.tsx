import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface IngredientCardProps {
  Icon: LucideIcon;
  name: string;
  description: string;
}

export function IngredientCard({ Icon, name, description }: IngredientCardProps) {
  return (
    <Card className="bg-secondary/50 shadow-lg text-center h-full">
      <CardHeader>
        <div className="mx-auto bg-primary text-primary-foreground rounded-full p-3 w-16 h-16 flex items-center justify-center mb-2">
          <Icon className="w-8 h-8" />
        </div>
        <CardTitle className="text-xl text-primary font-headline">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
