
import { FlashcardClient } from '@/components/flashcard-client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { vocabulary, idioms, oneWordSubstitutions } from '@/lib/data';
import { BookText, Milestone, Puzzle } from 'lucide-react';

export default function FlashcardsPage() {
  return (
    <div>
        <div className="mb-6">
            <h1 className="text-3xl font-bold">Flashcards</h1>
            <p className="text-muted-foreground">
                Master vocabulary, idioms, and one-word substitutions with an adaptive learning system.
            </p>
        </div>
        <Tabs defaultValue="vocabulary">
            <TabsList className="grid w-full h-auto grid-cols-1 sm:w-auto sm:grid-cols-3">
                <TabsTrigger value="vocabulary">
                    <BookText className="mr-2 h-4 w-4" />
                    Vocabulary
                </TabsTrigger>
                <TabsTrigger value="idioms">
                    <Milestone className="mr-2 h-4 w-4" />
                    Idioms & Phrases
                </TabsTrigger>
                 <TabsTrigger value="one-word">
                    <Puzzle className="mr-2 h-4 w-4" />
                    One-Word Substitution
                </TabsTrigger>
            </TabsList>
            <TabsContent value="vocabulary">
                <div className="flex justify-center">
                    <FlashcardClient items={vocabulary} type="vocabulary" />
                </div>
            </TabsContent>
            <TabsContent value="idioms">
                <div className="flex justify-center">
                    <FlashcardClient items={idioms} type="idiom" />
                </div>
            </TabsContent>
            <TabsContent value="one-word">
                <div className="flex justify-center">
                     <FlashcardClient items={oneWordSubstitutions} type="one-word" />
                </div>
            </TabsContent>
      </Tabs>
    </div>
  )
}
