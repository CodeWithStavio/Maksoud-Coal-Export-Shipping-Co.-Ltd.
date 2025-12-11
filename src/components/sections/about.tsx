"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Globe, Shield, Truck, CheckCircle2 } from "lucide-react";
import { images } from "@/lib/images";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const features = [
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Extensive network spanning over 50 countries, ensuring your coal reaches any destination worldwide.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "Rigorous quality control processes guarantee premium grade coal meeting international standards.",
  },
  {
    icon: Truck,
    title: "Reliable Logistics",
    description:
      "End-to-end shipping solutions with real-time tracking and dedicated customer support.",
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description:
      "25+ years of experience in coal trading and international shipping services.",
  },
];

const highlights = [
  "ISO 9001 Certified Operations",
  "24/7 Customer Support",
  "Real-time Shipment Tracking",
  "Competitive Pricing",
];

export function About() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-background py-24 lg:py-32"
    >
      {/* Background Decoration */}
      <div className="absolute right-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Image Column */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src={images.about}
                alt="Industrial operations"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-8 rounded-2xl border border-border bg-card p-6 shadow-2xl md:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                  <Award className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-sans text-3xl font-bold text-foreground">25+</p>
                  <p className="font-body text-sm text-muted-foreground">Years of Excellence</p>
                </div>
              </div>
            </div>

            {/* Decorative Frame */}
            <div className="absolute -left-4 -top-4 h-32 w-32 border-l-2 border-t-2 border-primary" />
          </div>

          {/* Content Column */}
          <div
            className={`flex flex-col justify-center transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 self-start rounded-full bg-primary/10 px-4 py-2">
              <span className="font-body text-xs font-semibold uppercase tracking-wider text-primary">
                About Us
              </span>
            </div>

            <h2 className="mt-6 font-sans text-3xl font-light tracking-tight sm:text-4xl lg:text-5xl">
              A Legacy of
              <br />
              <span className="font-semibold">Excellence</span>
            </h2>

            <p className="mt-6 font-body text-base leading-relaxed text-muted-foreground lg:text-lg">
              Since our establishment, Maksoud Coal Export & Shipping Co. Ltd. has been at the forefront of the global coal trade industry. We combine traditional values with modern logistics to deliver exceptional service to our clients worldwide.
            </p>

            <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground lg:text-lg">
              Our commitment to quality, reliability, and customer satisfaction has earned us a reputation as one of the most trusted names in coal export and international shipping.
            </p>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="font-body text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="mt-10 rounded-xl bg-muted/50 p-6">
              <blockquote className="font-sans text-lg font-medium italic text-foreground">
                &ldquo;Building lasting partnerships through quality products and reliable service.&rdquo;
              </blockquote>
              <p className="mt-4 font-body text-sm text-muted-foreground">
                — Our Company Philosophy
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-24">
          <div className="mb-12 text-center">
            <h3 className="font-sans text-2xl font-semibold lg:text-3xl">
              Why Choose Us
            </h3>
            <p className="mt-3 font-body text-muted-foreground">
              Discover what sets us apart in the industry
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className={`group overflow-hidden rounded-xl border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-xl ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
                    <feature.icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
                  </div>
                  <h4 className="mt-5 font-sans text-lg font-semibold">
                    {feature.title}
                  </h4>
                  <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
