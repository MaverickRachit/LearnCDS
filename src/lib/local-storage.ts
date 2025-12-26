'use client';

// Define the types for the content that can be saved.
import { ClozeTestExercise } from '@/lib/data/cloze-test-data';
import { ReorderingExercise } from '@/lib/data/sentence-reordering-data';

// A simplified Cloze Test type for saving
type SavedClozeTest = ClozeTestExercise & {
    type: 'cloze';
    topic: string;
    difficulty: string;
};

// A simplified Reordering Exercise type for saving
type SavedReorderingExercise = ReorderingExercise & {
    type: 'reordering';
    topic: string;
    difficulty: string;
    jumbledSentences: string[];
    paragraph: string;
};

export type SavedContent = 
    | SavedClozeTest
    | SavedReorderingExercise;


const SAVED_CONTENT_KEY = 'savedContent';

export function saveGeneratedContent(content: SavedContent) {
    try {
        const existingContent = getSavedContent();
        const newContent = { ...content, id: new Date().toISOString(), createdAt: Date.now() };
        const updatedContent = [newContent, ...existingContent];
        localStorage.setItem(SAVED_CONTENT_KEY, JSON.stringify(updatedContent));
    } catch (error) {
        console.error("Error saving content to localStorage: ", error);
        throw new Error("Could not save the content. Please try again.");
    }
}

export function getSavedContent(): (SavedContent & {id: string, createdAt: number})[] {
    try {
        const savedContent = localStorage.getItem(SAVED_CONTENT_KEY);
        return savedContent ? JSON.parse(savedContent) : [];
    } catch (error) {
        console.error("Error fetching saved content from localStorage:", error);
        return [];
    }
}
