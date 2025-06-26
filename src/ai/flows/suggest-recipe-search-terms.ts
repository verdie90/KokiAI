'use server';
/**
 * @fileOverview An AI agent that suggests recipe search terms as the user types.
 *
 * - suggestRecipeSearchTerms - A function that handles the recipe search term suggestion process.
 * - SuggestRecipeSearchTermsInput - The input type for the suggestRecipeSearchTerms function.
 * - SuggestRecipeSearchTermsOutput - The return type for the suggestRecipeSearchTerms function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestRecipeSearchTermsInputSchema = z.object({
  searchTerm: z
    .string()
    .describe('The search term the user is typing.'),
  language: z.string().describe("The language for the suggestions, e.g., 'en' for English, 'id' for Indonesian.").optional(),
});
export type SuggestRecipeSearchTermsInput = z.infer<typeof SuggestRecipeSearchTermsInputSchema>;

const SuggestRecipeSearchTermsOutputSchema = z.object({
  suggestions: z
    .array(z.string())
    .describe('An array of suggested search terms.'),
});
export type SuggestRecipeSearchTermsOutput = z.infer<typeof SuggestRecipeSearchTermsOutputSchema>;

export async function suggestRecipeSearchTerms(input: SuggestRecipeSearchTermsInput): Promise<SuggestRecipeSearchTermsOutput> {
  return suggestRecipeSearchTermsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestRecipeSearchTermsPrompt',
  input: {schema: SuggestRecipeSearchTermsInputSchema},
  output: {schema: SuggestRecipeSearchTermsOutputSchema},
  prompt: `You are a recipe suggestion engine. The user has typed in the following search term:

{{searchTerm}}

Suggest some recipe titles that the user might be interested in. Only display recipe titles.
The suggestions must be in the language with this code: {{#if language}}{{language}}{{else}}id{{/if}}. ('id' for Indonesian, 'en' for English).

{{#each suggestions}}
- {{{this}}}
{{/each}}`,
});

const suggestRecipeSearchTermsFlow = ai.defineFlow(
  {
    name: 'suggestRecipeSearchTermsFlow',
    inputSchema: SuggestRecipeSearchTermsInputSchema,
    outputSchema: SuggestRecipeSearchTermsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
