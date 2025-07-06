'use client'; // This page needs to be client component to manage state of search results

import { useState } from 'react';
import { BlogSearch } from '@/components/sections/blogs/blog-search';
import { BlogGrid } from '@/components/sections/blogs/blog-grid';
import type { ContentDiscoveryOutput } from '@/ai/flows/content-discovery';
import { Button } from '@/components/ui/button';
import { useFadeIn } from '@/hooks/use-fade-in';

export default function BlogsPage() {
  const [blogResults, setBlogResults] = useState<ContentDiscoveryOutput>([]);
  const [isLoading, setIsLoading] = useState(false);
  const fadeIn = useFadeIn<HTMLDivElement>();


  // Sample initial posts if needed for display before search
  const initialPosts: ContentDiscoveryOutput = [
    { title: "The Ultimate Guide to Hair Growth Cycles", url: "#", summary: "Understand how your hair grows and what you can do to support each phase for optimal length and health.", relevanceScore: 0.9 },
    { title: "Top 5 Natural Ingredients for a Healthy Scalp", url: "#", summary: "Discover powerful botanicals like rosemary and tea tree oil that can soothe, nourish, and invigorate your scalp.", relevanceScore: 0.85 },
    { title: "Debunking Common Hair Loss Myths", url: "#", summary: "Separate fact from fiction when it comes to hair loss. We explore common misconceptions and provide evidence-based insights.", relevanceScore: 0.8 },
    { title: "How Stress Affects Your Hair (And What to Do About It)", url: "#", summary: "Learn about the connection between stress and hair health, and find practical tips to manage stress for better locks.", relevanceScore: 0.75 },
    { title: "DIY Hair Masks for Every Hair Type", url: "#", summary: "Whip up these simple, effective hair masks at home using ingredients you probably already have in your kitchen.", relevanceScore: 0.7 },
    { title: "Choosing the Right Serum for Your Hair Concerns", url: "#", summary: "Not all serums are created equal. This guide helps you pick the perfect serum based on your specific hair needs.", relevanceScore: 0.92 },
  ];
  
  // Use initialPosts if blogResults is empty and not loading. This provides some content on first load.
  const postsToDisplay = blogResults.length > 0 || isLoading ? blogResults : initialPosts;


  return (
    <div ref={fadeIn.ref} className={`container mx-auto px-4 py-12 md:py-16 ${fadeIn.className}`}>
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-headline text-primary">wecare Blog</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover expert tips, ingredient spotlights, and the science behind beautiful, healthy hair.
          Use our AI-powered search to find articles from across the web.
        </p>
      </header>

      <BlogSearch onResults={setBlogResults} onLoading={setIsLoading} />
      
      {/* Placeholder for category filtering - UI only */}
      <div className="mb-8 flex flex-wrap gap-2 justify-center">
        {['All', 'Hair Growth', 'Scalp Care', 'Ingredients', 'Tutorials', 'Myth Busting'].map(category => (
          <Button key={category} variant={category === 'All' ? 'default' : 'outline'} className="text-sm">
            {category}
          </Button>
        ))}
      </div>
      
      <BlogGrid posts={postsToDisplay} isLoading={isLoading} />
    </div>
  );
}
