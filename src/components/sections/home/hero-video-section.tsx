
'use client';

import { useFadeIn } from "@/hooks/use-fade-in";
import React from 'react';

// Base video sources and hints
const baseVideoSources = [
  "https://videos.pexels.com/video-files/4689206/4689206-sd_540_960_30fps.mp4", // Woman applying cream
  "https://videos.pexels.com/video-files/8071326/8071326-sd_540_960_25fps.mp4", // Skincare routine
  "https://videos.pexels.com/video-files/7579909/7579909-sd_540_960_25fps.mp4", // Woman with flowing hair
  "https://videos.pexels.com/video-files/5719827/5719827-sd_540_960_25fps.mp4", // Applying makeup
  "https://videos.pexels.com/video-files/8131991/8131991-sd_540_960_25fps.mp4", // Hair product application
];

const baseVideoDataAiHints = [
  "skincare application model",
  "face care routine",
  "woman beautiful hair",
  "makeup tutorial beauty",
  "hair serum model",
];

const REPETITIONS = 6; // Repeat content to simulate endless scroll

const displayVideoSources = Array(REPETITIONS).fill(null).flatMap(() => baseVideoSources);
// const displayVideoDataAiHints = Array(REPETITIONS).fill(null).flatMap(() => baseVideoDataAiHints); // Not strictly needed if using modulo for hints

export function HeroVideoSection() {
  const fadeIn = useFadeIn<HTMLDivElement>();

  return (
    <section ref={fadeIn.ref} className={`py-8 md:py-12 bg-background overflow-hidden ${fadeIn.className}`}>
      <div className="flex overflow-x-auto space-x-2 md:space-x-3 px-4 pb-4 scrollbar-hide">
        {displayVideoSources.map((src, index) => (
          <div
            key={`hero-video-${index}`} // Unique key for each repeated item
            className="flex-shrink-0 w-[calc(20vw-0.25rem)] sm:w-20 md:w-24 lg:w-28 aspect-[9/16] rounded-lg overflow-hidden shadow-lg"
          >
            <video
              className="w-full h-full object-cover"
              src={src}
              autoPlay
              loop
              muted
              playsInline
              data-ai-hint={baseVideoDataAiHints[index % baseVideoDataAiHints.length]}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

