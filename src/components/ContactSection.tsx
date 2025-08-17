
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Linkedin } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-6">Get in Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your creative vision to life? Let's discuss your project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-bold text-primary mb-8">Let's Connect</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-muted-foreground">beteabalemu@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Phone</h4>
                  <p className="text-muted-foreground">+251-911-234-567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <p className="text-muted-foreground">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Follow My Work</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="rounded-full hover:bg-accent hover:text-accent-foreground">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full hover:bg-accent hover:text-accent-foreground">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full hover:bg-accent hover:text-accent-foreground">
                  <Mail className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full hover:bg-accent hover:text-accent-foreground">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="animate-fade-in-right">
            <CardHeader>
              <CardTitle className="text-primary">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="contact-input"
                    required
                  />
                </div>
                
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="contact-input"
                    required
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="contact-input min-h-[120px] resize-none"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full btn-primary">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
