
'use client';
import type { QuizQuestion } from '@/lib/data/mock-test-data';
import { QuizClient } from '@/components/quiz-client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BrainCircuit } from 'lucide-react';


export function DailyQuizClient({ quizData }: { quizData: QuizQuestion[] }) {
  if (!quizData || quizData.length === 0) {
    return (
      <div className="h-full">
        <p>Could not generate a quiz at this time. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="h-full">
      <QuizClient quizData={quizData} />
    </div>
  );
}
