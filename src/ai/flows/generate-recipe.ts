'use server';
/**
 * @fileOverview An AI agent that generates a recipe based on a title.
 *
 * - generateRecipe - A function that handles the recipe generation process.
 * - GenerateRecipeInput - The input type for the generateRecipe function.
 * - GenerateRecipeOutput - The return type for the generateRecipe function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateRecipeInputSchema = z.object({
  title: z.string().describe('The title of the recipe to generate.'),
  language: z.string().describe("The language for the recipe generation, e.g., 'en' for English, 'id' for Indonesian.").optional(),
});
export type GenerateRecipeInput = z.infer<typeof GenerateRecipeInputSchema>;

const GenerateRecipeOutputSchema = z.object({
  title: z.string().describe('The title of the generated recipe.'),
  description: z.string().describe('A short description of the recipe.'),
  prepTime: z.string().describe('The estimated preparation time.'),
  servings: z.number().describe('The number of servings.'),
  ingredients: z.array(z.string()).describe('A list of ingredients.'),
  steps: z.array(z.string()).describe('The step-by-step instructions.'),
});
export type GenerateRecipeOutput = z.infer<typeof GenerateRecipeOutputSchema>;

export async function generateRecipe(input: GenerateRecipeInput): Promise<GenerateRecipeOutput> {
  return generateRecipeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateRecipePrompt',
  input: {schema: GenerateRecipeInputSchema},
  output: {schema: GenerateRecipeOutputSchema},
  prompt: `You are an expert chef. Generate a detailed recipe for "{{title}}".
The recipe should be in the style of Indonesian cuisine if appropriate, but adaptable to other cuisines if the title suggests it.
Provide a short description, preparation time, number of servings, a list of ingredients, and step-by-step instructions.
The entire response, including all field values in the JSON output, must be in the language with this code: {{#if language}}{{language}}{{else}}id{{/if}}. ('id' for Indonesian, 'en' for English).
Respond ONLY with the JSON object.`,
});

const generateRecipeFlow = ai.defineFlow(
  {
    name: 'generateRecipeFlow',
    inputSchema: GenerateRecipeInputSchema,
    outputSchema: GenerateRecipeOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
