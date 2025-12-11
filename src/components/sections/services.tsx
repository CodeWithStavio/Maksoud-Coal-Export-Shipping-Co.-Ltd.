"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Anchor, Factory, FileCheck, Package, Ship, Warehouse, ArrowRight } from "lucide-react";
import { images } from "@/lib/images";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const services = [
  {
    icon: Factory,
    title: "Coal Export",
    description:
      "Premium quality coal sourced from certified mines, processed and prepared to meet international specifications.",
    features: ["Thermal Coal", "Metallurgical Coal", "Anthracite"],
    image: images.services.coalExport,
  },
  {
    icon: Ship,
    title: "Maritime Shipping",
    description:
      "Comprehensive ocean freight services with access to major shipping routes and partnerships worldwide.",
    features: ["Bulk Carriers", "Container Ships", "Charter Services"],
    image: images.services.shipping,
  },
  {
    icon: Warehouse,
    title: "Storage & Handling",
    description:
      "State-of-the-art storage facilities ensuring product integrity throughout the supply chain.",
    features: ["Climate Control", "Inventory Management", "Quality Testing"],
    image: images.services.storage,
  },
  {
    icon: Anchor,
    title: "Port Operations",
    description:
      "Strategic partnerships with major ports enabling smooth loading, unloading, and transshipment globally.",
    features: ["Loading Services", "Customs Clearance", "Documentation"],
    image: images.services.portOperations,
  },
  {
    icon: FileCheck,
    title: "Quality Control",
    description:
      "Comprehensive testing and certification ensuring coal meets buyer specifications and standards.",
    features: ["Lab Analysis", "Certification", "Grade Verification"],
    image: images.services.qualityControl,
  },
  {
    icon: Package,
    title: "Logistics Solutions",
    description:
      "End-to-end supply chain management from mine to destination, with real-time tracking.",
    features: ["Route Optimization", "Real-time Tracking", "24/7 Support"],
    image: images.services.logistics,
  },
];

export function Services() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="services"
      ref={ref}
      className="relative overflow-hidden bg-muted/30 py-24 lg:py-32"
    >
      {/* Background Decoration */}
      <div className="absolute left-0 top-1/2 -z-10 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
            <span className="font-body text-xs font-semibold uppercase tracking-wider text-primary">
              What We Offer
            </span>
          </div>
          <h2 className="mt-6 font-sans text-3xl font-light tracking-tight sm:text-4xl lg:text-5xl">
            Our <span className="font-semibold">Services</span>
          </h2>
          <p className="mt-4 font-body text-base text-muted-foreground lg:text-lg">
            Comprehensive coal export and shipping solutions tailored to meet the diverse needs of our global clientele.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`group overflow-hidden rounded-2xl border-0 bg-card shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Icon Badge */}
                <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary shadow-lg">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="font-sans text-xl font-semibold">
                  {service.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground line-clamp-2">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full bg-muted px-3 py-1 font-body text-xs text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Learn More Link */}
                <div className="mt-6">
                  <Link
                    href="#contact"
                    className="group/link inline-flex items-center font-body text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="font-body text-muted-foreground">
            Need a custom solution for your business?
          </p>
          <Button
            asChild
            size="lg"
            className="mt-4 h-12 rounded-full px-8 font-body text-sm font-medium uppercase tracking-wider"
          >
            <Link href="#contact">
              Contact Our Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
