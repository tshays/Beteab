import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Eye, MessageSquare } from 'lucide-react';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import LightRays from './LightRays';
import SplitText from './SplitText';
import Typed from 'react-typed';

const HeroSection = () => {
  const heroVideos = [
    "https://www.youtube.com/embed/GyM_beT-NiE?autoplay=1&mute=1&loop=1&playlist=GyM_beT-NiE&controls=0&showinfo=0&modestbranding=1&iv_load_policy=3&rel=0",
    "https://www.youtube.com/embed/oeAchampMMI?autoplay=1&mute=1&loop=1&playlist=oeAchampMMI&controls=0&showinfo=0&modestbranding=1&iv_load_policy=3&rel=0"
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTimer = setTimeout(() => setLoading(false), 2000); // animated loading
    return () => clearTimeout(loadTimer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentVideoIndex((prev) => (prev + 1) % heroVideos.length);
        setFade(true);
      }, 300);
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const scrollToPortfolio = () => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-dark-blue text-white z-50">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-accent"></div>
      </div>
    );
  }

  return (
    <section className="hero-container overflow-hidden relative min-h-screen bg-black text-white">
      {/* LightRays Background */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#1E90FF"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>

      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center justify-center text-center relative z-10 mt-20">
            <SplitText
              text="Beteab Alemu"
              className="text-5xl md:text-7xl font-bold text-accent mb-4 whitespace-nowrap"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
            />

            <SplitText
              text="Blending Ethiopian tradition with modern digital artistry."
              className="text-lg md:text-2xl text-primary-foreground/80 mb-6 max-w-3xl mx-auto"
              delay={50}
              duration={0.5}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
            />

            {/* Typing effect */}
            <Typed
              strings={['Some of my works', 'Creative Digital Projects', 'Innovative Designs']}
              typeSpeed={80}
              backSpeed={50}
              loop
              className="text-accent text-xl md:text-2xl font-medium"
            />

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
              <Button onClick={scrollToPortfolio} className="btn-primary group">
                <Eye className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                View Portfolio
              </Button>
              <Button onClick={scrollToContact} className="btn-secondary">
                <MessageSquare className="w-5 h-5 mr-2" />
                Get in Touch
              </Button>
            </div>
          </div>
        }
      />

      <div className="relative w-full h-full">
        <iframe
          key={currentVideoIndex}
          src={heroVideos[currentVideoIndex]}
          className={`w-full h-full object-cover transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}
          style={{ pointerEvents: 'none' }}
          allow="autoplay; encrypted-media"
          frameBorder="0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-secondary/20"></div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <ArrowDown className="w-6 h-6 text-accent" />
      </div>
    </section>
  );
};

export default HeroSection;
