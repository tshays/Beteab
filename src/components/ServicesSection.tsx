
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      name: 'Basic',
      price: '$299',
      period: 'per project',
      description: 'Perfect for small projects and personal use',
      features: [
        'Single design concept',
        'Basic revisions (up to 2)',
        'Standard file formats',
        '7-day delivery',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Standard',
      price: '$599',
      period: 'per project',
      description: 'Ideal for professional projects and businesses',
      features: [
        'Multiple design concepts',
        'Extended revisions (up to 5)',
        'All file formats included',
        '5-day delivery',
        'Priority support',
        'Source files included',
        'Commercial usage rights'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: '$999',
      period: 'per project',
      description: 'Complete solution for complex creative projects',
      features: [
        'Unlimited design concepts',
        'Unlimited revisions',
        'All formats + print-ready files',
        '3-day delivery',
        '24/7 priority support',
        'Full source files',
        'Extended commercial rights',
        'Brand guidelines included',
        'Post-launch support'
      ],
      popular: false
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-6">Services & Pricing</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect package for your creative project needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={service.name} 
              className={`service-card relative animate-fade-in-up ${
                service.popular ? 'ring-2 ring-accent sacred-glow' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-primary mb-2">
                  {service.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-accent">{service.price}</span>
                  <span className="text-muted-foreground ml-2">{service.period}</span>
                </div>
                <p className="text-muted-foreground">{service.description}</p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${service.popular ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
