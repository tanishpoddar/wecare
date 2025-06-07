// src/ai/flows/content-discovery.ts
'use server';
/**
 * @fileOverview A content discovery AI agent that finds relevant blog posts based on a search query.
 *
 * - discoverContent - A function that handles the content discovery process.
 * - ContentDiscoveryInput - The input type for the discoverContent function.
 * - ContentDiscoveryOutput - The return type for the discoverContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ContentDiscoveryInputSchema = z.object({
  searchQuery: z.string().describe('The search query to find relevant blog posts.'),
});
export type ContentDiscoveryInput = z.infer<typeof ContentDiscoveryInputSchema>;

const ContentDiscoveryOutputSchema = z.array(
  z.object({
    title: z.string().describe('The title of the blog post.'),
    url: z.string().url().describe('The URL of the blog post.'),
    summary: z.string().describe('A short summary of the blog post.'),
    relevanceScore: z
      .number()
      .min(0)
      .max(1)
      .describe('A score indicating the relevance of the blog post to the search query.'),
  })
);
export type ContentDiscoveryOutput = z.infer<typeof ContentDiscoveryOutputSchema>;

export async function discoverContent(input: ContentDiscoveryInput): Promise<ContentDiscoveryOutput> {
  return discoverContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'contentDiscoveryPrompt',
  input: {schema: ContentDiscoveryInputSchema},
  output: {schema: ContentDiscoveryOutputSchema},
  prompt: `You are an AI agent that finds relevant blog posts based on a search query.

  Given the following search query, find relevant blog posts from around the web and summarize them.
  Return a JSON array of blog posts with the title, URL, summary, and relevance score.

  Search Query: {{{searchQuery}}}
  `,
});

const discoverContentFlow = ai.defineFlow(
  {
    name: 'discoverContentFlow',
    inputSchema: ContentDiscoveryInputSchema,
    outputSchema: ContentDiscoveryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
