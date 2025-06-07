'use client';

import { useState, type FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2, Search } from 'lucide-react';
import type { ContentDiscoveryInput, ContentDiscoveryOutput } from '@/ai/flows/content-discovery';
import { discoverContent } from '@/ai/flows/content-discovery';
import { useToast } from '@/hooks/use-toast';

interface BlogSearchProps {
  onResults: (results: ContentDiscoveryOutput) => void;
  onLoading: (loading: boolean) => void;
}

export function BlogSearch({ onResults, onLoading }: BlogSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!searchQuery.trim()) {
      toast({ title: 'Search query cannot be empty', variant: 'destructive' });
      return;
    }

    setIsLoading(true);
    onLoading(true);
    try {
      const input: ContentDiscoveryInput = { searchQuery };
      const results = await discoverContent(input);
      onResults(results);
      if (results.length === 0) {
        toast({ title: 'No relevant blog posts found.', description: 'Try a different search query.' });
      }
    } catch (error) {
      console.error('Error discovering content:', error);
      toast({ title: 'Error finding blogs', description: 'An unexpected error occurred. Please try again.', variant: 'destructive' });
      onResults([]); // Clear previous results on error
    } finally {
      setIsLoading(false);
      onLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 flex flex-col sm:flex-row gap-4 items-center">
      <Input
        type="text"
        placeholder="Search for hair care tips, ingredients, etc..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="flex-grow text-base"
        aria-label="Search blog posts"
      />
      <Button type="submit" disabled={isLoading} className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Search className="mr-2 h-4 w-4" />
        )}
        Search Blogs
      </Button>
    </form>
  );
}
