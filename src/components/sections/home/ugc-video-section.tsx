'use client';

import Image from 'next/image';
import { PlayCircle } from 'lucide-react';
import { useFadeIn } from '@/hooks/use-fade-in';

const ugcVideos = [
  { id: 1, thumbnailUrl: 'https://placehold.co/600x400.png', user: '@hairlover123', dataAiHint: 'user testimonial video' },
  { id: 2, thumbnailUrl: 'https://placehold.co/600x400.png', user: '@glowupjourney', dataAiHint: 'hair transformation' },
  { id: 3, thumbnailUrl: 'https://placehold.co/600x400.png', user: '@naturalbeauty', dataAiHint: 'product review' },
  { id: 4, thumbnailUrl: 'https://placehold.co/600x400.png', user: '@selfcareguru', dataAiHint: 'daily routine' },
];

// Placeholder for continuous loop: duplicate for effect
const displayVideos = [...ugcVideos, ...ugcVideos.slice(0, 2)];


export function UgcVideoSection() {
  const fadeIn = useFadeIn<HTMLDivElement>();

  return (
    <section ref={fadeIn.ref} className={`py-12 md:py-20 bg-background overflow-hidden ${fadeIn.className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-headline">Loved by Our Community</h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
          See how wecare is transforming hair routines and boosting confidence.
        </p>
      </div>
      {/* Simplified scrolling container for UGC, true continuous loop is complex without a library */}
      <div className="relative flex overflow-hidden group">
         <div className="flex animate-scroll-horizontal group-hover:pause-animation py-4">
            {displayVideos.map((video, index) => (
            <div key={`ugc-${video.id}-${index}`} className="mx-3 flex-shrink-0 w-[280px] md:w-[350px]">
                <div className="relative rounded-lg overflow-hidden shadow-lg group/videoitem">
                <Image
                    src={video.thumbnailUrl}
                    alt={`User generated content by ${video.user}`}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover aspect-video transition-transform duration-300 group-hover/videoitem:scale-105"
                    data-ai-hint={video.dataAiHint}
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover/videoitem:opacity-100 transition-opacity duration-300">
                    <PlayCircle className="w-16 h-16 text-white" />
                </div>
                <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                    {video.user}
                </div>
                </div>
            </div>
            ))}
        </div>
      </div>
    </section>
  );
}
