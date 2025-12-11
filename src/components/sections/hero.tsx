"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Play } from "lucide-react";
import { images } from "@/lib/images";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={images.hero}
          alt="Industrial shipping port"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 h-[800px] w-[800px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 h-[600px] w-[600px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            {/* Tagline */}
            <div className="animate-fade-in-down inline-flex items-center gap-2 self-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm lg:self-start">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              <span className="font-body text-xs font-medium uppercase tracking-[0.2em] text-white/90">
                Global Coal Solutions
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="mt-8 animate-fade-in-up font-sans text-4xl font-light leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Powering
              <br />
              <span className="font-semibold gradient-text">Industries</span>
              <br />
              <span className="text-white/90">Worldwide</span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-xl animate-fade-in-up font-body text-base leading-relaxed text-white/70 sm:text-lg lg:text-xl" style={{ animationDelay: "0.2s" }}>
              Premium coal export and international shipping services. Your trusted partner for quality products and reliable logistics solutions across the globe.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col gap-4 animate-fade-in-up sm:flex-row sm:justify-center lg:justify-start" style={{ animationDelay: "0.3s" }}>
              <Button
                asChild
                size="lg"
                className="group h-14 rounded-full px-8 font-body text-sm font-medium uppercase tracking-wider transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                <Link href="#services">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group h-14 rounded-full border-white/30 bg-white/10 px-8 font-body text-sm font-medium uppercase tracking-wider text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20 hover:text-white"
              >
                <Link href="#about" className="flex items-center">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Story
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <p className="mb-4 font-body text-xs uppercase tracking-wider text-white/50">
                Trusted by industry leaders worldwide
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 lg:justify-start">
                {["ISO 9001", "ISO 14001", "OHSAS 18001"].map((cert) => (
                  <div
                    key={cert}
                    className="rounded-md border border-white/20 bg-white/5 px-4 py-2 backdrop-blur-sm"
                  >
                    <span className="font-body text-xs font-medium text-white/70">
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div className="hidden lg:flex lg:items-center lg:justify-end">
            <div className="animate-fade-in-right glass rounded-2xl border border-white/10 p-8 shadow-2xl" style={{ animationDelay: "0.5s" }}>
              <h3 className="mb-6 font-sans text-lg font-medium text-white">
                Our Impact in Numbers
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "25+", label: "Years of Excellence" },
                  { value: "50+", label: "Countries Served" },
                  { value: "1M+", label: "Tons Exported" },
                  { value: "500+", label: "Happy Clients" },
                ].map((stat, index) => (
                  <div
                    key={stat.label}
                    className="group cursor-default rounded-xl bg-white/5 p-5 transition-all hover:bg-white/10"
                  >
                    <p className="font-sans text-3xl font-bold text-primary transition-transform group-hover:scale-110">
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
        </div>

        {/* Mobile Stats */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:hidden">
          {[
            { value: "25+", label: "Years" },
            { value: "50+", label: "Countries" },
            { value: "1M+", label: "Tons" },
            { value: "500+", label: "Clients" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm"
            >
              <p className="font-sans text-2xl font-bold text-primary">
                {stat.value}
              </p>
              <p className="mt-1 font-body text-xs uppercase tracking-wider text-white/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Link
          href="#about"
          className="flex flex-col items-center gap-2 text-white/60 transition-colors hover:text-primary"
        >
          <span className="font-body text-xs uppercase tracking-wider">
            Scroll to explore
          </span>
          <ChevronDown className="h-5 w-5" />
        </Link>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
