
import React, { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import HeroSection from '@/components/HeroSection';
import PortfolioSection from '@/components/PortfolioSection';
import AboutSection from '@/components/AboutSection';
import ToolsSection from '@/components/ToolsSection';
import ContactSection from '@/components/ContactSection';
import FooterSection from '@/components/ui/footer';
import { Testimonials } from '@/components/ui/testimonials';
import ScrollToTop from '@/components/ScrollToTop';

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
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <FooterSection />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default Index;
