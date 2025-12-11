import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted" />
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B4513' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
        <div className="stagger-children flex flex-col items-center text-center">
          {/* Tagline */}
          <p className="font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Global Coal Solutions
          </p>

          {/* Main Heading */}
          <h1 className="mt-8 font-sans text-4xl font-light leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Powering Industries
            <br />
            <span className="font-medium">Worldwide</span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Premium coal export and international shipping services. Your trusted partner for quality coal products and reliable logistics solutions across the globe.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="group h-14 rounded-none px-8 font-body text-sm uppercase tracking-wider"
            >
              <Link href="#services">
                Our Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-14 rounded-none px-8 font-body text-sm uppercase tracking-wider"
            >
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 gap-8 border-t border-border pt-12 sm:grid-cols-4 sm:gap-16">
            {[
              { value: "25+", label: "Years Experience" },
              { value: "50+", label: "Countries Served" },
              { value: "1M+", label: "Tons Exported" },
              { value: "500+", label: "Satisfied Clients" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-sans text-3xl font-semibold text-primary sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 font-body text-xs uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="font-body text-xs uppercase tracking-wider text-muted-foreground">
            Scroll
          </span>
          <div className="h-12 w-px bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  );
}
