
'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Book } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { mockTests, MockTest } from '@/lib/data/mock-test-data';
import { QuizClient } from '@/components/quiz-client';

export function StaticMockTests() {
  const [selectedTest, setSelectedTest] = useState<MockTest | null>(null);

  return (
    <Card className="lg:col-span-1">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Book className="h-5 w-5 text-primary" />
          Static Mock Tests
        </CardTitle>
        <CardDescription>Past CDS papers and pre-set mock tests.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {mockTests.map((test) => (
            <div key={test.id} className="flex items-center justify-between rounded-lg border p-3">
              <div>
                <p className="font-semibold">{test.paper}</p>
                <p className="text-sm text-muted-foreground">{test.year}</p>
              </div>
              <Dialog onOpenChange={(open) => { if (!open) setSelectedTest(null); }}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" onClick={() => setSelectedTest(test)}>Start Test</Button>
                </DialogTrigger>
                {selectedTest?.id === test.id && (
                  <DialogContent className="max-w-6xl h-[90vh] flex flex-col">
                    <DialogHeader>
                      <DialogTitle>{selectedTest.paper} - {selectedTest.year}</DialogTitle>
                      <DialogDescription>
                        A mock test with questions from past papers.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex-grow overflow-y-auto -mx-6 px-2">
                      <QuizClient quizData={selectedTest.questions} isMockTest={true} />
                    </div>
                  </DialogContent>
                )}
              </Dialog>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
