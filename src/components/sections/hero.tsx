"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { images, stats } from "@/lib/images";

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slides = images.heroSlides;

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 1000);
  }, [isAnimating]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, slides.length, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, slides.length, goToSlide]);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
            index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-110"
          }`}
        >
          {/* Background Image with Ken Burns effect */}
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className={`object-cover ${
                index === currentSlide ? "animate-ken-burns" : ""
              }`}
              sizes="100vw"
            />
          </div>

          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Animated content for current slide */}
            <div key={currentSlide} className="stagger-children">
              {/* Tagline */}
              <div className="inline-flex items-center gap-3 rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 backdrop-blur-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                <span className="font-body text-sm font-medium uppercase tracking-widest text-white">
                  Diamond Machines
                </span>
              </div>

              {/* Main Title */}
              <h1 className="mt-8 font-sans text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl xl:text-8xl">
                {slides[currentSlide].title.split(" ").map((word, i) => (
                  <span key={i}>
                    {i === 1 ? (
                      <span className="gradient-text">{word}</span>
                    ) : (
                      word
                    )}{" "}
                  </span>
                ))}
              </h1>

              {/* Subtitle */}
              <p className="mt-6 max-w-xl font-body text-xl text-white/80 md:text-2xl">
                {slides[currentSlide].subtitle}
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="btn-hover group h-14 rounded-none bg-red-600 px-8 font-body text-sm font-semibold uppercase tracking-wider text-white hover:bg-red-700"
                >
                  <Link href="#products">
                    View Products
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-14 rounded-none border-2 border-white/40 bg-transparent px-8 font-body text-sm font-semibold uppercase tracking-wider text-white hover:border-orange-500 hover:bg-orange-500/10 hover:text-white"
                >
                  <Link href="#contact">Get Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation */}
      <div className="absolute bottom-32 left-6 z-20 flex items-center gap-4 lg:left-auto lg:right-8">
        <button
          onClick={prevSlide}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-sm transition-all hover:border-red-500 hover:bg-red-500"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-sm transition-all hover:border-red-500 hover:bg-red-500"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-6 z-20 flex items-center gap-3 lg:left-1/2 lg:-translate-x-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`slider-dot h-3 rounded-full transition-all ${
              index === currentSlide
                ? "active w-8 bg-red-500"
                : "w-3 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-1 bg-white/10">
        <div
          key={currentSlide}
          className="slider-progress h-full"
          style={{ animationDuration: "6s" }}
        />
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="hidden border-t border-white/10 py-6 md:grid md:grid-cols-4 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center transition-all hover:scale-105"
              >
                <p className="font-sans text-3xl font-bold text-red-500 lg:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 font-body text-xs uppercase tracking-wider text-white/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-24 right-6 z-20 hidden lg:block">
        <Link
          href="#about"
          className="flex flex-col items-center gap-2 text-white/60 transition-colors hover:text-red-500"
        >
          <span className="font-body text-xs uppercase tracking-wider [writing-mode:vertical-lr]">
            Scroll Down
          </span>
          <ChevronDown className="h-5 w-5 animate-bounce-slow" />
        </Link>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute left-6 top-24 h-20 w-20 border-l-2 border-t-2 border-red-500/50" />
      <div className="absolute bottom-24 right-6 h-20 w-20 border-b-2 border-r-2 border-orange-500/50" />
    </section>
  );
}
