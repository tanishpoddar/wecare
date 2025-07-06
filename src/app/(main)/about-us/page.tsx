import React from 'react';
import { InteractiveStoryImages } from '@/components/sections/about/interactive-story-images';
import { FoundersSection } from '@/components/sections/about/founders-section';

export default function AboutUsPage() {
  return (
    <>
      <InteractiveStoryImages />
      <FoundersSection />
      {/* Add other relevant sections if needed, e.g., company values, timeline, etc. */}
    </>
  );
}
