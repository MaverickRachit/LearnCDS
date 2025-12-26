
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { vocabulary as staticVocabulary } from '@/lib/data';
import { BookText, BrainCircuit, CheckCircle } from 'lucide-react';
import { useMemo } from 'react';
import { VocabularyQuiz } from '@/components/vocabulary-quiz';
import { cn } from '@/lib/utils';
import { useSpacedRepetition } from '@/hooks/use-spaced-repetition';
import { Button } from '@/components/ui/button';

function StaticVocabulary() {
  const { items: srsItems } = useSpacedRepetition('vocabulary', staticVocabulary);
  const learnedWords = useMemo(() => new Set(srsItems.filter(i => i.stage > 2).map(i => i.key)), [srsItems]);

  const groupedVocabulary = useMemo(() => {
    return staticVocabulary.reduce((acc, wordObj) => {
      const firstLetter = wordObj.word.charAt(0).toUpperCase();
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(wordObj);
      return acc;
    }, {} as Record<string, typeof staticVocabulary>);
  }, []);

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

  const handleLetterClick = (letter: string) => {
    const element = document.getElementById(`letter-${letter}`);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <Card>
        <CardHeader>
            <CardTitle>Static Vocabulary Library</CardTitle>
            <CardDescription>A comprehensive list of vocabulary words, grouped alphabetically.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="sticky top-16 md:top-0 z-10 bg-card/95 backdrop-blur-sm py-2 mb-4 border-b -mx-6 px-6">
                 <div className="flex flex-wrap justify-center gap-1">
                    {alphabet.map(letter => (
                        <Button 
                            key={letter}
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-full"
                            onClick={() => handleLetterClick(letter)}
                            disabled={!groupedVocabulary[letter]}
                        >
                            {letter}
                        </Button>
                    ))}
                </div>
            </div>
            {alphabet.map(letter => (
              groupedVocabulary[letter] && (
                <div key={letter} id={`letter-${letter}`} className="mb-8 pt-4 -mt-4">
                    <h2 className="text-2xl font-bold text-primary mb-4 pb-2 border-b-2 border-primary/20">
                       {letter}
                    </h2>
                    <div className="space-y-4">
                        {groupedVocabulary[letter].map((item, index) => (
                             <div key={index} className={cn("rounded-lg p-4 border", learnedWords.has(item.word) ? "bg-green-500/10 border-l-4 border-green-500" : "")}>
                                <div className="flex items-center justify-between">
                                    <h3 className="font-semibold text-lg">{item.word}</h3>
                                    {learnedWords.has(item.word) && <span className="flex items-center gap-1 text-xs text-green-600 font-medium"><CheckCircle className="h-4 w-4"/> Mastered</span>}
                                </div>
                               
                                <p className="mt-1 text-sm text-muted-foreground">{item.definition}</p>
                            </div>
                        ))}
                    </div>
                </div>
              )
            ))}
      </CardContent>
    </Card>
  );
}

export default function VocabularyPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Vocabulary</h1>
        <p className="text-muted-foreground">
          Build your word power with our static list and practice quizzes.
        </p>
      </div>
      <Tabs defaultValue="static">
        <TabsList className="grid w-full h-auto grid-cols-1 sm:w-auto sm:grid-cols-2">
          <TabsTrigger value="static">
            <BookText className="mr-2 h-4 w-4" />
            Static Library
          </TabsTrigger>
          <TabsTrigger value="quiz">
            <BrainCircuit className="mr-2 h-4 w-4" />
            Practice Quiz
          </TabsTrigger>
        </TabsList>
        <TabsContent value="static" className="mt-6">
          <StaticVocabulary />
        </TabsContent>
        <TabsContent value="quiz" className="mt-6">
          <VocabularyQuiz />
        </TabsContent>
      </Tabs>
    </div>
  );
}
