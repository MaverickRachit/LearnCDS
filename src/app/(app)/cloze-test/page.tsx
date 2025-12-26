
import { Card, CardContent } from '@/components/ui/card';
import { StaticClozeTest } from '@/components/static-cloze-test';

export default function ClozeTestPage() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Cloze Test</h1>
        <p className="text-muted-foreground">
          Fill in the blanks to complete the passages.
        </p>
      </div>

      <div className="grid gap-6">
         <Card>
            <CardContent className="p-6">
                <StaticClozeTest />
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
