"use client";

import Image from "next/image";
import { images } from "@/lib/images";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function Gallery() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-muted/30 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
            <span className="font-body text-xs font-semibold uppercase tracking-wider text-primary">
              Our Operations
            </span>
          </div>
          <h2 className="mt-6 font-sans text-3xl font-light tracking-tight sm:text-4xl lg:text-5xl">
            Global <span className="font-semibold">Presence</span>
          </h2>
          <p className="mt-4 font-body text-base text-muted-foreground lg:text-lg">
            A glimpse into our worldwide operations and state-of-the-art facilities
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.gallery.map((src, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl transition-all duration-700 ${
                index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
            >
              <div
                className={`relative ${
                  index === 0 ? "aspect-square sm:aspect-auto sm:h-full" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={src}
                  alt={`Operations image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes={
                    index === 0
                      ? "(max-width: 640px) 100vw, 66vw"
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  }
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Content */}
                <div className="absolute inset-0 flex items-end p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div>
                    <p className="font-sans text-lg font-semibold text-white">
                      {
                        [
                          "Port Operations",
                          "Maritime Fleet",
                          "Logistics Hub",
                          "Quality Control",
                          "Storage Facilities",
                          "Global Network",
                        ][index]
                      }
                    </p>
                    <p className="mt-1 font-body text-sm text-white/70">
                      State-of-the-art facilities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
