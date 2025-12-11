import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "123 Maritime District\nInternational Trade Center\nDubai, UAE",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+971 4 123 4567",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@maksoudcoal.com",
  },
];

export function Contact() {
  return (
    <section id="contact" className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Content */}
          <div>
            <p className="font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Get In Touch
            </p>
            <h2 className="mt-4 font-sans text-3xl font-light tracking-tight sm:text-4xl lg:text-5xl">
              Let&apos;s Start a
              <br />
              <span className="font-medium">Conversation</span>
            </h2>
            <p className="mt-8 font-body text-base leading-relaxed text-muted-foreground">
              Whether you&apos;re looking to source premium coal products or need reliable shipping solutions, our team is ready to assist you. Reach out to discuss your requirements.
            </p>

            {/* Contact Info Cards */}
            <div className="mt-10 space-y-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 rounded-none border border-border bg-background p-4 transition-colors hover:border-primary"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-xs uppercase tracking-wider text-muted-foreground">
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
          <Card className="rounded-none border-border bg-background">
            <CardContent className="p-8">
              <h3 className="font-sans text-xl font-medium">Send us a message</h3>
              <p className="mt-2 font-body text-sm text-muted-foreground">
                Fill out the form below and we&apos;ll get back to you shortly.
              </p>

              <form className="mt-8 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="font-body text-xs uppercase tracking-wider text-muted-foreground"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="mt-2 w-full border-b border-border bg-transparent py-2 font-body text-sm outline-none transition-colors focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="font-body text-xs uppercase tracking-wider text-muted-foreground"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="mt-2 w-full border-b border-border bg-transparent py-2 font-body text-sm outline-none transition-colors focus:border-primary"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="font-body text-xs uppercase tracking-wider text-muted-foreground"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-2 w-full border-b border-border bg-transparent py-2 font-body text-sm outline-none transition-colors focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="font-body text-xs uppercase tracking-wider text-muted-foreground"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="mt-2 w-full border-b border-border bg-transparent py-2 font-body text-sm outline-none transition-colors focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="font-body text-xs uppercase tracking-wider text-muted-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-2 w-full resize-none border-b border-border bg-transparent py-2 font-body text-sm outline-none transition-colors focus:border-primary"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-none font-body text-sm uppercase tracking-wider"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
