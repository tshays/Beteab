
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Card from '@/components/ui/carousel-card';
import { DynamicFrameLayout } from '@/components/ui/dynamic-frame-layout';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = {
    'book-covers': [
      {
        id: 1,
        title: 'Ethiopian Cultural Heritage Book',
        content: 'Book Covers',
        imgUrl: '/lovable-uploads/52a90dd5-e5c0-4f49-9b9f-99f498cb7eb2.png'
      },
      {
        id: 2,
        title: 'Religious Studies Publication',
        content: 'Book Covers',
        imgUrl: '/lovable-uploads/f6161222-8a64-4f0c-b41a-0f33c2d40055.png'
      },
      {
        id: 3,
        title: 'Historical Documentation',
        content: 'Book Covers',
        imgUrl: '/lovable-uploads/5f294d07-3330-4e1c-af57-f799b7dc4300.png'
      }
    ],
    'digital-paintings': [
      {
        id: 4,
        title: 'Spiritual Reflection',
        content: 'Digital Paintings',
        imgUrl: '/lovable-uploads/721bcd34-de12-47b6-b408-a5ea86a5cf13.png'
      },
      {
        id: 5,
        title: 'Cultural Celebration',
        content: 'Digital Paintings',
        imgUrl: '/lovable-uploads/ce61c42e-181c-4770-8524-d762d0829ec4.png'
      },
      {
        id: 6,
        title: 'Religious Architecture',
        content: 'Digital Paintings',
        imgUrl: '/lovable-uploads/7188f1ce-3e24-46b6-ae62-040438e6bd0f.png'
      },
      {
        id: 7,
        title: 'Cultural Unity',
        content: 'Digital Paintings',
        imgUrl: '/lovable-uploads/c3525a28-6c27-4f83-8a7c-37bacbac6c22.png'
      }
    ],
    'font-design': [
      {
        id: 8,
        title: 'Ethiopian Script Typography',
        content: 'Font Design',
        imgUrl: '/lovable-uploads/981b325d-c604-41b0-801e-544f0e71fc47.png'
      },
      {
        id: 9,
        title: 'Cultural Publication Font',
        content: 'Font Design',
        imgUrl: '/lovable-uploads/0f5668b5-b903-4740-bd4f-ce6bd8619cf1.png'
      },
      {
        id: 10,
        title: 'Sacred Text Typography',
        content: 'Font Design',
        imgUrl: '/lovable-uploads/0cc55e7b-a368-4371-9de8-b885d0784873.png'
      }
    ]
  };

  const videoFrames = [
    {
      id: 1,
      video: "https://www.youtube.com/embed/GyM_beT-NiE",
      defaultPos: { x: 0, y: 0, w: 4, h: 4 },
      mediaSize: 1,
      isHovered: false,
    },
    {
      id: 2,
      video: "https://www.youtube.com/embed/oeAchampMMI", 
      defaultPos: { x: 4, y: 0, w: 4, h: 4 },
      mediaSize: 1,
      isHovered: false,
    },
    {
      id: 3,
      video: "https://www.instagram.com/reel/DNKvCFisyvr/embed/",
      defaultPos: { x: 8, y: 0, w: 4, h: 4 },
      mediaSize: 1,
      isHovered: false,
    },
    {
      id: 4,
      video: "https://www.instagram.com/reel/DMP9TGSNeYI/embed/",
      defaultPos: { x: 0, y: 4, w: 4, h: 4 },
      mediaSize: 1,
      isHovered: false,
    },
    {
      id: 5,
      video: "https://www.instagram.com/reel/DEZDubYNlSQ/embed/",
      defaultPos: { x: 4, y: 4, w: 4, h: 4 },
      mediaSize: 1,
      isHovered: false,
    }
  ];

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

  const renderContent = () => {
    if (activeFilter === 'video-editing') {
      return (
        <div className="w-full" style={{ height: '600px' }}>
          <DynamicFrameLayout 
            frames={videoFrames} 
            className="w-full h-full" 
            hoverSize={6}
            gapSize={4}
          />
        </div>
      );
    }
    
    return <Card data={getCurrentData()} showCarousel={true} cardsPerView={3} />;
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

        {/* Portfolio Content */}
        <div className="mb-16">
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
