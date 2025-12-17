"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { images } from "@/lib/images";

export function Products() {
  return (
    <section
      id="products"
      className="stacking-section relative overflow-hidden bg-zinc-950 py-24 lg:py-32"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.1),transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            <span className="font-body text-sm font-medium uppercase tracking-widest text-white">
              Our Products
            </span>
          </div>

          <h2 className="mt-8 font-sans text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Industrial <span className="gradient-text">Machinery</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl font-body text-lg text-white/60">
            Cutting-edge industrial equipment designed for maximum efficiency and precision.
            Each machine is built to exceed international quality standards.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {images.products.map((product, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-black"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-red-600/0 transition-colors duration-500 group-hover:bg-red-600/20" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                {/* Number */}
                <span className="font-sans text-5xl font-bold text-red-500/30">
                  0{index + 1}
                </span>

                <h3 className="mt-2 font-sans text-xl font-bold text-white">
                  {product.title}
                </h3>

                <p className="mt-2 font-body text-sm text-white/60 line-clamp-2">
                  {product.description}
                </p>

                {/* Learn More */}
                <Link
                  href="#contact"
                  className="mt-4 inline-flex items-center font-body text-sm font-medium text-red-500 transition-colors hover:text-orange-500"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Border Accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-600 to-orange-500 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="#contact"
            className="group inline-flex items-center gap-4 rounded-none border-2 border-white/20 bg-transparent px-10 py-4 font-body text-sm font-semibold uppercase tracking-wider text-white transition-all hover:border-red-500 hover:bg-red-500"
          >
            View All Products
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute left-12 top-12 h-32 w-32 border-l-2 border-t-2 border-orange-500/30" />
      <div className="absolute bottom-12 right-12 h-32 w-32 border-b-2 border-r-2 border-red-500/30" />
    </section>
  );
}
