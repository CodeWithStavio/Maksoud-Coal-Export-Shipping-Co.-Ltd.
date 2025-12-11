import { Card, CardContent } from "@/components/ui/card";
import { Anchor, Factory, FileCheck, Package, Ship, Warehouse } from "lucide-react";

const services = [
  {
    icon: Factory,
    title: "Coal Export",
    description:
      "Premium quality coal sourced from certified mines, processed and prepared to meet international specifications and standards.",
    features: ["Thermal Coal", "Metallurgical Coal", "Anthracite"],
  },
  {
    icon: Ship,
    title: "Maritime Shipping",
    description:
      "Comprehensive ocean freight services with access to major shipping routes and partnerships with leading carriers worldwide.",
    features: ["Bulk Carriers", "Container Ships", "Charter Services"],
  },
  {
    icon: Warehouse,
    title: "Storage & Handling",
    description:
      "State-of-the-art storage facilities and efficient handling equipment ensuring product integrity throughout the supply chain.",
    features: ["Climate Control", "Inventory Management", "Quality Testing"],
  },
  {
    icon: Anchor,
    title: "Port Operations",
    description:
      "Strategic partnerships with major ports enabling smooth loading, unloading, and transshipment operations globally.",
    features: ["Loading Services", "Customs Clearance", "Documentation"],
  },
  {
    icon: FileCheck,
    title: "Quality Control",
    description:
      "Comprehensive testing and certification services ensuring coal meets buyer specifications and international quality standards.",
    features: ["Lab Analysis", "Certification", "Grade Verification"],
  },
  {
    icon: Package,
    title: "Logistics Solutions",
    description:
      "End-to-end supply chain management from mine to destination, with real-time tracking and dedicated support.",
    features: ["Route Optimization", "Real-time Tracking", "24/7 Support"],
  },
];

export function Services() {
  return (
    <section id="services" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
            What We Offer
          </p>
          <h2 className="mt-4 font-sans text-3xl font-light tracking-tight sm:text-4xl lg:text-5xl">
            Our <span className="font-medium">Services</span>
          </h2>
          <p className="mt-6 font-body text-base leading-relaxed text-muted-foreground">
            Comprehensive coal export and shipping solutions tailored to meet the diverse needs of our global clientele.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group rounded-none border-border bg-card transition-all duration-300 hover:border-primary hover:shadow-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex h-14 w-14 items-center justify-center bg-primary/10 transition-colors duration-300 group-hover:bg-primary">
                  <service.icon className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                </div>
                <h3 className="mt-6 font-sans text-xl font-medium">
                  {service.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center font-body text-sm text-foreground"
                    >
                      <span className="mr-3 h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
