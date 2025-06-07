
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
      <div className="flex overflow-x-auto space-x-2 md:space-x-3 px-4 pb-4 scrollbar-hide">
        {videoSources.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[calc(35vw-0.5rem)] sm:w-36 md:w-44 lg:w-52 aspect-[9/16] rounded-lg overflow-hidden shadow-lg"
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
