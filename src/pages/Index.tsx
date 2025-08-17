
import React, { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import HeroSection from '@/components/HeroSection';
import PortfolioSection from '@/components/PortfolioSection';
import AboutSection from '@/components/AboutSection';
import ToolsSection from '@/components/ToolsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 300);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className={`min-h-screen bg-background transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
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
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold mb-4">Beteab Alemu</h3>
              <p className="text-primary-foreground/80">
                Multi-Disciplinary Creative Professional
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-accent">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#portfolio" className="text-primary-foreground/80 hover:text-accent transition-colors">Portfolio</a></li>
                <li><a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">About</a></li>
                <li><a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-accent">Services</h4>
              <ul className="space-y-2">
                <li className="text-primary-foreground/80">Graphics Design</li>
                <li className="text-primary-foreground/80">Video Editing</li>
                <li className="text-primary-foreground/80">Digital Printing</li>
                <li className="text-primary-foreground/80">Book Design</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-sm text-primary-foreground/60">
              © 2024 Beteab Alemu. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
