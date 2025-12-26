'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { GripVertical, CheckCircle, XCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { DragDropContext, Droppable, Draggable, OnDragEndResponder } from '@hello-pangea/dnd';
import { sentenceReorderingExercises, ReorderingExercise } from '@/lib/data/sentence-reordering-data';
import { cn } from '@/lib/utils';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CardDescription, CardHeader, CardTitle } from './ui/card';

export function StaticSentenceReordering() {
  const [selectedExercise, setSelectedExercise] = useState<ReorderingExercise>(sentenceReorderingExercises[0]);
  const [sentences, setSentences] = useState(selectedExercise.sentences);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleExerciseChange = (exerciseId: string) => {
    const newExercise = sentenceReorderingExercises.find(ex => ex.id === exerciseId);
    if (newExercise) {
      setSelectedExercise(newExercise);
      setSentences(newExercise.sentences);
      setIsSubmitted(false);
    }
  };

  const onDragEnd: OnDragEndResponder = (result) => {
    if (!result.destination) {
      return;
    }

    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;
    
    // Prevent dragging of fixed sentences
    if (selectedExercise.fixedIndices.includes(sourceIndex) || selectedExercise.fixedIndices.includes(destinationIndex)) {
        return;
    }
    
    const items = Array.from(sentences);
    const [reorderedItem] = items.splice(sourceIndex, 1);
    items.splice(destinationIndex, 0, reorderedItem);
    
    setSentences(items);
  };
  
  const checkOrder = () => {
    if (sentences.length === 0) {
      toast({ title: 'Error', description: 'No sentences to check.' });
      return;
    }
    setIsSubmitted(true);
  };

  const isCorrect = () => {
    const userOrderIds = sentences.map(s => s.id);
    return JSON.stringify(userOrderIds) === JSON.stringify(selectedExercise.correctOrderIds);
  };
  
  const resetExercise = () => {
      setSentences(selectedExercise.sentences);
      setIsSubmitted(false);
  }

  const getDraggablePart = (fullSentences: typeof sentences) => {
    return fullSentences.filter((_, index) => !selectedExercise.fixedIndices.includes(index));
  }

  const getSentenceIndex = (sentenceId: string) => {
    return sentences.findIndex(s => s.id === sentenceId);
  }

  return (
    <>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Practice Exercise</span>
           <Select value={selectedExercise.id} onValueChange={handleExerciseChange}>
            <SelectTrigger className="w-[220px]">
              <SelectValue placeholder="Select Exercise" />
            </SelectTrigger>
            <SelectContent>
              {sentenceReorderingExercises.map(ex => (
                <SelectItem key={ex.id} value={ex.id}>
                  {ex.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardTitle>
        <CardDescription>Drag and drop the middle sentences into the correct order. The first and last sentences are fixed.</CardDescription>
      </CardHeader>

      <div className="space-y-3">
        {/* Fixed Sentence at the top */}
        <div className="flex items-center gap-3 rounded-lg border bg-muted p-4">
          <GripVertical className="h-5 w-5 text-transparent" />
          <span>{sentences[0].text}</span>
        </div>

        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="sentences">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-3 pl-6 pr-6">
                {getDraggablePart(sentences).map((sentence, index) => (
                  <Draggable key={sentence.id} draggableId={sentence.id} index={getSentenceIndex(sentence.id)}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={cn(
                          'flex items-center gap-3 rounded-lg border bg-card p-4 transition-shadow',
                          snapshot.isDragging ? 'shadow-lg' : '',
                          isSubmitted ? 'cursor-not-allowed' : 'cursor-grab'
                        )}
                      >
                        <GripVertical className="h-5 w-5 text-muted-foreground" />
                        <span>{sentence.text}</span>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        {/* Fixed Sentence at the bottom */}
        <div className="flex items-center gap-3 rounded-lg border bg-muted p-4">
          <GripVertical className="h-5 w-5 text-transparent" />
          <span>{sentences[sentences.length - 1].text}</span>
        </div>
      </div>


      {isSubmitted && (
        <div className="mt-6 rounded-lg border p-4">
          {isCorrect() ? (
            <div className="flex items-center gap-2 text-green-600">
              <CheckCircle className="h-5 w-5" />
              <p className="font-semibold">Correct! The order is perfect.</p>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-red-600">
              <XCircle className="h-5 w-5" />
              <p className="font-semibold">Not quite right. Try again!</p>
            </div>
          )}
        </div>
      )}

      <div className="mt-6 text-center">
        <Button onClick={isSubmitted ? resetExercise : checkOrder}>
          {isSubmitted ? 'Try Again' : 'Check Order'}
        </Button>
      </div>
    </>
  );
}
