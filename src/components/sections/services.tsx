"use client";

import { Factory, Wrench, Settings, GraduationCap, Truck, HeadphonesIcon } from "lucide-react";
import { services } from "@/lib/images";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Factory,
  Wrench,
  Settings,
  GraduationCap,
  Truck,
  HeadphonesIcon,
};

const extendedServices = [
  ...services,
  {
    title: "Delivery",
    description: "Worldwide shipping and logistics solutions for all machinery orders.",
    icon: "Truck",
  },
  {
    title: "Support",
    description: "Round-the-clock customer support and consultation services.",
    icon: "HeadphonesIcon",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="stacking-section relative overflow-hidden bg-black py-24 lg:py-32"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(220,38,38,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(220,38,38,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-red-600/5 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                <span className="font-body text-sm font-medium uppercase tracking-widest text-white">
                  Our Services
                </span>
              </div>

              <h2 className="mt-8 font-sans text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                Complete <span className="gradient-text">Solutions</span>
              </h2>
            </div>

            <p className="font-body text-lg text-white/60 lg:text-right">
              From manufacturing to maintenance, we offer comprehensive services
              to keep your operations running at peak efficiency.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {extendedServices.map((service, index) => {
            const Icon = iconMap[service.icon] || Factory;
            return (
              <div
                key={service.title}
                className="group relative overflow-hidden border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:border-red-500/50 hover:bg-white/10"
              >
                {/* Number */}
                <span className="absolute -right-4 -top-8 font-sans text-[120px] font-bold text-white/[0.02]">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="relative flex h-16 w-16 items-center justify-center bg-gradient-to-br from-red-600 to-orange-500">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="mt-6 font-sans text-xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-3 font-body text-sm leading-relaxed text-white/60">
                  {service.description}
                </p>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-600 to-orange-500 transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-white/10 pt-12 md:grid-cols-4">
          <div className="text-center">
            <p className="font-sans text-4xl font-bold text-red-500">99%</p>
            <p className="mt-2 font-body text-sm uppercase tracking-wider text-white/50">
              Customer Satisfaction
            </p>
          </div>
          <div className="text-center">
            <p className="font-sans text-4xl font-bold text-red-500">24/7</p>
            <p className="mt-2 font-body text-sm uppercase tracking-wider text-white/50">
              Support Available
            </p>
          </div>
          <div className="text-center">
            <p className="font-sans text-4xl font-bold text-red-500">48h</p>
            <p className="mt-2 font-body text-sm uppercase tracking-wider text-white/50">
              Response Time
            </p>
          </div>
          <div className="text-center">
            <p className="font-sans text-4xl font-bold text-red-500">5Y</p>
            <p className="mt-2 font-body text-sm uppercase tracking-wider text-white/50">
              Warranty Period
            </p>
          </div>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute right-6 top-24 h-20 w-20 border-r-2 border-t-2 border-orange-500/50" />
    </section>
  );
}
