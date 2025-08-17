
import React from 'react';
import { Palette, Video, Brush, BookOpen, Type, Camera } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { icon: Palette, name: "Graphics Design", level: 95 },
    { icon: Video, name: "Video Editing", level: 90 },
    { icon: Brush, name: "Wall Painting", level: 88 },
    { icon: BookOpen, name: "Book Design", level: 92 },
    { icon: Type, name: "Font Design", level: 85 },
    { icon: Camera, name: "Digital Printing", level: 87 }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-6">About Beteab Alemu</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-16 items-center">
          {/* Profile Picture */}
          <div className="animate-fade-in-left lg:col-span-1">
            <div className="relative mx-auto w-80 h-80 rounded-full overflow-hidden shadow-2xl">
              <img
                src="/lovable-uploads/beteab-profile.jpg"
                alt="Beteab Alemu"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>

          <div className="animate-fade-in-left lg:col-span-2">
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
        </div>
        
        <div className="mt-16 animate-fade-in-right">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Skills & Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="group">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <skill.icon className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                    <span className="font-semibold text-foreground">{skill.name}</span>
                  </div>
                  <span className="text-accent font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div 
                    className="h-2 bg-gradient-to-r from-accent to-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
