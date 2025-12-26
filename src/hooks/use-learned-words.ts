
'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  startOfDay,
  addDays,
} from 'date-fns';

import type { vocabulary, idioms, oneWordSubstitutions } from '@/lib/data';
type VocabularyItem = (typeof vocabulary)[number];
type IdiomItem = (typeof idioms)[number];
type OneWordItem = (typeof oneWordSubstitutions)[number];
export type CardItem = VocabularyItem | IdiomItem | OneWordItem;
export type CardType = 'vocabulary' | 'idiom' | 'one-word';


export const getCardKey = (item: CardItem): string => {
  if ('word' in item) return item.word;
  if ('idiom' in item) return item.idiom;
  return '';
};


export interface SpacedRepetitionItem {
    key: string;
    stage: number; // 0: New, 1: Learning (1d), 2: Consolidating (2d), 3: Consolidating (4d), etc.
    nextReview: number; // timestamp
    lastReviewed: number; // timestamp
}

// Intervals in days for each stage
const intervals = [1, 2, 4, 8, 16, 32]; // Example: 1 day, 2 days, 4 days...

// Hook to manage spaced repetition data in localStorage
export const useSpacedRepetition = (type: CardType, initialItems: CardItem[]) => {
    const [items, setItems] = useState<SpacedRepetitionItem[]>([]);
    const [loading, setLoading] = useState(true);
    const storageKey = `srs-${type}`;

    useEffect(() => {
        setLoading(true);
        try {
            const saved = localStorage.getItem(storageKey);
            if (saved) {
                setItems(JSON.parse(saved));
            } else {
                // Initialize with all items as new
                const newItems = initialItems.map(item => ({
                    key: getCardKey(item),
                    stage: 0,
                    nextReview: 0,
                    lastReviewed: 0,
                }));
                setItems(newItems);
                localStorage.setItem(storageKey, JSON.stringify(newItems));
            }
        } catch (error) {
            console.error(`Failed to load SRS data for ${type} from localStorage`, error);
            setItems([]);
        } finally {
            setLoading(false);
        }
    }, [storageKey, initialItems]);

    const updateItem = useCallback((key: string, confidence: 'good' | 'unsure' | 'bad') => {
        setItems(prevItems => {
            const now = new Date().getTime();
            const today = startOfDay(now).getTime();

            const newItems = prevItems.map(item => {
                if (item.key === key) {
                    let newStage = item.stage;
                    if (confidence === 'good') {
                        newStage = Math.min(item.stage + 1, intervals.length);
                    } else if (confidence === 'bad') {
                        newStage = Math.max(0, item.stage - 2); // Go back two stages
                    }
                    // 'unsure' keeps the stage the same, will be reviewed again tomorrow
                    
                    const nextReviewDate = addDays(today, intervals[newStage - 1] || 1);

                    return {
                        ...item,
                        stage: newStage,
                        lastReviewed: now,
                        nextReview: nextReviewDate.getTime(),
                    };
                }
                return item;
            });

            localStorage.setItem(storageKey, JSON.stringify(newItems));
            return newItems;
        });
    }, [storageKey]);

    const getReviewQueue = useCallback((dailyNewLimit: number = 20) => {
        if (loading) return [];
        const now = startOfDay(new Date()).getTime();
        
        const dueItems = items.filter(item => item.stage > 0 && item.nextReview <= now);
        
        const newItems = items
            .filter(item => item.stage === 0)
            .slice(0, dailyNewLimit);

        // Shuffle to mix new and due items
        const reviewQueue = [...dueItems, ...newItems].sort(() => Math.random() - 0.5);
        
        // Find original items from the key
        const originalItemsMap = new Map(initialItems.map(item => [getCardKey(item), item]));
        
        return reviewQueue.map(reviewItem => originalItemsMap.get(reviewItem.key)).filter(Boolean) as CardItem[];

    }, [items, loading, initialItems]);


    return { items, updateItem, loading, getReviewQueue };
};
