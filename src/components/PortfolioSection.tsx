
import React from 'react';
import RollingGallery from './RollingGallery';

const PortfolioSection = () => {
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

        {/* Rolling Gallery */}
        <RollingGallery autoplay={true} pauseOnHover={true} />
      </div>
    </section>
  );
};

export default PortfolioSection;
