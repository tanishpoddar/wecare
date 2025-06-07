'use client';

import { useFadeIn } from '@/hooks/use-fade-in';

const stories = [
  { id: 1, title: "Rooted in Nature", message: "We believe in the power of natural ingredients to nurture and restore." },
  { id: 2, title: "Backed by Science", message: "Our formulations are rigorously tested for efficacy and safety." },
  { id: 3, title: "For Every Strand", message: "Celebrating diverse hair types and empowering individual beauty." },
  { id: 4, title: "Sustainable Beauty", message: "Committed to ethical sourcing and eco-conscious practices." },
];

// Duplicate for continuous scroll effect
const displayStories = [...stories, ...stories.slice(0,2)];


export function BrandStoryVerticalBanners() {
  const fadeIn = useFadeIn<HTMLDivElement>();

  return (
    <section ref={fadeIn.ref} className={`py-12 md:py-20 bg-background overflow-hidden ${fadeIn.className}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline">Our Philosophy</h2>
        <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
          More than just hair care, it's a commitment to your confidence and well-being.
        </p>
      </div>
      <div className="h-[300px] md:h-[400px] w-full overflow-hidden relative">
        <div className="absolute inset-0 flex flex-col animate-scroll-vertical group-hover:pause-animation">
            {displayStories.map((story, index) => (
            <div key={`story-${story.id}-${index}`} className="flex-shrink-0 w-full h-[150px] md:h-[200px] p-4">
                <div className="bg-accent/10 border border-accent/30 text-accent p-6 rounded-lg shadow-md h-full flex flex-col justify-center items-center text-center">
                    <h3 className="text-xl md:text-2xl font-semibold mb-2 font-headline">{story.title}</h3>
                    <p className="text-sm md:text-base">{story.message}</p>
                </div>
            </div>
            ))}
        </div>
      </div>
    </section>
  );
}
