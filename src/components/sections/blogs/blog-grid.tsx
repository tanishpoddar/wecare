'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { ContentDiscoveryOutput } from '@/ai/flows/content-discovery';
import { ExternalLink } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

interface BlogGridProps {
  posts: ContentDiscoveryOutput;
  isLoading?: boolean;
}

export function BlogGrid({ posts, isLoading = false }: BlogGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, index) => (
          <Card key={index} className="overflow-hidden shadow-lg">
            <CardHeader className="p-0">
              <Skeleton className="w-full h-52" />
            </CardHeader>
            <CardContent className="p-6">
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-2/3 mb-4" />
            </CardContent>
            <CardFooter className="p-6">
              <Skeleton className="h-10 w-28" />
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }

  if (posts.length === 0 && !isLoading) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-muted-foreground">No blog posts found for your search. Try a different query.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <Card key={post.url + index} className="overflow-hidden shadow-lg flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="p-0">
            {/* Placeholder for blog image - AI flow doesn't provide image */}
            <Image
              src={`https://placehold.co/600x400.png?text=${encodeURIComponent(post.title.substring(0,20))}`}
              alt={post.title}
              width={600}
              height={400}
              className="w-full h-52 object-cover"
              data-ai-hint="blog article abstract"
            />
          </CardHeader>
          <CardContent className="p-6 flex-grow">
            <CardTitle className="text-xl font-bold mb-2 leading-tight font-headline text-primary hover:text-accent transition-colors">
              <Link href={post.url} target="_blank" rel="noopener noreferrer">
                {post.title}
              </Link>
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground line-clamp-4">
              {post.summary}
            </CardDescription>
          </CardContent>
          <CardFooter className="p-6 mt-auto">
            <Button asChild variant="outline" className="text-primary border-primary hover:bg-primary/10">
              <Link href={post.url} target="_blank" rel="noopener noreferrer">
                Read More <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
