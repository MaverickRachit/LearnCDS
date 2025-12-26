
'use client';

import { useState, useEffect } from 'react';
import { differenceInDays, startOfDay } from 'date-fns';
import { CalendarDays } from 'lucide-react';

export function ExamCountdown() {
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    const calculateDaysLeft = () => {
      const today = startOfDay(new Date());
      let nextExamDate = new Date(today.getFullYear(), 3, 1); // April is month 3 (0-indexed)

      if (today > nextExamDate) {
        // If today is past April 1st, set the target to next year's April 1st
        nextExamDate.setFullYear(today.getFullYear() + 1);
      }
      
      const diff = differenceInDays(nextExamDate, today);
      setDaysLeft(diff);
    };

    calculateDaysLeft();
    // No interval needed as the day won't change frequently
  }, []);

  if (daysLeft === null) {
    return null;
  }

  return (
    <div className="flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-white/20 px-4 py-2 text-primary-foreground backdrop-blur-sm">
        <CalendarDays className="h-5 w-5" />
        <p className="text-sm font-semibold">
            <span className="font-bold text-lg">{daysLeft}</span> days until CDS Exam
        </p>
    </div>
  );
}
