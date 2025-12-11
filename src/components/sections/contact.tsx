"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const contactInfo = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: "123 Maritime District\nInternational Trade Center\nDubai, UAE",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+971 4 123 4567",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@maksoudcoal.com",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Fri: 9AM - 6PM\nSat: 10AM - 2PM",
  },
];

export function Contact() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden bg-background py-24 lg:py-32"
    >
      {/* Background Decoration */}
      <div className="absolute right-0 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
            <span className="font-body text-xs font-semibold uppercase tracking-wider text-primary">
              Get In Touch
            </span>
          </div>
          <h2 className="mt-6 font-sans text-3xl font-light tracking-tight sm:text-4xl lg:text-5xl">
            Let&apos;s Start a <span className="font-semibold">Conversation</span>
          </h2>
          <p className="mt-4 font-body text-base text-muted-foreground lg:text-lg">
            Whether you&apos;re looking to source premium coal products or need reliable shipping solutions, our team is ready to assist you.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Contact Info */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {contactInfo.map((item, index) => (
                <div
                  key={item.label}
                  className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
                    <item.icon className="h-5 w-5 text-primary transition-colors group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="mt-1 font-body text-sm whitespace-pre-line text-foreground">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card
            className={`lg:col-span-3 overflow-hidden rounded-2xl border-0 shadow-xl transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <CardContent className="p-8 lg:p-10">
              <h3 className="font-sans text-2xl font-semibold">Send us a message</h3>
              <p className="mt-2 font-body text-sm text-muted-foreground">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>

              <form className="mt-8 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="group">
                    <label
                      htmlFor="firstName"
                      className="block font-body text-sm font-medium text-foreground"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="group">
                    <label
                      htmlFor="lastName"
                      className="block font-body text-sm font-medium text-foreground"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-body text-sm font-medium text-foreground"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="john@company.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block font-body text-sm font-medium text-foreground"
                  >
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block font-body text-sm font-medium text-foreground"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Select a service</option>
                    <option value="coal-export">Coal Export</option>
                    <option value="maritime-shipping">Maritime Shipping</option>
                    <option value="storage">Storage & Handling</option>
                    <option value="port-operations">Port Operations</option>
                    <option value="quality-control">Quality Control</option>
                    <option value="logistics">Logistics Solutions</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-body text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-2 w-full resize-none rounded-lg border border-border bg-background px-4 py-3 font-body text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Tell us about your requirements..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="group w-full h-14 rounded-xl font-body text-sm font-medium uppercase tracking-wider transition-all hover:shadow-lg hover:shadow-primary/25"
                >
                  <Send className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  Send Message
                </Button>

                <p className="text-center font-body text-xs text-muted-foreground">
                  By submitting this form, you agree to our{" "}
                  <a href="#" className="text-primary hover:underline">
                    Privacy Policy
                  </a>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
