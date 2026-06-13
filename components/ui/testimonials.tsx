"use client";

import React, { useCallback } from "react";
import { Rating } from "@/components/ui/rating";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

export type TestimonialType = {
  id: number | string;
  name: string;
  rating: number | string;
  text: string;
};

interface TestimonialsProps {
  reviews: TestimonialType[];
  title?: string;
}

/* ---------------- CARD ---------------- */

export function TestimonialCard({ review }: { review: TestimonialType }) {
  return (
    <div className="p-5 md:p-8 md:h-70 h-55 w-85 border-gray-200 rounded-2xl border flex flex-col gap-3 md:gap-4">
      
      <Rating rating={review.rating} />

      <div className="flex  items-center gap-2">
        <p className="font-bold text-base md:text-xl">{review.name}</p>
        <CheckCircle2
          className="w-5 h-5"
          fill="#01AB31"
          color="white"
        />
      </div>

      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
        "{review.text}"
      </p>
    </div>
  );
}

/* ---------------- SLIDER ---------------- */

export function Testimonials({ reviews, title }: TestimonialsProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="md:max-w-6xl max-w-screen mx-auto my-12 md:my-20 px-4">
      
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8 md:mb-10">
        {title && (
          <h1 className="font-bold text-3xl uppercase leading-tight">
            {title}
          </h1>
        )}

        <div className="flex gap-3">
          <button
            onClick={scrollPrev}
            className="p-2 md:p-3 rounded-full hover:bg-gray-100 transition"
          >
            <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={scrollNext}
            className="p-2 md:p-3 rounded-full hover:bg-gray-100 transition"
          >
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>

      {/* EMBLA */}
      <div className="overflow-hidden w-full" ref={emblaRef}>
        
        <div className="flex w-full">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="
                flex-[0_0_100%]
                md:flex-[0_0_50%]
                lg:flex-[0_0_33.333%]
                min-w-0
                px-2
              "
            >
              <TestimonialCard review={review} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}