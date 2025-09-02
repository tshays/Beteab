
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Bot } from 'lucide-react';
import AIAssistant from './AIAssistant';

const FloatingAIIcon = () => {
  const [showAssistant, setShowAssistant] = useState(false);

  return (
    <>
      <Button
        onClick={() => setShowAssistant(true)}
        className="fixed bottom-24 right-8 z-50 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary via-primary to-secondary hover:from-primary/90 hover:via-primary/90 hover:to-secondary/90 text-primary-foreground animate-pulse"
        size="icon"
      >
        <Bot className="h-6 w-6" />
      </Button>
      
      <AIAssistant 
        isOpen={showAssistant} 
        onClose={() => setShowAssistant(false)} 
      />
    </>
  );
};

export default FloatingAIIcon;
