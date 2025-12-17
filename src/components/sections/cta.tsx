"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Mail, MessageCircle } from "lucide-react";
import { images, companyInfo } from "@/lib/images";

export function CTA() {
  const whatsappNumber = companyInfo.whatsapp.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <section className="stacking-section relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={images.ctaBg}
          alt="Background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/90 to-black/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Content */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-3 self-start rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              <span className="font-body text-sm font-medium uppercase tracking-widest text-white">
                Get in Touch
              </span>
            </div>

            <h2 className="mt-8 font-sans text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Ready to <span className="gradient-text">Transform</span> Your
              Production?
            </h2>

            <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-white/60">
              Contact us today for a free consultation. Our experts will help
              you find the perfect machinery solutions for your business needs.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-3 bg-red-600 px-8 py-4 font-body text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-red-700"
              >
                Request Quote
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#products"
                className="inline-flex items-center gap-3 border-2 border-white/30 bg-transparent px-8 py-4 font-body text-sm font-semibold uppercase tracking-wider text-white transition-all hover:border-white hover:bg-white/10"
              >
                View Products
              </Link>
            </div>
          </div>

          {/* Contact Cards */}
          <div className="flex flex-col justify-center gap-6">
            {/* Phone Card */}
            <a
              href={`tel:${companyInfo.phone}`}
              className="group flex items-center gap-6 border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-red-500/50 hover:bg-white/10"
            >
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center bg-gradient-to-br from-red-600 to-red-700">
                <Phone className="h-7 w-7 text-white" />
              </div>
              <div>
                <p className="font-body text-sm uppercase tracking-wider text-white/50">
                  Call Us Directly
                </p>
                <p className="mt-1 font-sans text-2xl font-bold text-white">
                  {companyInfo.phone}
                </p>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-6 border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-green-500/50 hover:bg-white/10"
            >
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center bg-gradient-to-br from-green-500 to-green-600">
                <MessageCircle className="h-7 w-7 text-white" />
              </div>
              <div>
                <p className="font-body text-sm uppercase tracking-wider text-white/50">
                  WhatsApp Chat
                </p>
                <p className="mt-1 font-sans text-2xl font-bold text-white">
                  {companyInfo.whatsapp}
                </p>
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${companyInfo.email}`}
              className="group flex items-center gap-6 border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-orange-500/50 hover:bg-white/10"
            >
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center bg-gradient-to-br from-orange-500 to-orange-600">
                <Mail className="h-7 w-7 text-white" />
              </div>
              <div>
                <p className="font-body text-sm uppercase tracking-wider text-white/50">
                  Email Us
                </p>
                <p className="mt-1 font-sans text-xl font-bold text-white">
                  {companyInfo.email}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative corners */}
      <div className="absolute left-6 top-24 h-20 w-20 border-l-2 border-t-2 border-red-500/50" />
      <div className="absolute bottom-24 right-6 h-20 w-20 border-b-2 border-r-2 border-orange-500/50" />
    </section>
  );
}
