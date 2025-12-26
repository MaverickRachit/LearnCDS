
'use client';

import React, { useMemo } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  idioms,
  vocabulary,
  oneWordSubstitutions,
} from '@/lib/data';
import {
  Medal,
  Star,
  Flame,
  CheckCircle,
  BookText,
  Milestone,
  Puzzle,
  Trophy,
  Loader2,
} from 'lucide-react';
import { useUserProgress } from '@/hooks/use-user-progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { useSpacedRepetition } from '@/hooks/use-spaced-repetition';
import { getCardKey } from '@/hooks/use-spaced-repetition';

const achievementsList = [
  { name: 'First Quiz', description: 'Complete your first quiz.', icon: Medal },
  { name: 'Grammar Guru', description: 'Score 90% or more on a grammar quiz.', icon: Trophy },
  { name: 'Vocabulary Virtuoso', description: 'Learn 50 new words.', icon: BookText },
  { name: 'Perfect Streak', description: 'Maintain a 7-day streak.', icon: Flame },
  { name: 'Test Topper', description: 'Score 85% on a full mock test.', icon: Star },
  { name: 'Idiom Idol', description: 'Master 20 idioms.', icon: Milestone },
  { name: 'Sentence Sensei', description: 'Complete 10 sentence reordering exercises without errors.', icon: Puzzle },
  { name: 'AI Companion', description: 'Use the AI Tutor 10 times.', icon: BookText },
];

const ProgressChart = ({ learned, total, color }: { learned: number; total: number; color: string }) => {
    const data = [
        { name: 'Learned', value: learned },
        { name: 'Remaining', value: total - learned },
    ];
    const COLORS = [color, 'hsl(var(--muted))'];

    const percentage = total > 0 ? Math.round((learned / total) * 100) : 0;

    return (
        <div className="relative h-32 w-32">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={50}
                        startAngle={90}
                        endAngle={450}
                        paddingAngle={0}
                        dataKey="value"
                        stroke="none"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold">{percentage}%</span>
                <span className="text-xs text-muted-foreground">{learned}/{total}</span>
            </div>
        </div>
    );
};


