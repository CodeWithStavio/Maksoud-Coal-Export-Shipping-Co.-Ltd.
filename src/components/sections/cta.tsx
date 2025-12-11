"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/images";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ArrowRight, Phone, Mail } from "lucide-react";

export function CTA() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={images.ctaBg}
          alt="Background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/70" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div
            className={`flex flex-col justify-center transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="font-sans text-3xl font-light tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Partner
              <br />
              <span className="font-semibold">With Us?</span>
            </h2>
            <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-white/70 lg:text-lg">
              Let&apos;s discuss how we can help power your operations with premium coal products and reliable shipping solutions.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="group h-14 rounded-full px-8 font-body text-sm font-medium uppercase tracking-wider transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                <Link href="#contact">
                  Get a Quote
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-14 rounded-full border-white/30 bg-white/10 px-8 font-body text-sm font-medium uppercase tracking-wider text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20 hover:text-white"
              >
                <Link href="#services">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Contact Cards */}
          <div
            className={`flex flex-col justify-center gap-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-white/10">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 transition-colors group-hover:bg-primary">
                  <Phone className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
                </div>
                <div>
                  <p className="font-body text-sm text-white/60">Call us directly</p>
                  <p className="mt-1 font-sans text-xl font-semibold text-white">
                    +971 4 123 4567
                  </p>
                </div>
              </div>
            </div>

            <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-white/10">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 transition-colors group-hover:bg-primary">
                  <Mail className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
                </div>
                <div>
                  <p className="font-body text-sm text-white/60">Email us anytime</p>
                  <p className="mt-1 font-sans text-xl font-semibold text-white">
                    info@maksoudcoal.com
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-4 font-body text-sm text-white/50">
              Available 24/7 for urgent inquiries. Response time within 2 hours during business hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
