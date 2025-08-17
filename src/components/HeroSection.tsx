
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Eye, MessageSquare } from 'lucide-react';

const HeroSection = () => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-container">
      <div className="hero-pattern"></div>
      
      {/* Hero Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/GyM_beT-NiE?autoplay=1&mute=1&loop=1&playlist=GyM_beT-NiE&controls=0&showinfo=0&modestbranding=1&iv_load_policy=3&rel=0"
          className="w-full h-full object-cover scale-125"
          style={{ 
            minWidth: '100vw', 
            minHeight: '100vh',
            pointerEvents: 'none'
          }}
          allow="autoplay; encrypted-media"
          allowFullScreen={false}
          frameBorder="0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-secondary/80"></div>
      </div>
      
      <div className="container-custom relative z-10 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
            Beteab Alemu
          </h1>
          <h2 className="text-xl md:text-2xl text-accent font-semibold mb-4">
            Multi-Disciplinary Creative Professional
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Graphics Designer | Video Editor | Digital Artist | Wall Painter | Book Designer
          </p>
          <p className="text-base md:text-lg text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
            Bringing creativity to life through diverse artistic mediums, 
            blending traditional Ethiopian culture with modern digital artistry
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
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-accent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
