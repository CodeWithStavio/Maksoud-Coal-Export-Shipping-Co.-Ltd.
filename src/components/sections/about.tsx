"use client";

import Image from "next/image";
import { Award, CheckCircle2, Users, Globe, Factory } from "lucide-react";
import { images, companyInfo, stats } from "@/lib/images";

const features = [
  "State-of-the-art CNC machines",
  "ISO 9001:2015 certified",
  "Global spare parts network",
  "24/7 technical support",
  "Training & certification",
  "Lifetime service warranty",
];

const highlights = [
  {
    icon: Users,
    value: "500+",
    label: "Expert Engineers",
  },
  {
    icon: Globe,
    value: "50+",
    label: "Countries Served",
  },
  {
    icon: Factory,
    value: "1000+",
    label: "Machines Installed",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="stacking-section relative overflow-hidden bg-black py-24 lg:py-32"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-red-950/20" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Image Column */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={images.about}
                alt="Industrial operations"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Red border accent */}
              <div className="absolute -bottom-4 -right-4 h-full w-full border-4 border-red-600" />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -left-8 rounded-none border-l-4 border-red-500 bg-black/90 p-6 shadow-2xl backdrop-blur-sm md:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center bg-red-600">
                  <Award className="h-7 w-7 text-white" />
                </div>
                <div>
                  <p className="font-sans text-4xl font-bold text-white">25+</p>
                  <p className="font-body text-sm uppercase tracking-wider text-white/60">
                    Years Experience
                  </p>
                </div>
              </div>
            </div>

            {/* Corner decorations */}
            <div className="absolute -left-4 -top-4 h-20 w-20 border-l-2 border-t-2 border-orange-500" />
          </div>

          {/* Content Column */}
          <div className="flex flex-col justify-center">
            {/* Tag */}
            <div className="inline-flex items-center gap-3 self-start rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              <span className="font-body text-sm font-medium uppercase tracking-widest text-white">
                About Us
              </span>
            </div>

            <h2 className="mt-8 font-sans text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Building the Future of{" "}
              <span className="gradient-text">Industry</span>
            </h2>

            <p className="mt-6 font-body text-lg leading-relaxed text-white/70">
              {companyInfo.description}
            </p>

            <p className="mt-4 font-body text-lg leading-relaxed text-white/70">
              With over 25 years of experience, we have established ourselves as
              industry leaders in manufacturing precision machinery and
              automated solutions for businesses worldwide.
            </p>

            {/* Features Grid */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {features.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-red-500" />
                  <span className="font-body text-sm text-white/80">{item}</span>
                </div>
              ))}
            </div>

            {/* Highlights Row */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {highlights.map((item) => (
                <div key={item.label} className="text-center">
                  <item.icon className="mx-auto h-8 w-8 text-orange-500" />
                  <p className="mt-2 font-sans text-2xl font-bold text-white">
                    {item.value}
                  </p>
                  <p className="font-body text-xs uppercase tracking-wider text-white/50">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative corner */}
      <div className="absolute bottom-12 right-12 h-32 w-32 border-b-2 border-r-2 border-red-500/30" />
    </section>
  );
}
