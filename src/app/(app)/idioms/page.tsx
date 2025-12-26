
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { idioms as staticIdioms } from '@/lib/data';
import { Milestone, BrainCircuit, CheckCircle } from 'lucide-react';
import { useMemo } from 'react';
import { IdiomQuiz } from '@/components/idiom-quiz';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useSpacedRepetition } from '@/hooks/use-spaced-repetition';

function StaticIdioms() {
  const { items: srsItems } = useSpacedRepetition('idiom', staticIdioms);
  const learnedIdioms = useMemo(() => new Set(srsItems.filter(i => i.stage > 2).map(i => i.key)), [srsItems]);

  const groupedIdioms = useMemo(() => {
    return staticIdioms.reduce((acc, idiomObj) => {
      const firstLetter = idiomObj.idiom.charAt(0).toUpperCase();
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(idiomObj);
      return acc;
    }, {} as Record<string, typeof staticIdioms>);
  }, []);

  const sortedLetters = Object.keys(groupedIdioms).sort();

  const handleLetterClick = (letter: string) => {
    const element = document.getElementById(`idiom-letter-${letter}`);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <Card>
        <CardHeader>
            <CardTitle>Idioms & Phrases Library</CardTitle>
            <CardDescription>A comprehensive list of idioms, grouped alphabetically.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="sticky top-16 md:top-0 z-10 bg-card/95 backdrop-blur-sm py-2 mb-4 border-b -mx-6 px-6">
                 <div className="flex flex-wrap justify-center gap-1">
                    {sortedLetters.map(letter => (
                        <Button 
                            key={letter}
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-full"
                            onClick={() => handleLetterClick(letter)}
                        >
                            {letter}
                        </Button>
                    ))}
                </div>
            </div>
            {sortedLetters.map(letter => (
                <div key={letter} id={`idiom-letter-${letter}`} className="mb-8 pt-4 -mt-4">
                    <h2 className="text-2xl font-bold text-primary mb-4 pb-2 border-b-2 border-primary/20">
                       {letter}
                    </h2>
                    <div className="space-y-4">
                        {groupedIdioms[letter].map((item, index) => (
                             <div key={index} className={cn("rounded-lg p-4 border", learnedIdioms.has(item.idiom) ? "bg-green-500/10 border-l-4 border-green-500" : "")}>
                                <div className="flex items-center justify-between">
                                    <h3 className="font-semibold text-lg">{item.idiom}</h3>
                                     {learnedIdioms.has(item.idiom) && <span className="flex items-center gap-1 text-xs text-green-600 font-medium"><CheckCircle className="h-4 w-4"/> Mastered</span>}
                                </div>
                                <p className="mt-1 text-sm text-muted-foreground">{item.meaning}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
      </CardContent>
    </Card>
  );
}

export default function IdiomsPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Idioms & Phrases</h1>
        <p className="text-muted-foreground">
          Master common idioms with our comprehensive library and quizzes.
        </p>
      </div>
      <Tabs defaultValue="static">
        <TabsList className="grid w-full h-auto grid-cols-1 sm:w-auto sm:grid-cols-2">
          <TabsTrigger value="static">
            <Milestone className="mr-2 h-4 w-4" />
            Static Library
          </TabsTrigger>
           <TabsTrigger value="quiz">
            <BrainCircuit className="mr-2 h-4 w-4" />
            Practice Quiz
          </TabsTrigger>
        </TabsList>
        <TabsContent value="static" className="mt-6">
          <StaticIdioms />
        </TabsContent>
        <TabsContent value="quiz" className="mt-6">
            <IdiomQuiz />
        </TabsContent>
      </Tabs>
    </div>
  );
}
