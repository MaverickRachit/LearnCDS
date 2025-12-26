
'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { grammarRules } from '@/lib/data';

function GrammarRules() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Core Grammar Rules</CardTitle>
        <CardDescription>
          A quick reference for essential English grammar rules.
        </CardDescription>
      </CardHeader>
      <Accordion type="single" collapsible className="w-full px-6 pb-6">
        {grammarRules.map((rule, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger>{rule.rule}</AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">{rule.explanation}</p>
              <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
                {rule.examples.map((example, i) => (
                  <li key={i}>{example}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Card>
  );
}

export default function GrammarPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Grammar</h1>
        <p className="text-muted-foreground">
          Strengthen your fundamentals with rules and practice quizzes.
        </p>
      </div>
      <GrammarRules />
    </div>
  );
}
