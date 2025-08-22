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

  useEffect(() => {
    if (!api) return;

    const timer = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent((prev) => prev + 1);
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [api, current]);

  const testimonials = [
    {
      title: "Best decision",
      text: "Working with Beteab was one of the best decisions I made for my business. He designed a book cover for me that perfectly captured the message I wanted to share. His creativity, attention to detail, and professionalism made the whole process smooth and enjoyable.",
    },
    {
      title: "Creative and reliable",
      text: "Beteab has a rare talent for blending creativity with professionalism. He not only met the deadline but also exceeded my expectations in design quality. I felt confident throughout the entire collaboration.",
    },
    {
      title: "Highly recommended",
      text: "Every project I’ve worked on with Beteab turned out better than I imagined. He listens carefully, adds his own creative input, and delivers designs that truly stand out.",
    },
    {
      title: "A smooth process",
      text: "The process of working with Beteab was simple and stress-free. He’s a great communicator and ensures the final design matches exactly what you need.",
    },
    {
      title: "Exceeded expectations",
      text: "I was amazed at how well Beteab understood my vision. The end result wasn’t just a design—it felt like a piece of art made specifically for my story.",
    },
  ];

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
            Trusted by thousands of businesses worldwide
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {testimonials.map((t, index) => (
                <CarouselItem className="lg:basis-1/2" key={index}>
                  <div className="bg-muted rounded-md h-full p-6 aspect-video flex justify-between flex-col">
                    <User className="w-8 h-8 stroke-1" />
                    <div className="flex flex-col gap-4">
                      <h3 className="text-xl tracking-tight">{t.title}</h3>
                      <p className="text-muted-foreground max-w-xs text-base">
                        {t.text}
                      </p>
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
