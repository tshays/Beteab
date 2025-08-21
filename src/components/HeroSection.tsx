import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Eye, MessageSquare } from 'lucide-react';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import LightRays from './LightRays';

const HeroSection = () => {
  // Array of videos to cycle through
  const heroVideos = [
    "https://www.youtube.com/embed/GyM_beT-NiE?autoplay=1&mute=1&loop=1&playlist=GyM_beT-NiE&controls=0&showinfo=0&modestbranding=1&iv_load_policy=3&rel=0",
    "https://www.youtube.com/embed/oeAchampMMI?autoplay=1&mute=1&loop=1&playlist=oeAchampMMI&controls=0&showinfo=0&modestbranding=1&iv_load_policy=3&rel=0"
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      
      setTimeout(() => {
        setCurrentVideoIndex((prevIndex) => 
          (prevIndex + 1) % heroVideos.length
        );
        setFade(true);
      }, 300); // Half second fade out
      
    }, 4000); // Change video every 4 seconds

    return () => clearInterval(interval);
  }, [heroVideos.length]);

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-container overflow-hidden relative">
      {/* LightRays Background */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>
      
      <div className="hero-pattern"></div>
      
      <ContainerScroll
        titleComponent={
          <div className="text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              <span className="text-accent">Beteab Alemu</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 mb-12 max-w-4xl mx-auto">
              Blending Ethiopian tradition with modern digital artistry.
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
          {/* Hero Background Video with Fade Transition */}
          <iframe
            key={currentVideoIndex}
            src={heroVideos[currentVideoIndex]}
            className={`w-full h-full object-cover rounded-2xl transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}
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
