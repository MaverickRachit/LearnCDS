
'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Logo } from './logo';
import { Button } from './ui/button';
import { useUserProgress } from '@/hooks/use-user-progress';
import { Flame } from 'lucide-react';
import { Input } from './ui/input';

const motivationalQuotes = [
    "The secret of getting ahead is getting started. - Mark Twain",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The journey of a thousand miles begins with a single step. - Lao Tzu"
];

const MODAL_SHOWN_KEY = 'welcomeModalShown';

export function WelcomeModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [quote, setQuote] = useState('');
    const { progress, setUserName, isNameSet } = useUserProgress();
    const [name, setName] = useState('');

    useEffect(() => {
        if (isNameSet === false) { // Check for explicit false, not just falsy
            setIsOpen(true);
        } else if (isNameSet) {
             const today = new Date().toDateString();
             const lastShown = localStorage.getItem(MODAL_SHOWN_KEY);
        
            if (lastShown !== today) {
                const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
                setQuote(randomQuote);
                setIsOpen(true);
                localStorage.setItem(MODAL_SHOWN_KEY, today);
            }
        }
    }, [isNameSet]);
    
    const handleNameSubmit = () => {
        if (name.trim()) {
            setUserName(name.trim());
            setIsOpen(false);
        }
    }

    if (!isOpen || !progress) {
        return null;
    }

    if (!isNameSet) {
        return (
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle className="text-center text-2xl">Welcome to CDS English Ace!</DialogTitle>
                        <DialogDescription className="text-center">
                            What should we call you, future officer?
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex items-center space-x-2">
                        <Input 
                            placeholder="Enter your name" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleNameSubmit()}
                        />
                    </div>
                     <DialogFooter className="sm:justify-center">
                        <Button type="submit" onClick={handleNameSubmit}>Let's Go!</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-md bg-transparent border-none shadow-none p-0">
                 <div className="relative flex flex-col items-center justify-center pt-10">
                    <div className="absolute top-0">
                         <Logo className="h-20 w-20 [&>img]:h-20 [&>img]:w-20 [&>span]:hidden" />
                    </div>
                    <div className="relative mt-10 bg-card p-6 rounded-xl shadow-lg text-center">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-card"></div>
                        <h2 className="text-xl font-bold text-foreground mb-2">Welcome Back, {progress.name}!</h2>
                        <p className="text-md text-muted-foreground italic">&quot;{quote}&quot;</p>
                        <div className="flex items-center justify-center mt-4 gap-2 text-amber-500">
                            <Flame className="h-6 w-6"/>
                            <span className="font-bold text-xl">{progress.dayStreak} Day Streak!</span>
                        </div>
                    </div>
                     <Button onClick={() => setIsOpen(false)} size="lg" className="mt-6">Continue Learning</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
