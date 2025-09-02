
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bot, User, Send, ExternalLink } from 'lucide-react';

interface AIAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

const AIAssistant = ({ isOpen, onClose }: AIAssistantProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'ai',
      content: "Hello! I'm Beteab's AI assistant. I can help you learn more about his work, contact information, and social media. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const beteabInfo = {
    work: {
      portfolio: "Digital design, video production, and hand-painted murals",
      specialties: "Ethiopian cultural art, modern digital expression, visual storytelling",
      experience: "Blending traditional Ethiopian art with contemporary design techniques"
    },
    contact: {
      address: "Addis Ababa, Ethiopia",
      email: "beteab.alemu@example.com",
      phone: "+251-911-123-456"
    },
    social: {
      instagram: "https://instagram.com/beteab_alemu",
      linkedin: "https://linkedin.com/in/beteab-alemu",
      behance: "https://behance.net/beteabalemu",
      youtube: "https://youtube.com/@beteabalemu"
    }
  };

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('work') || lowerMessage.includes('portfolio') || lowerMessage.includes('art')) {
      return `Beteab specializes in ${beteabInfo.work.portfolio}. His work focuses on ${beteabInfo.work.specialties}, with ${beteabInfo.work.experience}. You can see his portfolio in the sections above!`;
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('address') || lowerMessage.includes('email') || lowerMessage.includes('phone')) {
      return `You can reach Beteab at:\n📍 Address: ${beteabInfo.contact.address}\n📧 Email: ${beteabInfo.contact.email}\n📱 Phone: ${beteabInfo.contact.phone}`;
    }
    
    if (lowerMessage.includes('social') || lowerMessage.includes('instagram') || lowerMessage.includes('linkedin') || lowerMessage.includes('behance')) {
      return `Here are Beteab's social media links:\n📷 Instagram: ${beteabInfo.social.instagram}\n💼 LinkedIn: ${beteabInfo.social.linkedin}\n🎨 Behance: ${beteabInfo.social.behance}\n📺 YouTube: ${beteabInfo.social.youtube}`;
    }
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return "Hello! I'm here to help you learn more about Beteab Alemu. You can ask me about his work, contact information, or social media links!";
    }
    
    return "I can help you with information about Beteab's work, contact details, or social media links. What specifically would you like to know?";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    const aiResponse: Message = {
      type: 'ai',
      content: getAIResponse(inputValue),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, aiResponse]);
    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md h-[600px] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-primary" />
            Beteab's AI Assistant
          </DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="flex-1 pr-4">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.type === 'ai' && (
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-primary" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-primary text-primary-foreground ml-auto'
                      : 'bg-muted'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.content}</p>
                </div>
                {message.type === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-secondary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
        
        <div className="flex gap-2 pt-4 border-t">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about Beteab's work, contact, or social media..."
            className="flex-1"
          />
          <Button onClick={handleSendMessage} size="icon">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AIAssistant;
