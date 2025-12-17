"use client";

import { testimonials } from "@/lib/images";
import { Quote, Star } from "lucide-react";

export function Testimonials() {
  return (
    <section className="stacking-section relative overflow-hidden bg-black py-24 lg:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(220,38,38,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(220,38,38,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            <span className="font-body text-sm font-medium uppercase tracking-widest text-white">
              Client Testimonials
            </span>
          </div>

          <h2 className="mt-8 font-sans text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl font-body text-lg text-white/60">
            Hear from our satisfied clients who have transformed their
            operations with our machinery.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="group relative overflow-hidden border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:border-red-500/50 hover:bg-white/10"
            >
              {/* Quote Icon */}
              <div className="flex h-14 w-14 items-center justify-center bg-gradient-to-br from-red-600 to-orange-500">
                <Quote className="h-6 w-6 text-white" />
              </div>

              {/* Stars */}
              <div className="mt-6 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-orange-500 text-orange-500"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="mt-6 font-body text-base leading-relaxed text-white/70">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="font-sans text-lg font-bold text-white">
                  {testimonial.author}
                </p>
                <p className="font-body text-sm text-white/50">
                  {testimonial.role}
                </p>
                <p className="font-body text-sm text-red-500">
                  {testimonial.company}
                </p>
              </div>

              {/* Number */}
              <span className="absolute -right-4 -top-8 font-sans text-[150px] font-bold text-white/[0.02]">
                0{index + 1}
              </span>

              {/* Hover line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-600 to-orange-500 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Decorative corners */}
      <div className="absolute left-6 top-24 h-20 w-20 border-l-2 border-t-2 border-orange-500/50" />
      <div className="absolute bottom-24 right-6 h-20 w-20 border-b-2 border-r-2 border-red-500/50" />
    </section>
  );
}
