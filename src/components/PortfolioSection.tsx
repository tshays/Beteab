
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Card from '@/components/ui/carousel-card';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = {
    'book-covers': [
      {
        id: 1,
        title: 'Ethiopian Cultural Heritage Book',
        content: 'Traditional Ethiopian art book cover design showcasing cultural elements and heritage themes.',
        imgUrl: '/lovable-uploads/52a90dd5-e5c0-4f49-9b9f-99f498cb7eb2.png'
      },
      {
        id: 2,
        title: 'Religious Studies Publication',
        content: 'Sacred text cover with traditional iconography and spiritual symbolism.',
        imgUrl: '/lovable-uploads/f6161222-8a64-4f0c-b41a-0f33c2d40055.png'
      },
      {
        id: 3,
        title: 'Historical Documentation',
        content: 'Cultural history book design featuring traditional Ethiopian historical elements.',
        imgUrl: '/lovable-uploads/5f294d07-3330-4e1c-af57-f799b7dc4300.png'
      }
    ],
    'digital-paintings': [
      {
        id: 4,
        title: 'Spiritual Reflection',
        content: 'Digital artwork depicting spiritual journey and religious contemplation through vibrant colors.',
        imgUrl: '/lovable-uploads/721bcd34-de12-47b6-b408-a5ea86a5cf13.png'
      },
      {
        id: 5,
        title: 'Cultural Celebration',
        content: 'Digital painting of Ethiopian traditions celebrating the rich cultural heritage of the region.',
        imgUrl: '/lovable-uploads/ce61c42e-181c-4770-8524-d762d0829ec4.png'
      },
      {
        id: 6,
        title: 'Religious Architecture',
        content: 'Digital representation of sacred spaces showcasing traditional Ethiopian church architecture.',
        imgUrl: '/lovable-uploads/7188f1ce-3e24-46b6-ae62-040438e6bd0f.png'
      },
      {
        id: 7,
        title: 'Cultural Unity',
        content: 'Digital artwork celebrating diversity and unity within Ethiopian cultural traditions.',
        imgUrl: '/lovable-uploads/c3525a28-6c27-4f83-8a7c-37bacbac6c22.png'
      }
    ],
    'font-design': [
      {
        id: 8,
        title: 'Ethiopian Script Typography',
        content: 'Custom Amharic font design preserving traditional script aesthetics while ensuring modern readability.',
        imgUrl: '/lovable-uploads/981b325d-c604-41b0-801e-544f0e71fc47.png'
      },
      {
        id: 9,
        title: 'Cultural Publication Font',
        content: 'Typography specifically designed for cultural publications maintaining traditional Ethiopian script elegance.',
        imgUrl: '/lovable-uploads/0f5668b5-b903-4740-bd4f-ce6bd8619cf1.png'
      },
      {
        id: 10,
        title: 'Sacred Text Typography',
        content: 'Specialized font design for religious texts combining traditional script with modern clarity.',
        imgUrl: '/lovable-uploads/0cc55e7b-a368-4371-9de8-b885d0784873.png'
      }
    ],
    'video-editing': [
      {
        id: 11,
        title: 'Ethiopian Traditional Music Video',
        content: 'Creative music video editing and production showcasing traditional Ethiopian music with modern cinematography techniques.',
        video: 'https://youtu.be/GyM_beT-NiE?si=g3R1gV9aWfbAQxYS',
        isVideo: true
      },
      {
        id: 12,
        title: 'Cultural Documentary',
        content: 'Documentary video editing and storytelling highlighting Ethiopian cultural practices and traditions.',
        video: 'https://youtu.be/oeAchampMMI?si=D879c4-8wUIcGQYG',
        isVideo: true
      },
      {
        id: 13,
        title: 'Social Media Content',
        content: 'Instagram reel editing and social media content creation with engaging visual storytelling techniques.',
        video: 'https://www.instagram.com/reel/DNKvCFisyvr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
        isVideo: true
      },
      {
        id: 14,
        title: 'Creative Visual Effects',
        content: 'Advanced video editing with visual effects and motion graphics for enhanced storytelling impact.',
        video: 'https://www.instagram.com/reel/DMP9TGSNeYI/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
        isVideo: true
      },
      {
        id: 15,
        title: 'Promotional Content',
        content: 'Marketing and promotional video editing with compelling narratives and professional post-production.',
        video: 'https://www.instagram.com/reel/DEZDubYNlSQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
        isVideo: true
      }
    ]
  };

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'book-covers', name: 'Book Covers' },
    { id: 'digital-paintings', name: 'Digital Paintings' },
    { id: 'font-design', name: 'Font Design' },
    { id: 'video-editing', name: 'Video Editing' }
  ];

  const getAllItems = () => {
    return Object.values(portfolioItems).flat();
  };

  const getCurrentData = () => {
    if (activeFilter === 'all') {
      return getAllItems();
    }
    return portfolioItems[activeFilter] || [];
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

        {/* Portfolio Cards */}
        <div className="mb-16">
          <Card data={getCurrentData()} showCarousel={true} cardsPerView={3} />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
