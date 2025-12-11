import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ],
  services: [
    { name: "Coal Export", href: "#services" },
    { name: "International Shipping", href: "#services" },
    { name: "Logistics Solutions", href: "#services" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-sans text-xl font-semibold">
              <span className="text-primary">MAKSOUD</span> COAL
            </h3>
            <p className="font-body text-sm leading-relaxed text-muted-foreground">
              Premium coal export and international shipping services. Your trusted partner for quality coal products and reliable logistics solutions worldwide.
            </p>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-body text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Maksoud Coal Export & Shipping Co. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="font-body text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="font-body text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
