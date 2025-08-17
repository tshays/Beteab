
import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [dots, setDots] = useState('');

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const dotsTimer = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 300);

    return () => {
      clearInterval(progressTimer);
      clearInterval(dotsTimer);
    };
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-primary flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
            Beteab Alemu
          </h1>
          <p className="text-xl text-accent">
            Loading{dots}
          </p>
        </div>
        
        <div className="w-64 h-2 bg-primary-foreground/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-accent to-primary-foreground transition-all duration-300 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <p className="text-primary-foreground/80 mt-4 text-sm">
          {progress}%
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
