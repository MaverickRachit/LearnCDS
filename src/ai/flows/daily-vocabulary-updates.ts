'use server';
/**
 * @fileOverview AI flow to generate daily vocabulary words.
 *
 * - dailyVocabularyUpdate - A function that returns a list of new vocabulary words.
 * - DailyVocabularyUpdateInput - The input type for the function.
 * - DailyVocabularyUpdateOutput - The return type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

export const DailyVocabularyUpdateInputSchema = z.object({});
export type DailyVocabularyUpdateInput = z.infer<
  typeof DailyVocabularyUpdateInputSchema
>;

export const DailyVocabularyUpdateOutputSchema = z.object({
  words: z.array(
    z.object({
      word: z.string().describe('The vocabulary word.'),
      definition: z.string().describe('The definition of the word.'),
      example: z
        .string()
        .describe(
          'An example sentence using the word in the context of defense news.'
        ),
    })
  ).describe('A list of vocabulary words with definitions and example sentences.'),
});
export type DailyVocabularyUpdateOutput = z.infer<
  typeof DailyVocabularyUpdateOutputSchema
>;

const dailyVocabularyUpdatePrompt = ai.definePrompt({
  name: 'dailyVocabularyUpdatePrompt',
  input: {schema: DailyVocabularyUpdateInputSchema},
  output: {schema: DailyVocabularyUpdateOutputSchema},
  prompt: `You are an expert in defense terminology and current affairs.
  Your task is to provide a list of 5 new vocabulary words relevant to current defense news.
  Provide the word, its definition, and an example sentence using the word in the context of defense news.
  Return the results as a JSON object.`,
});

const dailyVocabularyUpdateFlow = ai.defineFlow(
  {
    name: 'dailyVocabularyUpdateFlow',
    inputSchema: DailyVocabularyUpdateInputSchema,
    outputSchema: DailyVocabularyUpdateOutputSchema,
  },
  async (input) => {
    const {output} = await dailyVocabularyUpdatePrompt(input);
    return output!;
  }
);

export async function dailyVocabularyUpdate(
  input: DailyVocabularyUpdateInput
): Promise<DailyVocabularyUpdateOutput | undefined> {
  return dailyVocabularyUpdateFlow(input);
}
