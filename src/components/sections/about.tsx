import { Card, CardContent } from "@/components/ui/card";
import { Award, Globe, Shield, Truck } from "lucide-react";

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

export function About() {
  return (
    <section id="about" className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Content */}
          <div className="flex flex-col justify-center">
            <p className="font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
              About Us
            </p>
            <h2 className="mt-4 font-sans text-3xl font-light tracking-tight sm:text-4xl lg:text-5xl">
              A Legacy of
              <br />
              <span className="font-medium">Excellence</span>
            </h2>
            <p className="mt-8 font-body text-base leading-relaxed text-muted-foreground">
              Since our establishment, Maksoud Coal Export & Shipping Co. Ltd. has been at the forefront of the global coal trade industry. We combine traditional values with modern logistics to deliver exceptional service to our clients worldwide.
            </p>
            <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground">
              Our commitment to quality, reliability, and customer satisfaction has earned us a reputation as one of the most trusted names in coal export and international shipping.
            </p>

            {/* Highlight Box */}
            <div className="mt-10 border-l-2 border-primary pl-6">
              <blockquote className="font-body text-lg italic text-foreground">
                &ldquo;Building lasting partnerships through quality products and reliable service.&rdquo;
              </blockquote>
              <p className="mt-3 font-body text-sm text-muted-foreground">
                — Our Company Philosophy
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="group rounded-none border-border bg-background transition-all duration-300 hover:border-primary hover:shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <feature.icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="mt-4 font-sans text-lg font-medium">
                    {feature.title}
                  </h3>
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
