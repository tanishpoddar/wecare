'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useFadeIn } from "@/hooks/use-fade-in";

export function HeroVideoSection() {
  const fadeIn = useFadeIn<HTMLDivElement>();
  // Using a placeholder video that's portrait. Consider replacing with actual 9:16 content.
  const videoUrl = "https://videos.pexels.com/video-files/8131991/8131991-sd_540_960_25fps.mp4";


  return (
    <section className="relative h-screen w-full overflow-hidden"> {/* Adjusted height for 9:16 feel */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0" // object-cover will handle aspect ratio
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
        data-ai-hint="portrait models hair fashion" // Updated hint
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
