
import { Card, CardContent } from '@/components/ui/card';
import { StaticSentenceReordering } from '@/components/static-sentence-reordering';

export default function SentenceReorderingPage() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Sentence Reordering</h1>
        <p className="text-muted-foreground">
          Arrange the jumbled sentences to form a coherent paragraph.
        </p>
      </div>
      <div className="grid gap-6">
         <Card>
            <CardContent className="p-6">
                <StaticSentenceReordering />
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
