"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { User } from "lucide-react";

function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      title: "Best decision",
      text: "Working with Beteab was one of the best decisions I made for my business. He designed a book cover that perfectly captured the message I wanted to share. His creativity, attention to detail, and professionalism made the whole process smooth and enjoyable.",
    },
    {
      title: "Professional and reliable",
      text: "I needed someone who could bring my vision to life, and Beteab delivered beyond my expectations. He communicates clearly, meets deadlines, and produces high-quality work that stands out.",
    },
    {
      title: "Highly recommended",
      text: "What impressed me most was how he listened to my ideas and transformed them into something even better. His design sense is excellent, and his work ethic is unmatched.",
    },
    {
      title: "Creative partner",
      text: "Beteab isn’t just a designer—he’s a creative partner who truly cares about helping you succeed. I’ll definitely work with him again in the future.",
    },
    {
      title: "Exceptional quality",
      text: "The final product exceeded my expectations. The design was polished, professional, and aligned perfectly with my goals.",
    },
  ];

  useEffect(() => {
    if (!api) return;

    const interval = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 4000);

    return () => clearTimeout(interval);
  }, [api, current]);

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
            Trusted by thousands of businesses worldwide
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem className="lg:basis-1/2" key={index}>
                  <div className="bg-muted rounded-md h-full p-6 aspect-video flex justify-between flex-col">
                    <User className="w-8 h-8 stroke-1" />
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col">
                        <h3 className="text-xl tracking-tight">
                          {testimonial.title}
                        </h3>
                        <p className="text-muted-foreground max-w-xs text-base">
                          {testimonial.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export { Testimonials };
