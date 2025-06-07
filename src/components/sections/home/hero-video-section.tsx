'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useFadeIn } from "@/hooks/use-fade-in";

export function HeroVideoSection() {
  const fadeIn = useFadeIn<HTMLDivElement>();
  // Placeholder for video URL. In a real app, this would come from a CMS or config.
  // Using a short, looping, royalty-free nature video as a placeholder.
  const videoUrl = "https://videos.pexels.com/video-files/3254005/3254005-hd_1280_720_25fps.mp4";


  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
        data-ai-hint="hair model diversity"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>
      <div ref={fadeIn.ref} className={`relative z-20 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center text-white ${fadeIn.className}`}>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-headline">
          Experience Lustrous, Healthy Hair
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Our revolutionary serum, backed by science and nature, revitalizes your hair from root to tip.
        </p>
        <div className="space-x-4">
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/shop">Shop Serum</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
            <Link href="/quiz">Take Hair Quiz</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
