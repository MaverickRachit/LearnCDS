
'use client';

import type { QuizQuestion } from '@/lib/data/mock-test-data';
import { useState, useMemo, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Trophy, Clock, Check, X, ChevronsLeft, ChevronsRight, FileText, Sparkles, BookCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from './ui/scroll-area';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { useUserProgress } from '@/hooks/use-user-progress';
import { useSound } from '@/hooks/use-sound';

interface QuizClientProps {
  quizData: QuizQuestion[];
  onQuizComplete?: (score: number, total: number) => void;
  isMockTest?: boolean;
}

const CORRECT_SCORE = 0.83;
const INCORRECT_SCORE = -0.27;
const TOTAL_TIME = 120 * 60; // 120 minutes in seconds

function QuizView({ quizData, onQuizComplete, isMockTest = false }: QuizClientProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [quizFinished, setQuizFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const { toast } = useToast();
  const { addPoints, earnBadge } = useUserProgress();
  const [hasUpdatedProgress, setHasUpdatedProgress] = useState(false);
  const playCorrectSound = useSound('/sounds/correct.mp3');
  const playIncorrectSound = useSound('/sounds/incorrect.mp3');


  useEffect(() => {
    if (isMockTest && !quizFinished) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            setQuizFinished(true);
            toast({ title: "Time's up!", description: "Your test has been submitted automatically." });
            return 0;
          }
          if (prevTime === 300) { // 5 minute warning
             toast({ title: "5 minutes left!", description: "The test will be submitted soon." });
          }
          return prevTime - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isMockTest, quizFinished, toast]);

  const currentQuestion = useMemo(
    () => quizData[currentQuestionIndex],
    [quizData, currentQuestionIndex]
  );
  
  const handleAnswerSelect = (answer: string) => {
    setUserAnswers(prev => ({
        ...prev,
        [currentQuestionIndex]: answer,
    }));
    if (answer === currentQuestion.correctAnswer) {
      playCorrectSound();
    } else {
      playIncorrectSound();
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };
  
  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleSubmitQuiz = () => {
    setQuizFinished(true);
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setQuizFinished(false);
    setTimeLeft(TOTAL_TIME);
    setHasUpdatedProgress(false);
  };
  
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const scoreDetails = useMemo(() => {
    if (!quizFinished) return null;
    
    let correct = 0;
    let incorrect = 0;
    
    quizData.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        if (userAnswer) {
            if (userAnswer === question.correctAnswer) {
                correct++;
            } else {
                incorrect++;
            }
        }
    });

    const unattempted = quizData.length - correct - incorrect;
    const finalScore = (correct * CORRECT_SCORE) + (incorrect * INCORRECT_SCORE);

    return { correct, incorrect, unattempted, finalScore };
  }, [quizFinished, quizData, userAnswers]);


  useEffect(() => {
    if (quizFinished && scoreDetails && !hasUpdatedProgress) {
      const pointsEarned = scoreDetails.correct * 5; // 5 points per correct answer
      if (pointsEarned > 0) {
        addPoints(pointsEarned);
        toast({
          title: "Points Earned!",
          description: `You've earned ${pointsEarned} points.`,
        });
      }

      if (scoreDetails.correct === quizData.length) {
         earnBadge("First Quiz");
         toast({ title: "Achievement Unlocked!", description: "You've earned the 'First Quiz' badge!" });
      }

       if (isMockTest && scoreDetails.finalScore >= (quizData.length * CORRECT_SCORE * 0.85)) {
        earnBadge("Test Topper");
        toast({ title: "Achievement Unlocked!", description: "You scored over 85% on a mock test. Well done!" });
      }
      
      setHasUpdatedProgress(true);
      if(onQuizComplete) {
        onQuizComplete(scoreDetails.correct, quizData.length);
      }
    }
  }, [quizFinished, scoreDetails, hasUpdatedProgress, addPoints, earnBadge, toast, quizData.length, isMockTest, onQuizComplete]);


  if (quizFinished && scoreDetails) {
    return (
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
            <Card className="flex h-full flex-col sticky top-6">
                <CardHeader className="items-center text-center">
                <Trophy className="h-16 w-16 text-yellow-500" />
                <CardTitle className="text-2xl">Test Completed!</CardTitle>
                <CardDescription>
                    You&apos;ve done a great job. Here&apos;s your score.
                </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-6 text-center">
                    <div>
                        <p className="text-5xl font-bold tracking-tighter">
                        {scoreDetails.finalScore.toFixed(2)}
                        </p>
                        <p className="text-muted-foreground">Total Score</p>
                    </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                            <p className="text-2xl font-bold flex items-center justify-center gap-2 text-green-600"><Check /> {scoreDetails.correct}</p>
                            <p className="text-sm text-muted-foreground">Correct</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold flex items-center justify-center gap-2 text-red-600"><X /> {scoreDetails.incorrect}</p>
                            <p className="text-sm text-muted-foreground">Incorrect</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold">{scoreDetails.unattempted}</p>
                            <p className="text-sm text-muted-foreground">Unattempted</p>
                        </div>
                </div>
                <div className="text-xs text-muted-foreground pt-4">
                    Marking Scheme: Correct: +{CORRECT_SCORE}, Incorrect: {INCORRECT_SCORE}
                </div>
                </CardContent>
                <CardFooter>
                <Button onClick={handleRestartQuiz} className="w-full">
                    Try Again
                </Button>
                </CardFooter>
            </Card>
        </div>
        <div className="lg:col-span-2">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <BookCheck className="h-6 w-6 text-primary" />
                        Review Your Answers
                    </CardTitle>
                    <CardDescription>Check the questions, your answers, and the correct explanations.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-[calc(100vh-20rem)]">
                    <Accordion type="single" collapsible className="w-full">
                        {quizData.map((question, index) => {
                             const userAnswer = userAnswers[index];
                             const isCorrect = userAnswer === question.correctAnswer;
                             const isUnattempted = userAnswer === undefined;
                            return (
                                <AccordionItem value={`item-${index}`} key={index}>
                                    <AccordionTrigger className="text-left hover:no-underline">
                                        <div className="flex items-center gap-2">
                                        {isUnattempted ? <FileText className="h-4 w-4 text-muted-foreground" /> : isCorrect ? <Check className="h-4 w-4 text-green-600" /> : <X className="h-4 w-4 text-red-600" />}
                                        <span className="flex-1">Q{index + 1}: {question.question}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="space-y-3">
                                        <p className="text-sm text-muted-foreground">Your answer: <span className={cn('font-semibold', isCorrect ? 'text-green-600' : 'text-red-600', isUnattempted && 'text-muted-foreground font-normal italic')}>{userAnswer || 'Not Attempted'}</span></p>
                                        {!isCorrect && !isUnattempted && <p className="text-sm text-muted-foreground">Correct answer: <span className="font-semibold text-green-600">{question.correctAnswer}</span></p>}
                                        <div className="flex items-start gap-2 p-3 bg-blue-500/10 rounded-lg">
                                            <Sparkles className="h-4 w-4 text-blue-600 mt-1 shrink-0" />
                                            <p className="text-sm text-blue-800 dark:text-blue-200"><span className="font-semibold">Explanation:</span> {question.explanation}</p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            )
                        })}
                    </Accordion>
                    </ScrollArea>
                </CardContent>
            </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
       {currentQuestion.passage && (
         <Card className="md:col-span-1 flex flex-col">
            <CardHeader>
                <CardTitle>Reading Passage</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                <ScrollArea className="h-full pr-4">
                    <p className="whitespace-pre-line text-sm">{currentQuestion.passage}</p>

                </ScrollArea>
            </CardContent>
        </Card>
      )}
        <Card className={cn("flex flex-col h-full", currentQuestion.passage ? "md:col-span-1" : "md:col-span-2")}>
            <CardHeader>
                <div className="flex justify-between items-center mb-4">
                     <Progress
                        value={((currentQuestionIndex + 1) / quizData.length) * 100}
                        className="w-full"
                    />
                    {isMockTest && (
                         <div className="flex items-center gap-2 text-lg font-semibold tabular-nums ml-4 shrink-0">
                            <Clock className="h-5 w-5" />
                            {formatTime(timeLeft)}
                        </div>
                    )}
                </div>
                <CardTitle>
                Question {currentQuestionIndex + 1}/{quizData.length}
                </CardTitle>
                <CardDescription className="pt-2 text-lg text-foreground">
                {currentQuestion.question}
                </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
                <RadioGroup
                    value={userAnswers[currentQuestionIndex] || ''}
                    onValueChange={handleAnswerSelect}
                    className="space-y-3"
                >
                {currentQuestion.options.map((option, index) => {
                    const hasBeenAnswered = userAnswers[currentQuestionIndex] !== undefined;
                    const isSelected = userAnswers[currentQuestionIndex] === option;
                    const isCorrect = option === currentQuestion.correctAnswer;
                    return (
                    <Label
                        key={index}
                        className={cn(
                        'flex items-center space-x-2 rounded-lg border p-4 transition-all duration-300',
                         'cursor-pointer hover:bg-accent/50',
                         hasBeenAnswered && isCorrect && 'bg-green-500/20 border-green-500 text-foreground',
                         hasBeenAnswered && isSelected && !isCorrect && 'bg-red-500/20 border-red-500 text-foreground',
                         isSelected && !hasBeenAnswered && 'bg-accent border-primary'
                        )}
                    >
                        <RadioGroupItem value={option} id={`option-${index}`} className="!text-primary" />
                        <span className="flex-1">
                        {option}
                        </span>
                    </Label>
                    );
                })}
                </RadioGroup>
            </CardContent>
            <CardFooter className="grid grid-cols-2 gap-4">
                 <Button onClick={handlePrevQuestion} disabled={currentQuestionIndex === 0} variant="outline">
                    <ChevronsLeft /> Previous
                </Button>
                {currentQuestionIndex < quizData.length - 1 ? (
                    <Button onClick={handleNextQuestion} className="w-full">
                        Next <ChevronsRight />
                    </Button>
                ) : (
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button className="w-full bg-green-600 hover:bg-green-700">Submit Test</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure you want to submit?</AlertDialogTitle>
                            <AlertDialogDescription>
                                You cannot change your answers after submitting.
                            </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={handleSubmitQuiz}>Submit</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                )}
            </CardFooter>
        </Card>
    </div>
  );
}


export function QuizClient({ quizData, onQuizComplete, isMockTest = false }: QuizClientProps) {
    return <QuizView quizData={quizData} onQuizComplete={onQuizComplete} isMockTest={isMockTest} />;
}
