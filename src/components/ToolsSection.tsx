
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ToolsSection = () => {
  const toolCategories = [
    {
      category: 'Graphics Design',
      tools: [
        { name: 'Adobe Photoshop', description: 'Photo editing and digital art creation' },
        { name: 'Adobe Illustrator', description: 'Vector graphics and logo design' },
        { name: 'Figma', description: 'UI/UX design and prototyping' },
        { name: 'CorelDRAW', description: 'Vector illustration and layout design' }
      ]
    },
    {
      category: 'Video Editing',
      tools: [
        { name: 'Adobe Premiere Pro', description: 'Professional video editing' },
        { name: 'After Effects', description: 'Motion graphics and visual effects' },
        { name: 'DaVinci Resolve', description: 'Color grading and post-production' }
      ]
    },
    {
      category: 'Digital Art & Painting',
      tools: [
        { name: 'Procreate', description: 'Digital painting and illustration' },
        { name: 'Clip Studio Paint', description: 'Professional digital art creation' },
        { name: 'SketchBook', description: 'Digital sketching and concept art' }
      ]
    },
    {
      category: 'Book & Font Design',
      tools: [
        { name: 'Adobe InDesign', description: 'Professional layout and publishing' },
        { name: 'FontForge', description: 'Custom font creation and editing' },
        { name: 'Adobe Illustrator', description: 'Typography and font design' }
      ]
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-6">Tools & Software</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional tools and software that power my creative workflow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {toolCategories.map((category, categoryIndex) => (
            <div key={category.category} className="animate-fade-in-up" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
              <h3 className="text-xl font-bold text-primary mb-6 text-center">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.tools.map((tool, toolIndex) => (
                  <Card key={tool.name} className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {tool.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {tool.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