export default function ProgressPage() {
  const { progress, loading: userProgressLoading } = useUserProgress();
  const { items: vocabItems, loading: vocabLoading } = useSpacedRepetition('vocabulary', vocabulary);
  const { items: idiomItems, loading: idiomLoading } = useSpacedRepetition('idiom', idioms);
  const { items: oneWordItems, loading: oneWordLoading } = useSpacedRepetition('one-word', oneWordSubstitutions);

  const loading = userProgressLoading || vocabLoading || idiomLoading || oneWordLoading;

  const learnedVocabulary = useMemo(() => vocabItems.filter(item => item.stage > 2), [vocabItems]);
  const learnedIdioms = useMemo(() => idiomItems.filter(item => item.stage > 2), [idiomItems]);
  const learnedOneWord = useMemo(() => oneWordItems.filter(item => item.stage > 2), [oneWordItems]);

  if (loading || !progress) {
      return (
        <div className="flex h-full w-full items-center justify-center">
            <Loader2 className="h-10 w-10 animate-spin text-primary" />
        </div>
      )
  }

  const earnedAchievements = progress.badges;
  const achievements = achievementsList.map(ach => ({...ach, earned: earnedAchievements.includes(ach.name)}));

  const progressItems = [
    {
      title: 'Words Learned',
      icon: BookText,
      learned: learnedVocabulary.length,
      total: vocabulary.length,
      color: 'hsl(var(--chart-1))',
    },
    {
      title: 'Idioms Mastered',
      icon: Milestone,
      learned: learnedIdioms.length,
      total: idioms.length,
      color: 'hsl(var(--chart-2))',
    },
    {
      title: 'One-Word Subs',
      icon: Puzzle,
      learned: learnedOneWord.length,
      total: oneWordSubstitutions.length,
      color: 'hsl(var(--chart-3))',
    },
     {
      title: 'Achievements',
      icon: Trophy,
      learned: earnedAchievements.length,
      total: achievementsList.length,
      color: 'hsl(var(--chart-4))',
    },
  ];
  
  const originalVocabMap = useMemo(() => new Map(vocabulary.map(item => [item.word, item])), []);
  const originalIdiomMap = useMemo(() => new Map(idioms.map(item => [item.idiom, item])), []);
  const originalOneWordMap = useMemo(() => new Map(oneWordSubstitutions.map(item => [item.word, item])), []);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold font-headline">Your Progress</h1>
        <p className="text-muted-foreground mt-2">
          Track your stats, review learned content, and see the badges you've collected.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        
        <div className="lg:col-span-2 space-y-8">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-3">
             <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Points</CardTitle>
                <Star className="h-5 w-5 text-yellow-400" />
                </CardHeader>
                <CardContent>
                <div className="text-3xl font-bold">{progress.totalPoints}</div>
                <p className="text-xs text-muted-foreground">Keep up the great work!</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Day Streak</CardTitle>
                <Flame className="h-5 w-5 text-orange-500" />
                </CardHeader>
                <CardContent>
                <div className="text-3xl font-bold">{progress.dayStreak}</div>
                <p className="text-xs text-muted-foreground">Don't break the chain!</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Badges Earned</CardTitle>
                <Medal className="h-5 w-5 text-amber-500" />
                </CardHeader>
                <CardContent>
                <div className="text-3xl font-bold">{earnedAchievements.length}</div>
                 <p className="text-xs text-muted-foreground">of {achievementsList.length} total</p>
                </CardContent>
            </Card>
           </div>
          
           <Card>
            <CardHeader>
              <CardTitle>Learning Mastery</CardTitle>
              <CardDescription>
                Your progress across different learning categories.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
              {progressItems.map((item) => (
                <div key={item.title} className="flex flex-col items-center gap-2">
                    <ProgressChart learned={item.learned} total={item.total} color={item.color} />
                    <p className="flex items-center gap-2 text-sm font-medium text-center">
                        <item.icon className="h-4 w-4 text-muted-foreground" />
                        {item.title}
                    </p>
                </div>
              ))}
            </CardContent>
          </Card>

           <Card>
            <CardHeader>
              <CardTitle>My Learned Library</CardTitle>
              <CardDescription>
                Review all the content you have mastered so far.
              </CardDescription>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="words">
                    <TabsList className="grid w-full h-auto grid-cols-1 sm:w-auto sm:grid-cols-3">
                        <TabsTrigger value="words"><BookText className="mr-2 h-4 w-4" />Words ({learnedVocabulary.length})</TabsTrigger>
                        <TabsTrigger value="idioms"><Milestone className="mr-2 h-4 w-4" />Idioms ({learnedIdioms.length})</TabsTrigger>
                        <TabsTrigger value="one-word"><Puzzle className="mr-2 h-4 w-4" />One-Words ({learnedOneWord.length})</TabsTrigger>
                    </TabsList>
                    <TabsContent value="words" className="mt-4 max-h-80 overflow-y-auto pr-2">
                       {learnedVocabulary.length > 0 ? learnedVocabulary.map((item) => {
                          const originalItem = originalVocabMap.get(item.key);
                          if (!originalItem) return null;
                          return (
                            <React.Fragment key={`vocab-${item.key}`}>
                              <div className="flex flex-col py-3">
                                <p className="font-semibold text-md">{originalItem.word}</p>
                                <p className="text-sm text-muted-foreground">{originalItem.definition}</p>
                              </div>
                              <Separator />
                            </React.Fragment>
                          )
                       }) : <p className="text-sm text-muted-foreground text-center py-10">You haven't mastered any words yet.</p>}
                    </TabsContent>
                     <TabsContent value="idioms" className="mt-4 max-h-80 overflow-y-auto pr-2">
                       {learnedIdioms.length > 0 ? learnedIdioms.map((item) => {
                          const originalItem = originalIdiomMap.get(item.key);
                          if (!originalItem) return null;
                          return (
                            <React.Fragment key={`idiom-${item.key}`}>
                              <div className="flex flex-col py-3">
                                <p className="font-semibold text-md">{originalItem.idiom}</p>
                                <p className="text-sm text-muted-foreground">{originalItem.meaning}</p>
                              </div>
                              <Separator />
                            </React.Fragment>
                          )
                       }) : <p className="text-sm text-muted-foreground text-center py-10">You haven't mastered any idioms yet.</p>}
                    </TabsContent>
                    <TabsContent value="one-word" className="mt-4 max-h-80 overflow-y-auto pr-2">
                        {learnedOneWord.length > 0 ? learnedOneWord.map((item) => {
                            const originalItem = originalOneWordMap.get(item.key);
                            if (!originalItem) return null;
                            return (
                               <React.Fragment key={`one-word-${item.key}`}>
                                 <div className="flex flex-col py-3">
                                  <p className="font-semibold text-md">{originalItem.word}</p>
                                  <p className="text-sm text-muted-foreground">{originalItem.meaning}</p>
                                </div>
                                <Separator />
                              </React.Fragment>
                           )
                        }) : <p className="text-sm text-muted-foreground text-center py-10">You haven't mastered any one-word substitutions yet.</p>}
                    </TabsContent>
                </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Achievements Card */}
        <Card className="lg:col-span-1 h-fit sticky top-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-6 w-6 text-primary" />
                Achievements
              </CardTitle>
              <CardDescription>
                Unlock badges by completing challenges.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 rounded-lg border p-4 transition-all ${
                    achievement.earned
                      ? 'border-green-500/30 bg-green-500/10'
                      : 'bg-muted/50'
                  }`}
                >
                  <div
                    className={`flex items-center justify-center p-3 rounded-full ${
                      achievement.earned
                        ? 'bg-green-500/20 text-green-600'
                        : 'bg-secondary text-muted-foreground'
                    }`}
                  >
                    <achievement.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-md">{achievement.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                  {achievement.earned && (
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
      </div>
    </div>
  );
}
