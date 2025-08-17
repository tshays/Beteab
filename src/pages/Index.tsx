
import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Eye, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import HeroSection from '@/components/HeroSection';
import PortfolioSection from '@/components/PortfolioSection';
import AboutSection from '@/components/AboutSection';
import ToolsSection from '@/components/ToolsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Portfolio Section */}
      <PortfolioSection />
      
      {/* Tools Section */}
      <ToolsSection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container-custom text-center">
          <h3 className="text-2xl font-bold mb-4">Beteab Alemu</h3>
          <p className="text-primary-foreground/80 mb-6">
            Multi-Disciplinary Creative Professional
          </p>
          <p className="text-sm text-primary-foreground/60">
            © 2024 Beteab Alemu. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
