
'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from 'react';
import { isSameDay, subDays, startOfDay } from 'date-fns';

export interface UserProgress {
  name: string;
  totalPoints: number;
  dayStreak: number;
  lastLoginDate: number; // Storing timestamp
  badges: string[];
}

interface UserProgressContextType {
  progress: UserProgress | null;
  loading: boolean;
  isNameSet: boolean | null;
  addPoints: (points: number) => void;
  earnBadge: (badgeTitle: string) => void;
  setUserName: (name: string) => void;
}

const UserProgressContext = createContext<UserProgressContextType | undefined>(
  undefined
);

const defaultProgress: UserProgress = {
  name: '',
  totalPoints: 0,
  dayStreak: 1,
  lastLoginDate: new Date().getTime(),
  badges: [],
};

const USER_PROGRESS_KEY = 'userProgress';

export function UserProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [loading, setLoading] = useState(true);
  const [isNameSet, setIsNameSet] = useState<boolean | null>(null);

  const fetchUserProgress = useCallback(async () => {
    setLoading(true);
    try {
      const savedProgressJSON = localStorage.getItem(USER_PROGRESS_KEY);
      let currentProgress: UserProgress;

      if (savedProgressJSON) {
        currentProgress = JSON.parse(savedProgressJSON);
      } else {
        currentProgress = { ...defaultProgress, lastLoginDate: startOfDay(new Date()).getTime() };
      }
      
      setIsNameSet(!!currentProgress.name);

      const today = startOfDay(new Date());
      const lastLogin = startOfDay(new Date(currentProgress.lastLoginDate));
      
      let updatedData = { ...currentProgress };

      if (!isSameDay(today, lastLogin)) {
        if (isSameDay(subDays(today, 1), lastLogin)) {
          // Consecutive day
          updatedData.dayStreak++;
        } else {
          // Streak broken
          updatedData.dayStreak = 1;
        }
        updatedData.lastLoginDate = today.getTime();
      }

      localStorage.setItem(USER_PROGRESS_KEY, JSON.stringify(updatedData));
      setProgress(updatedData);

    } catch (error) {
      console.error("Error fetching or creating user progress from localStorage:", error);
      const initialProgress = {...defaultProgress, lastLoginDate: startOfDay(new Date()).getTime()};
      setProgress(initialProgress); 
      setIsNameSet(false);
      localStorage.setItem(USER_PROGRESS_KEY, JSON.stringify(initialProgress));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUserProgress();
  }, [fetchUserProgress]);

  const updateProgress = (newProgress: UserProgress) => {
    setProgress(newProgress);
    localStorage.setItem(USER_PROGRESS_KEY, JSON.stringify(newProgress));
  }
  
  const setUserName = (name: string) => {
    if (!progress) {
      const newProgress = { ...defaultProgress, name: name, lastLoginDate: startOfDay(new Date()).getTime() };
       updateProgress(newProgress);
       setIsNameSet(true);
    } else {
       const newProgress = { ...progress, name: name };
       updateProgress(newProgress);
       setIsNameSet(true);
    }
  }

  const addPoints = (points: number) => {
    if (!progress) return;
    const newProgress = { ...progress, totalPoints: progress.totalPoints + points };
    updateProgress(newProgress);
  };

  const earnBadge = (badgeTitle: string) => {
    if (!progress || progress.badges.includes(badgeTitle)) return;
    const newProgress = { ...progress, badges: [...progress.badges, badgeTitle] };
    updateProgress(newProgress);
  }

  const value = {
    progress,
    loading,
    isNameSet,
    addPoints,
    earnBadge,
    setUserName,
  };

  return (
    <UserProgressContext.Provider value={value}>
      {children}
    </UserProgressContext.Provider>
  );
}

export function useUserProgress() {
  const context = useContext(UserProgressContext);
  if (context === undefined) {
    throw new Error('useUserProgress must be used within a UserProgressProvider');
  }
  return context;
}
