"use client";

import Image from "next/image";
import { images } from "@/lib/images";

const galleryLabels = [
  "CNC Workshop",
  "Laser Systems",
  "Assembly Line",
  "Quality Testing",
  "R&D Center",
  "Showroom",
];

export function Gallery() {
  return (
    <section
      id="gallery"
      className="stacking-section relative overflow-hidden bg-zinc-950 py-24 lg:py-32"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-red-600/5 blur-[100px]" />
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-orange-500/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            <span className="font-body text-sm font-medium uppercase tracking-widest text-white">
              Our Facilities
            </span>
          </div>

          <h2 className="mt-8 font-sans text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            World-Class <span className="gradient-text">Infrastructure</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl font-body text-lg text-white/60">
            State-of-the-art manufacturing facilities equipped with the latest
            technology for precision engineering.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.gallery.map((src, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden ${
                index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              <div
                className={`relative ${
                  index === 0
                    ? "aspect-square sm:aspect-auto sm:h-full min-h-[400px]"
                    : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={src}
                  alt={`Facility image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes={
                    index === 0
                      ? "(max-width: 640px) 100vw, 66vw"
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  }
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  {/* Number */}
                  <span className="font-sans text-6xl font-bold text-white/10">
                    0{index + 1}
                  </span>
                  <p className="font-sans text-xl font-bold text-white">
                    {galleryLabels[index]}
                  </p>
                  <p className="mt-1 font-body text-sm text-white/60">
                    Advanced manufacturing facility
                  </p>

                  {/* Hover indicator */}
                  <div className="mt-4 h-1 w-0 bg-gradient-to-r from-red-600 to-orange-500 transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative corners */}
      <div className="absolute bottom-12 left-12 h-20 w-20 border-b-2 border-l-2 border-red-500/30" />
      <div className="absolute right-12 top-12 h-20 w-20 border-r-2 border-t-2 border-orange-500/30" />
    </section>
  );
}
