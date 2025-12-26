
'use client';

import { useState, useMemo, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { vocabulary } from '@/lib/data';
import { cn } from '@/lib/utils';
import { RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useSpacedRepetition } from '@/hooks/use-spaced-repetition';

// Function to shuffle an array
const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

export function VocabularyQuiz() {
  const { updateItem, getReviewQueue } = useSpacedRepetition('vocabulary', vocabulary);
  const { toast } = useToast();

  const quizPool = useMemo(() => {
    const queue = getReviewQueue(10);
    if (queue.length > 0) {
      return queue;
    }
    // If queue is empty, fallback to a random selection from all items
    return shuffleArray(vocabulary).slice(0, 10);
  }, [getReviewQueue]);

  const getNewQuestion = useCallback(() => {
    if (quizPool.length === 0) return null;
    
    const correctVocab = quizPool[Math.floor(Math.random() * quizPool.length)];
    if (!correctVocab) return null;

    const distractors = shuffleArray(vocabulary.filter(v => v.word !== correctVocab.word))
      .slice(0, 3)
      .map(v => v.word);
      
    const options = shuffleArray([correctVocab.word, ...distractors]);

    return {
      definition: correctVocab.definition,
      options: options,
      correctAnswer: correctVocab.word,
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
      updateItem(question.correctAnswer, 'good');
      toast({
        title: 'Correct!',
        description: `"${question.correctAnswer}" has been added to your learned words.`,
      });
    } else {
        updateItem(question.correctAnswer, 'bad');
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
            You've reviewed all your vocabulary for now. Great job!
        </div>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Vocabulary Practice</CardTitle>
        <CardDescription>Choose the word that matches the definition.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="p-6 text-center bg-muted rounded-lg">
          <p className="text-lg font-semibold">{question.definition}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                className={cn('h-16 text-base justify-center', 
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
