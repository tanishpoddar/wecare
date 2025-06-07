
'use client';

import { useFadeIn } from "@/hooks/use-fade-in";
import React from 'react';

// Sample portrait video URLs - replace with your actual 9:16 videos
const videoSources = [
  "https://videos.pexels.com/video-files/4689206/4689206-sd_540_960_30fps.mp4", // Woman applying cream
  "https://videos.pexels.com/video-files/8071326/8071326-sd_540_960_25fps.mp4", // Skincare routine
  "https://videos.pexels.com/video-files/7579909/7579909-sd_540_960_25fps.mp4", // Woman with flowing hair
  "https://videos.pexels.com/video-files/5719827/5719827-sd_540_960_25fps.mp4", // Applying makeup
  "https://videos.pexels.com/video-files/8131991/8131991-sd_540_960_25fps.mp4", // Hair product application
];

const videoDataAiHints = [
  "skincare application model",
  "face care routine",
  "woman beautiful hair",
  "makeup tutorial beauty",
  "hair serum model",
]

export function HeroVideoSection() {
  const fadeIn = useFadeIn<HTMLDivElement>();

  return (
    <section ref={fadeIn.ref} className={`py-8 md:py-12 bg-background overflow-hidden ${fadeIn.className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-10 font-headline text-primary">
          Real People, Real Routines
        </h2>
      </div>
      <div className="flex overflow-x-auto space-x-3 md:space-x-4 px-4 pb-4 scrollbar-hide">
        {videoSources.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[calc(50vw-1.5rem)] sm:w-64 md:w-72 lg:w-80 aspect-[9/16] rounded-lg overflow-hidden shadow-lg"
          >
            <video
              className="w-full h-full object-cover"
              src={src}
              autoPlay
              loop
              muted
              playsInline
              data-ai-hint={videoDataAiHints[index % videoDataAiHints.length]}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
