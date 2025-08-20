
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    // Book Covers
    {
      id: 1,
      category: 'book-covers',
      title: 'Ethiopian Cultural Heritage Book',
      description: 'Traditional Ethiopian art book cover design',
      image: '/lovable-uploads/52a90dd5-e5c0-4f49-9b9f-99f498cb7eb2.png'
    },
    {
      id: 2,
      category: 'book-covers',
      title: 'Religious Studies Publication',
      description: 'Sacred text cover with traditional iconography',
      image: '/lovable-uploads/f6161222-8a64-4f0c-b41a-0f33c2d40055.png'
    },
    {
      id: 3,
      category: 'book-covers',
      title: 'Historical Documentation',
      description: 'Cultural history book design',
      image: '/lovable-uploads/5f294d07-3330-4e1c-af57-f799b7dc4300.png'
    },
    // Digital Paintings
    {
      id: 4,
      category: 'digital-paintings',
      title: 'Spiritual Reflection',
      description: 'Digital artwork depicting spiritual journey',
      image: '/lovable-uploads/721bcd34-de12-47b6-b408-a5ea86a5cf13.png'
    },
    {
      id: 5,
      category: 'digital-paintings',
      title: 'Cultural Celebration',
      description: 'Digital painting of Ethiopian traditions',
      image: '/lovable-uploads/ce61c42e-181c-4770-8524-d762d0829ec4.png'
    },
    {
      id: 6,
      category: 'digital-paintings',
      title: 'Religious Architecture',
      description: 'Digital representation of sacred spaces',
      image: '/lovable-uploads/7188f1ce-3e24-46b6-ae62-040438e6bd0f.png'
    },
    {
      id: 7,
      category: 'digital-paintings',
      title: 'Cultural Unity',
      description: 'Digital artwork celebrating diversity',
      image: '/lovable-uploads/c3525a28-6c27-4f83-8a7c-37bacbac6c22.png'
    },
    // Font Design
    {
      id: 8,
      category: 'font-design',
      title: 'Ethiopian Script Typography',
      description: 'Custom Amharic font design',
      image: '/lovable-uploads/981b325d-c604-41b0-801e-544f0e71fc47.png'
    },
    {
      id: 9,
      category: 'font-design',
      title: 'Cultural Publication Font',
      description: 'Typography for cultural publications',
      image: '/lovable-uploads/0f5668b5-b903-4740-bd4f-ce6bd8619cf1.png'
    },
    {
      id: 10,
      category: 'font-design',
      title: 'Sacred Text Typography',
      description: 'Specialized font for religious texts',
      image: '/lovable-uploads/0cc55e7b-a368-4371-9de8-b885d0784873.png'
    },
    // Video Editing
    {
      id: 11,
      category: 'video-editing',
      title: 'Ethiopian Traditional Music Video',
      description: 'Creative music video editing and production',
      video: 'https://youtu.be/GyM_beT-NiE?si=g3R1gV9aWfbAQxYS',
      isVideo: true
    },
    {
      id: 12,
      category: 'video-editing',
      title: 'Cultural Documentary',
      description: 'Documentary video editing and storytelling',
      video: 'https://youtu.be/oeAchampMMI?si=D879c4-8wUIcGQYG',
      isVideo: true
    },
    {
      id: 13,
      category: 'video-editing',
      title: 'Social Media Content',
      description: 'Instagram reel editing and social media content',
      video: 'https://www.instagram.com/reel/DNKvCFisyvr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      isVideo: true
    },
    {
      id: 14,
      category: 'video-editing',
      title: 'Creative Visual Effects',
      description: 'Advanced video editing with visual effects',
      video: 'https://www.instagram.com/reel/DMP9TGSNeYI/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      isVideo: true
    },
    {
      id: 15,
      category: 'video-editing',
      title: 'Promotional Content',
      description: 'Marketing and promotional video editing',
      video: 'https://www.instagram.com/reel/DEZDubYNlSQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      isVideo: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'book-covers', name: 'Book Covers' },
    { id: 'digital-paintings', name: 'Digital Paintings' },
    { id: 'font-design', name: 'Font Design' },
    { id: 'video-editing', name: 'Video Editing' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const getEmbedUrl = (url: string) => {
    if (url.includes('youtu.be')) {
      const videoId = url.split('/').pop()?.split('?')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes('instagram.com/reel')) {
      const reelId = url.split('/reel/')[1]?.split('/')[0];
      return `https://www.instagram.com/reel/${reelId}/embed/`;
    }
    return url;
  };

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-6">Portfolio</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my diverse collection of creative works across multiple artistic disciplines
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              variant={activeFilter === category.id ? "default" : "outline"}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === category.id 
                  ? 'btn-primary' 
                  : 'btn-secondary'
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {filteredItems.map((item, index) => (
            <Card 
              key={item.id} 
              className={`portfolio-card animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                {item.isVideo ? (
                  <div className="w-full h-64">
                    <iframe
                      src={getEmbedUrl(item.video)}
                      className="w-full h-full rounded-t-lg"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="portfolio-image"
                  />
                )}
                <div className="portfolio-overlay">
                  <div className="text-primary-foreground">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-primary-foreground/90">{item.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
