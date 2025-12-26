
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useUserProgress } from '@/hooks/use-user-progress';

import { Flame, Medal, Star, BookOpen, Milestone, BrainCircuit, FileCheck, Replace, Loader2, FileUp, FileText, Target, PencilRuler, Maximize, Minimize } from 'lucide-react';
import { IdiomQuiz } from '@/components/idiom-quiz';
import { WelcomeModal } from '@/components/welcome-modal';
import { ExamCountdown } from '@/components/exam-countdown';
import { VocabularyQuiz } from '@/components/vocabulary-quiz';
import { useFullscreen } from '@/hooks/use-fullscreen';
import React from 'react';
import { cn } from '@/lib/utils';


function FocusArea({ title, children }: { title: string; children: React.ReactNode }) {
    const cardRef = React.useRef<HTMLDivElement>(null);
    const { isFullscreen, toggleFullscreen } = useFullscreen(cardRef);
    
    return (
        <div ref={cardRef} className={cn("p-4 rounded-lg bg-secondary", isFullscreen && "fixed inset-0 z-[100] bg-background overflow-y-auto pt-16")}>
            <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold">{title}</h4>
                <Button variant="ghost" size="icon" onClick={toggleFullscreen} className="h-8 w-8">
                    {isFullscreen ? <Minimize className="h-5 w-5"/> : <Maximize className="h-5 w-5" />}
                </Button>
            </div>
            {children}
        </div>
    )
}

export default function DashboardPage() {
  const { progress, loading } = useUserProgress();
  
  if (loading || !progress) {
    return (
        <div className="flex h-full items-center justify-center">
            <Loader2 className="h-10 w-10 animate-spin text-primary" />
        </div>
    )
  }

  const quickAccessItems = [
      { href: "/flashcards", icon: Flame, label: "Flashcards", description: "Master new words" },
      { href: "/tests", icon: FileText, label: "Mock Tests", description: "Simulate exam conditions" },
      { href: "/progress", icon: Medal, label: "Your Progress", description: "Track your growth" },
  ]

  const libraryItems = [
    { href: "/vocabulary", icon: BookOpen, label: "Vocabulary" },
    { href: "/idioms", icon: Milestone, label: "Idioms & Phrases" },
    { href: "/grammar", icon: BrainCircuit, label: "Grammar Rules" },
    { href: "/documents", icon: FileUp, label: "Documents" },
  ];

  const practiceItems = [
    { href: "/cloze-test", icon: FileCheck, label: "Cloze Test" },
    { href: "/sentence-reordering", icon: Replace, label: "Sentence Reordering" },
  ];

  return (
    <div className="space-y-6">
        <WelcomeModal />
        <Card className="bg-gradient-to-br from-primary via-primary/90 to-accent text-primary-foreground border-none shadow-lg">
          <CardHeader className="pb-4">
             <div className="flex justify-between items-start">
                <div>
                    <CardTitle className="font-headline text-3xl md:text-4xl">Welcome Back, {progress.name || 'Aspirant'}!</CardTitle>
                    <CardDescription className="text-primary-foreground/80 text-md md:text-lg">
                    Ready to ace your English exam?
                    </CardDescription>
                </div>
                <ExamCountdown />
             </div>
          </CardHeader>
          <CardContent>
             <div className="grid grid-cols-3 gap-2 sm:gap-4">
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 rounded-lg border border-primary-foreground/20 bg-white/20 p-3 sm:p-4 backdrop-blur-sm">
                    <Star className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-300" />
                    <div className="text-center sm:text-left">
                        <p className="font-bold text-xl sm:text-2xl">{progress.totalPoints}</p>
                        <p className="text-xs sm:text-sm">Total Points</p>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 rounded-lg border border-primary-foreground/20 bg-white/20 p-3 sm:p-4 backdrop-blur-sm">
                    <Flame className="h-6 w-6 sm:h-8 sm:w-8 text-orange-400" />
                     <div className="text-center sm:text-left">
                        <p className="font-bold text-xl sm:text-2xl">{progress.dayStreak}</p>
                        <p className="text-xs sm:text-sm">Day Streak</p>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 rounded-lg border border-primary-foreground/20 bg-white/20 p-3 sm:p-4 backdrop-blur-sm">
                    <Medal className="h-6 w-6 sm:h-8 sm:w-8 text-amber-400" />
                     <div className="text-center sm:text-left">
                        <p className="font-bold text-xl sm:text-2xl">{progress.badges.length}</p>
                        <p className="text-xs sm:text-sm">Badges</p>
                    </div>
                </div>
             </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
             <Card>
                <CardHeader>
                    <CardTitle>Quick Access</CardTitle>
                    <CardDescription>Jump right back into your most important activities.</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-3 gap-2 sm:gap-4">
                    {quickAccessItems.map(item => (
                        <Button key={item.href} variant="outline" className="h-24 sm:h-28 flex-col gap-1 sm:gap-2 p-2 sm:p-4 text-center" asChild>
                            <Link href={item.href}>
                                <item.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-1" />
                                <span className="font-semibold text-sm sm:text-base">{item.label}</span>
                                <span className="text-xs text-muted-foreground hidden sm:block">{item.description}</span>
                            </Link>
                        </Button>
                    ))}
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-xl">
                            <BookOpen /> Library
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-2 gap-2 sm:gap-4">
                       {libraryItems.map(item => (
                           <Button key={item.href} variant="secondary" className="h-16 sm:h-20 flex-col gap-1" asChild>
                               <Link href={item.href}><item.icon className="h-5 w-5"/>{item.label}</Link>
                            </Button>
                       ))}
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                         <CardTitle className="flex items-center gap-2 text-xl">
                            <PencilRuler /> Practice Zone
                         </CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-2 gap-2 sm:gap-4">
                         {practiceItems.map(item => (
                           <Button key={item.href} variant="secondary" className="h-16 sm:h-20 flex-col gap-1" asChild>
                               <Link href={item.href}><item.icon className="h-5 w-5"/>{item.label}</Link>
                            </Button>
                       ))}
                    </CardContent>
                </Card>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6">
             <Card className="h-full">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Target className="text-primary"/> Today's Focus</CardTitle>
                    <CardDescription>Daily challenges to keep you sharp.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                   <FocusArea title="Daily Vocabulary Quiz">
                        <VocabularyQuiz />
                   </FocusArea>
                   <FocusArea title="Daily Idiom Quiz">
                        <IdiomQuiz />
                   </FocusArea>
                </CardContent>
             </Card>
          </div>
        </div>
    </div>
  );
}
