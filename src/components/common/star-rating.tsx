'use client';
import { Star, StarHalf } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  totalStars?: number;
  size?: number;
  className?: string;
}

export function StarRating({ rating, totalStars = 5, size = 20, className }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = totalStars - fullStars - halfStar;

  return (
    <div className={`flex items-center ${className}`} aria-label={`Rating: ${rating} out of ${totalStars} stars`}>
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} fill="hsl(var(--accent))" strokeWidth={0} width={size} height={size} />
      ))}
      {halfStar === 1 && (
        <StarHalf key="half" fill="hsl(var(--accent))" strokeWidth={0} width={size} height={size} />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} fill="hsl(var(--muted))" strokeWidth={0} width={size} height={size} />
      ))}
    </div>
  );
}
