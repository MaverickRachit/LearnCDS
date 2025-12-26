
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { clozeTestExercises, ClozeTestExercise } from '@/lib/data/cloze-test-data';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CardDescription, CardHeader, CardTitle } from './ui/card';


export function StaticClozeTest() {
  const [selectedExercise, setSelectedExercise] = useState<ClozeTestExercise>(clozeTestExercises[0]);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Reset state when the exercise changes
    setUserAnswers({});
    setIsSubmitted(false);
  }, [selectedExercise]);

  const handleAnswerSelect = (questionId: number, answer: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: prev[questionId] === answer ? '' : answer,
    }));
  };
  
  const handleExerciseChange = (exerciseId: string) => {
    const newExercise = clozeTestExercises.find(ex => ex.id === exerciseId);
    if (newExercise) {
      setSelectedExercise(newExercise);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };
  
  const handleTryAgain = () => {
    setIsSubmitted(false);
    setUserAnswers({});
  }

  const calculateScore = () => {
    return selectedExercise.questions.reduce((score, q) => {
        return userAnswers[q.id] === q.correctAnswer ? score + 1 : score;
    }, 0);
  }

  const renderPassage = () => {
    let finalPassage = selectedExercise.passage;
    selectedExercise.questions.forEach(q => {
      const userAnswer = userAnswers[q.id];
      let displayWord = `___(${q.id})___`;

      if (isSubmitted) {
        const isCorrect = userAnswer === q.correctAnswer;
        const style = isCorrect ? 'text-green-600 font-bold' : 'text-red-600 font-bold';
        const correctText = `<span class="text-green-600"> (Correct: ${q.correctAnswer})</span>`;
        displayWord = `<span class="${style}">${userAnswer || 'unanswered'}</span>` + (!isCorrect ? correctText : '');
      } else if (userAnswer) {
        displayWord = `<span class="text-primary font-bold">${userAnswer}</span>`;
      }
       finalPassage = finalPassage.replace(`___(${q.id})___`, displayWord);
    });
    return <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: finalPassage }} />;
  };

  return (
    <div className="space-y-4 text-base">
        <CardHeader className="p-0 mb-4">
             <CardTitle className="flex items-center justify-between">
                <span>Practice Passage</span>
                <Select value={selectedExercise.id} onValueChange={handleExerciseChange}>
                    <SelectTrigger className="w-[220px]">
                    <SelectValue placeholder="Select Exercise" />
                    </SelectTrigger>
                    <SelectContent>
                    {clozeTestExercises.map(ex => (
                        <SelectItem key={ex.id} value={ex.id}>
                        {ex.title}
                        </SelectItem>
                    ))}
                    </SelectContent>
                </Select>
            </CardTitle>
             <CardDescription>Read the passage and select the best word for each blank.</CardDescription>
        </CardHeader>
        <div className="rounded-lg border bg-muted/30 p-4">
            {renderPassage()}
        </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {selectedExercise.questions.map((q) => (
          <div key={q.id} className="space-y-2 rounded-lg border p-4">
            <p className="font-semibold">{q.id}. Select an option:</p>
            <div className="flex flex-col space-y-2">
              {q.options.map((option, index) => {
                  const isSelected = userAnswers[q.id] === option;
                  const isCorrect = q.correctAnswer === option;

                  return (
                    <Button
                        key={index}
                        variant={isSelected ? "secondary" : "outline"}
                        size="sm"
                        onClick={() => handleAnswerSelect(q.id, option)}
                        disabled={isSubmitted}
                        className={cn(
                            isSubmitted && isCorrect && 'border-green-500 bg-green-500/10 hover:bg-green-500/20 text-green-700',
                            isSubmitted && isSelected && !isCorrect && 'border-red-500 bg-red-500/10 hover:bg-red-500/20 text-red-700'
                        )}
                    >
                        {String.fromCharCode(65 + index)}. {option}
                    </Button>
                  )
              })}
            </div>
          </div>
        ))}
      </div>
      
       {isSubmitted && (
            <div className="text-center font-bold text-xl p-4 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                Your Score: {calculateScore()} / {selectedExercise.questions.length}
            </div>
        )}

      <div className="pt-4 text-center">
        <Button onClick={isSubmitted ? handleTryAgain : handleSubmit}>
            {isSubmitted ? 'Try Again' : 'Submit Answers'}
        </Button>
      </div>
    </div>
  );
}
