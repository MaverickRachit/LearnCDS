'use server';
/**
 * @fileOverview A personalized AI tutor flow.
 *
 * - personalizedAiTutor - A function that responds to a user's query.
 * - PersonalizedAiTutorInput - The input type for the function.
 * - PersonalizedAiTutorOutput - The return type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

export const PersonalizedAiTutorInputSchema = z.object({
  query: z.string().describe('The user query for the AI tutor.'),
});
export type PersonalizedAiTutorInput = z.infer<
  typeof PersonalizedAiTutorInputSchema
>;

export const PersonalizedAiTutorOutputSchema = z.object({
  response: z.string().describe('The AI tutor response to the user query.'),
});
export type PersonalizedAiTutorOutput = z.infer<
  typeof PersonalizedAiTutorOutputSchema
>;

const personalizedAiTutorPrompt = ai.definePrompt({
  name: 'personalizedAiTutorPrompt',
  input: {schema: PersonalizedAiTutorInputSchema},
  output: {schema: PersonalizedAiTutorOutputSchema},
  prompt: `You are an AI tutor specializing in English for the CDS exam. A student will ask you a question, and you will provide a helpful and informative answer.

Student Query: {{{query}}}`,
});

const personalizedAiTutorFlow = ai.defineFlow(
  {
    name: 'personalizedAiTutorFlow',
    inputSchema: PersonalizedAiTutorInputSchema,
    outputSchema: PersonalizedAiTutorOutputSchema,
  },
  async (input) => {
    const {output} = await personalizedAiTutorPrompt(input);
    return output!;
  }
);

export async function personalizedAiTutor(
  input: PersonalizedAiTutorInput
): Promise<PersonalizedAiTutorOutput> {
  try {
    const response = await personalizedAiTutorFlow(input);
    if (!response || !response.response) {
      throw new Error('Received an empty response from the AI.');
    }
    return response;
  } catch (error) {
    console.error('Error in personalizedAiTutor flow:', error);
    return {
      response:
        'Sorry, I encountered an error while processing your request. The AI service may be temporarily unavailable. Please try again in a moment.',
    };
  }
}
