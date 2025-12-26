
'use client';

import { useCallback, useEffect, useRef } from 'react';

export function useSound(soundPath: string, volume = 0.5) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // This effect runs only on the client
    if (typeof window !== 'undefined') {
      const audio = new Audio(soundPath);
      audio.volume = volume;
      audioRef.current = audio;
    }
  }, [soundPath, volume]);

  const play = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Rewind to the start
      audioRef.current.play().catch(error => {
        console.error(`Error playing sound: ${soundPath}`, error);
      });
    }
  }, []);

  return play;
}
