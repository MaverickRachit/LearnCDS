
'use client';

import { useState, useCallback, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { idioms } from '@/lib/data';
import { cn } from '@/lib/utils';
import { RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useSpacedRepetition } from '@/hooks/use-spaced-repetition';

// Function to shuffle an array
const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

export function IdiomQuiz() {
  const { updateItem, getReviewQueue } = useSpacedRepetition('idiom', idioms);
  const { toast } = useToast();

  const quizPool = useMemo(() => {
    const queue = getReviewQueue(10);
    if (queue.length > 0) {
        return queue;
    }
    return shuffleArray(idioms).slice(0,10);
  }, [getReviewQueue]);

  const getNewQuestion = useCallback(() => {
     if (quizPool.length === 0) return null;
    
    const correctIdiom = quizPool[Math.floor(Math.random() * quizPool.length)];
    if (!correctIdiom) return null;
    
    const distractors = shuffleArray(idioms.filter(i => i.idiom !== correctIdiom.idiom))
      .slice(0, 3)
      .map(i => i.meaning);

    const options = shuffleArray([correctIdiom.meaning, ...distractors]);

    return {
      idiom: correctIdiom.idiom,
      options: options,
      correctAnswer: correctIdiom.meaning,
    };
  }, [quizPool]);
  
  const [question, setQuestion] = useState(getNewQuestion());
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const isCorrect = selectedAnswer === question?.correctAnswer;

  const handleSelectAnswer = (option: string) => {
    if (isAnswered || !question) return;
    setSelectedAnswer(option);
    setIsAnswered(true);

    if (option === question.correctAnswer) {
      updateItem(question.idiom, 'good');
       toast({
        title: 'Correct!',
        description: `You're mastering "${question.idiom}"!`,
      });
    } else {
        updateItem(question.idiom, 'bad');
    }
  };

  const handleNextQuestion = () => {
    setQuestion(getNewQuestion());
    setSelectedAnswer(null);
    setIsAnswered(false);
  };
  
   if (!question) {
    return (
        <div className="text-center text-muted-foreground p-4">
            You've reviewed all your idioms for now. Excellent work!
        </div>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Idiom Practice</CardTitle>
        <CardDescription>Choose the correct meaning for the idiom.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="p-6 text-center bg-muted rounded-lg">
          <p className="text-lg font-semibold">{question.idiom}</p>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === option;
            const isCorrectOption = question.correctAnswer === option;

            return (
              <Button
                key={index}
                variant="outline"
                size="lg"
                onClick={() => handleSelectAnswer(option)}
                disabled={isAnswered}
                className={cn('h-auto min-h-16 py-3 text-base justify-center whitespace-normal', 
                   isAnswered && isCorrectOption && 'border-2 border-green-500 bg-green-500/10 hover:bg-green-500/20 text-green-700',
                   isAnswered && isSelected && !isCorrectOption && 'border-2 border-red-500 bg-red-500/10 hover:bg-red-500/20 text-red-700'
                )}
              >
                {option}
              </Button>
            );
          })}
        </div>
        {isAnswered && (
            <div className={cn('p-4 rounded-lg text-center font-semibold', isCorrect ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
             !isCorrect && selectedAnswer && 'border-red-500 bg-red-500/10 text-red-700'
            )}>
                {isCorrect ? "Correct!" : `Not quite. The correct answer was "${question.correctAnswer}".`}
            </div>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={handleNextQuestion} className="w-full">
            <RefreshCw className="mr-2 h-4 w-4" />
            {isAnswered ? 'Next Question' : 'Skip Question'}
        </Button>
      </CardFooter>
    </Card>
  );
}
