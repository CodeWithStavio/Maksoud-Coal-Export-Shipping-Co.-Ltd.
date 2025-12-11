"use client";

import Image from "next/image";
import { testimonials, images } from "@/lib/images";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Quote, Star } from "lucide-react";

export function Testimonials() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={images.testimonialBg}
          alt="Background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/85" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <span className="font-body text-xs font-semibold uppercase tracking-wider text-white">
              Testimonials
            </span>
          </div>
          <h2 className="mt-6 font-sans text-3xl font-light tracking-tight text-white sm:text-4xl lg:text-5xl">
            What Our <span className="font-semibold text-primary">Clients</span> Say
          </h2>
          <p className="mt-4 font-body text-base text-white/60 lg:text-lg">
            Trusted by industry leaders across the globe
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-700 hover:border-primary/50 hover:bg-white/10 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <Quote className="h-10 w-10 text-primary/30" />

              {/* Stars */}
              <div className="mt-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="mt-6 font-body text-base leading-relaxed text-white/80">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-8 flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <p className="font-sans text-sm font-semibold text-white">
                    {testimonial.author}
                  </p>
                  <p className="font-body text-xs text-white/60">
                    {testimonial.role}
                  </p>
                  <p className="font-body text-xs text-primary">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Decorative */}
              <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover:bg-primary/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
