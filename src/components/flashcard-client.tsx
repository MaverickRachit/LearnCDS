
'use client';

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowRightCircle, Check, HelpCircle, Layers, Loader2, Maximize, Minimize, Volume2, X } from 'lucide-react';
import type { vocabulary, idioms, oneWordSubstitutions } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';
import { Separator } from './ui/separator';
import { useFullscreen } from '@/hooks/use-fullscreen';
import { useSpacedRepetition, CardItem, CardType, getCardKey } from '@/hooks/use-spaced-repetition';

const getCardFront = (item: CardItem): string => {
  return getCardKey(item);
};

const getCardBack = (item: CardItem) => {
    if ('definition' in item && 'word' in item && 'hindi' in item && 'sentence' in item && 'synonyms' in item && 'antonyms' in item) {
        return {
            title: item.word,
            hindi: item.hindi,
            definition: item.definition,
            sentence: item.sentence,
            synonyms: item.synonyms,
            antonyms: item.antonyms
        }
    }
    if ('meaning' in item && 'idiom' in item) {
        return {
            title: item.idiom,
            definition: item.meaning,
        }
    }
    if ('meaning' in item && 'word' in item) {
         return {
            title: item.word,
            definition: item.meaning,
        }
    }
    return { title: '', definition: '' };
};

