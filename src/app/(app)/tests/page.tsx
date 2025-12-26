
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Book, Loader2 } from 'lucide-react';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { StaticMockTests } from '@/components/static-mock-tests';

function StaticTestSkeleton() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Book className="h-5 w-5 text-primary"/>
                    Static Mock Tests
                </CardTitle>
                <CardDescription>Past CDS papers and pre-set mock tests.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex items-center justify-between rounded-lg border p-3">
                        <div className="space-y-2">
                            <Skeleton className="h-5 w-32" />
                            <Skeleton className="h-4 w-16" />
                        </div>
                        <Skeleton className="h-9 w-24" />
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}

export default function TestsPage() {

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Tests</h1>
        <p className="text-muted-foreground">
          Assess your knowledge with static mocks.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6">
        <div className="lg:col-span-1">
            <Suspense fallback={<StaticTestSkeleton />}>
                <StaticMockTests />
            </Suspense>
         </div>
      </div>
    </div>
  );
}
