
import React from 'react';
import TiltedCard from './TiltedCard';

const AboutSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-6">About Beteab Alemu</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Multi-Disciplinary Creative Journey
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With a passion for bringing stories to life through visual arts, I specialize in 
              creating meaningful designs that bridge traditional Ethiopian culture with contemporary 
              artistic expression. My work spans across multiple mediums, from digital graphics 
              to hand-painted murals.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Each project is approached with deep cultural sensitivity and artistic excellence, 
              ensuring that every piece not only meets professional standards but also honors 
              the rich heritage it represents.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My artistic philosophy centers on the belief that visual communication transcends 
              language barriers, making it a powerful tool for cultural preservation and 
              contemporary storytelling.
            </p>
          </div>
          
          <div className="animate-fade-in-right flex justify-center">
            <TiltedCard
              imageSrc="/lovable-uploads/379512e6-a55b-4e71-9ca4-73f3ff8068de.png"
              altText="Beteab Alemu - Creative Professional"
              captionText="Beteab Alemu"
              containerHeight="400px"
              containerWidth="350px"
              imageHeight="400px"
              imageWidth="350px"
              rotateAmplitude={12}
              scaleOnHover={1.15}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