export function FlashcardClient({ items: initialItems, type, isDashboard = false }: { items: CardItem[], type: CardType, isDashboard?: boolean }) {
  const { toast } = useToast();
  const cardRef = useRef<HTMLDivElement>(null);
  const { isFullscreen, toggleFullscreen } = useFullscreen(cardRef);
  const { items, updateItem, getReviewQueue, loading } = useSpacedRepetition(type, initialItems);
  
  const [deck, setDeck] = useState<CardItem[]>([]);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(true);

  const reviewQueue = useMemo(() => getReviewQueue(isDashboard ? 5 : 20), [items, isDashboard, getReviewQueue]);

  useEffect(() => {
    setDeck(reviewQueue);
    setIsFlipped(false);
    setIsCardVisible(true);
  }, [reviewQueue]);


  const handleConfidence = (confidence: 'bad' | 'unsure' | 'good') => {
    if (!currentCard) return;
    setIsCardVisible(false);

    const cardKey = getCardKey(currentCard);
    
    if (confidence === 'good' && !isDashboard) {
      toast({
          title: `Great!`,
          description: `You're learning "${cardKey}".`,
      });
    }

    setTimeout(() => {
        updateItem(cardKey, confidence);
        setIsFlipped(false);
        setIsCardVisible(true);
    }, 250);
  };

  const currentCard = deck.length > 0 ? deck[0] : null;
  
  if (loading) {
    return (
        <Card className={cn("w-full max-w-2xl mx-auto flex items-center justify-center min-h-[20rem]", isDashboard && "bg-transparent border-none shadow-none")}>
            <Loader2 className="h-10 w-10 animate-spin text-primary" />
        </Card>
    );
  }

  if (!currentCard) {
    return (
        <Card className={cn("w-full max-w-2xl mx-auto", isDashboard && "bg-transparent border-none shadow-none")}>
            <CardHeader className={cn(isDashboard && "p-0 mb-2")}>
                 <CardTitle className={cn("flex items-center gap-2 capitalize", isDashboard && "text-lg")}>
                    <Layers />
                    {isDashboard ? "Daily Review" : `${type} Flashcards`}
                </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4 p-10">
                <Check className="h-16 w-16 text-green-500 mx-auto" />
                <h3 className="text-xl font-semibold">Session Finished!</h3>
                <p className="text-muted-foreground">You've reviewed all your cards for now. Come back tomorrow for more!</p>
            </CardContent>
        </Card>
    );
  }

  const backContent = getCardBack(currentCard);

  return (
    <Card 
        ref={cardRef} 
        className={cn(
            "w-full max-w-2xl mx-auto flex flex-col transition-all duration-300",
            isDashboard && "bg-transparent border-none shadow-none",
            isFullscreen && "fixed inset-0 z-[100] max-w-full h-full rounded-none"
        )}
    >
       {!isDashboard && <CardHeader>
        <div className="flex justify-between items-center">
          <div className="flex-1">
            <CardTitle className="flex items-center gap-2 capitalize">
              <Layers />
              {`${type} Flashcards`}
            </CardTitle>
            <CardDescription>Click the card to flip it. You have {deck.length} cards left in this session.</CardDescription>
          </div>
          <Button variant="ghost" size="icon" onClick={toggleFullscreen}>
            {isFullscreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
            <span className="sr-only">{isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}</span>
          </Button>
        </div>
      </CardHeader>}
      <CardContent className={cn("flex-grow flex flex-col items-center justify-center space-y-6 p-4 md:p-6", isDashboard ? "p-0" : "pb-10 sm:pb-6")}>
        <div 
          className={cn("relative w-full h-[18rem] sm:h-[24rem] cursor-pointer group", isDashboard && "h-[14rem]")}
          style={{ perspective: '1000px' }}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div 
            className={cn(
                "relative w-full h-full rounded-lg shadow-lg transition-transform duration-700",
                "[transform-style:preserve-3d]",
                isCardVisible ? "animate-in fade-in zoom-in-95" : "animate-out fade-out zoom-out-95",
                isFlipped && "[transform:rotateY(180deg)]"
            )}
          >
             {/* Front of the card */}
             <div className="absolute w-full h-full bg-card rounded-lg flex flex-col items-center justify-center p-6 text-center border [backface-visibility:hidden]">
                <h2 className={cn("text-3xl sm:text-4xl font-bold", isDashboard && "text-2xl")}>{getCardFront(currentCard)}</h2>
            </div>

            {/* Back of the card */}
             <div className="absolute w-full h-full bg-accent text-accent-foreground rounded-lg flex flex-col justify-start p-4 [backface-visibility:hidden] [transform:rotateY(180deg)] border">
                <div className="flex justify-between items-center bg-primary text-primary-foreground rounded-t-md p-3 -m-4 mb-4">
                    <div className="flex items-baseline gap-2">
                        <h3 className={cn("text-lg sm:text-xl font-bold", isDashboard && "text-base")}>{backContent.title}</h3>
                        {'hindi' in backContent && backContent.hindi && <p className="text-base text-primary-foreground/80">({backContent.hindi})</p>}
                    </div>
                </div>
                <div className={cn("p-4 space-y-3 sm:space-y-4 bg-background text-foreground rounded-b-md flex-grow overflow-y-auto", isDashboard && "p-2 space-y-2 text-sm")}>
                    <p className="font-semibold text-base sm:text-lg">{backContent.definition}</p>
                    {'sentence' in backContent && backContent.sentence && (
                        <div className="flex items-start gap-2">
                            <ArrowRightCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                            <p className="text-sm sm:text-base italic">{backContent.sentence}</p>
                        </div>
                    )}
                    {'synonyms' in backContent && backContent.synonyms && backContent.synonyms.length > 0 && (
                        <>
                            <Separator />
                            <div>
                                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300 mb-2">SYNONYMS</span>
                                <div className="flex flex-wrap gap-2">
                                {backContent.synonyms.map(s => <span key={s} className="bg-secondary text-secondary-foreground text-xs font-medium px-2 py-1 rounded-md">{s}</span>)}
                                </div>
                            </div>
                        </>
                    )}
                     {'antonyms' in backContent && backContent.antonyms && backContent.antonyms.length > 0 && (
                        <div>
                            <span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300 mb-2">ANTONYMS</span>
                            <div className="flex flex-wrap gap-2">
                            {backContent.antonyms.map(s => <span key={s} className="bg-secondary text-secondary-foreground text-xs font-medium px-2 py-1 rounded-md">{s}</span>)}
                            </div>
                        </div>
                    )}
                </div>
            </div>
          </div>
        </div>
      </CardContent>
       <CardFooter className={cn("flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4", isDashboard && "p-0 pt-4")}>
            {isFlipped ? (
                 <div className="flex justify-around w-full gap-2">
                    <Button onClick={() => handleConfidence('bad')} className="flex-1 bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm">
                        <X className="mr-2 h-4 w-4" /> {!isDashboard && "Didn't Know"}
                    </Button>
                     <Button onClick={() => handleConfidence('unsure')} className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white text-xs sm:text-sm">
                        <HelpCircle className="mr-2 h-4 w-4" /> {!isDashboard && "Unsure"}
                    </Button>
                    <Button onClick={() => handleConfidence('good')} className="flex-1 bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm">
                        <Check className="mr-2 h-4 w-4" /> {!isDashboard && "Knew It"}
                    </Button>
                </div>
            ) : (
                 <Button onClick={() => setIsFlipped(true)} className="w-full">
                    {isDashboard ? "Show Meaning" : "Flip Card"}
                </Button>
            )}
        </CardFooter>
    </Card>
  );
}

    
