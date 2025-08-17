
import React, { useEffect, useState } from 'react';
import { Palette, Video, Brush, BookOpen, Type, Camera } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [currentIcon, setCurrentIcon] = useState(0);
  
  const icons = [Palette, Video, Brush, BookOpen, Type, Camera];
  const labels = ['Graphics', 'Videos', 'Art', 'Books', 'Typography', 'Digital'];

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

    const iconTimer = setInterval(() => {
      setCurrentIcon(prev => (prev + 1) % icons.length);
    }, 500);

    return () => {
      clearInterval(progressTimer);
      clearInterval(iconTimer);
    };
  }, [onLoadingComplete, icons.length]);

  const CurrentIcon = icons[currentIcon];

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary flex items-center justify-center z-50">
      <div className="text-center space-y-8">
        {/* Animated Logo */}
        <div className="relative">
          <div className="w-24 h-24 mx-auto mb-4 relative">
            <div className="absolute inset-0 rounded-full bg-accent/20 animate-ping"></div>
            <div className="relative w-24 h-24 rounded-full bg-accent/30 backdrop-blur-sm flex items-center justify-center">
              <CurrentIcon className="w-12 h-12 text-primary-foreground animate-pulse" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-primary-foreground mb-2">
            Beteab Alemu
          </h1>
          <p className="text-lg text-primary-foreground/80 animate-pulse">
            {labels[currentIcon]} Designer
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto">
          <div className="flex justify-between text-sm text-primary-foreground/60 mb-2">
            <span>Loading Portfolio</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-primary-foreground/20 rounded-full h-2">
            <div 
              className="h-2 bg-gradient-to-r from-accent to-accent/80 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Floating Icons */}
        <div className="flex justify-center space-x-4">
          {icons.map((Icon, index) => (
            <div
              key={index}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                index === currentIcon 
                  ? 'bg-accent text-primary scale-110' 
                  : 'bg-primary-foreground/20 text-primary-foreground/40 scale-90'
              }`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                transform: `translateY(${Math.sin((progress + index * 20) * 0.1) * 5}px) scale(${index === currentIcon ? 1.1 : 0.9})`
              }}
            >
              <Icon className="w-4 h-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
