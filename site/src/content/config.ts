import { defineCollection, z } from 'astro:content';

const personaSchema = z.object({
  id: z.string(),              // e.g. "01-product-owner"
  number: z.number(),          // 1..24
  cluster: z.enum([
    'product', 'architect', 'enablement', 'ops',
    'platform', 'quality', 'data', 'security', 'build',
  ]),
  accent: z.enum(['red', 'yellow', 'green', 'blue', 'ink']),
  phase: z.string(),           // SDLC phase label
  title: z.string(),           // localized display name (per locale directory)
  oneLiner: z.string(),        // short description
  order: z.number().optional(),
  updated: z.string().optional(),
});

const personas = defineCollection({
  type: 'content',
  schema: personaSchema,
});

export const collections = { personas };
