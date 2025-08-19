
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Eye, MessageSquare } from 'lucide-react';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';

const HeroSection = () => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-container overflow-hidden">
      <div className="hero-pattern"></div>
      
      <ContainerScroll
        titleComponent={
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              My name is <br />
              <span className="text-accent">Beteab Alemu</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 max-w-4xl mx-auto">
              I am a Multi-Disciplinary Creative Professional specializing in 
              <span className="text-accent"> Graphics Design</span>, 
              <span className="text-accent"> Video Editing</span>, 
              <span className="text-accent"> Digital Art</span>, 
              <span className="text-accent"> Wall Painting</span>, and 
              <span className="text-accent"> Book Design</span>
            </p>
            <p className="text-lg text-primary-foreground/70 mb-12 max-w-3xl mx-auto">
              Bringing creativity to life through diverse artistic mediums, blending traditional Ethiopian culture with modern digital artistry
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                onClick={scrollToPortfolio}
                className="btn-primary group"
              >
                <Eye className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                View Portfolio
              </Button>
              <Button 
                onClick={scrollToContact}
                className="btn-secondary"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Get in Touch
              </Button>
            </div>
          </div>
        }
      >
        <div className="relative w-full h-full">
          {/* Hero Background Video */}
          <iframe
            src="https://www.youtube.com/embed/GyM_beT-NiE?autoplay=1&mute=1&loop=1&playlist=GyM_beT-NiE&controls=0&showinfo=0&modestbranding=1&iv_load_policy=3&rel=0"
            className="w-full h-full object-cover rounded-2xl"
            style={{ 
              minWidth: '100%', 
              minHeight: '100%',
              pointerEvents: 'none'
            }}
            allow="autoplay; encrypted-media"
            allowFullScreen={false}
            frameBorder="0"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-secondary/20 rounded-2xl"></div>
        </div>
      </ContainerScroll>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <ArrowDown className="w-6 h-6 text-accent" />
      </div>
    </section>
  );
};

export default HeroSection;
