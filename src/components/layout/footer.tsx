import Link from "next/link";
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook, Instagram, Youtube, Clock, ArrowRight } from "lucide-react";
import { companyInfo, navItems } from "@/lib/images";

const footerLinks = {
  products: [
    { name: "CNC Machines", href: "#products" },
    { name: "Laser Cutting", href: "#products" },
    { name: "Industrial Robots", href: "#products" },
    { name: "Welding Equipment", href: "#products" },
  ],
  services: [
    { name: "Manufacturing", href: "#services" },
    { name: "Installation", href: "#services" },
    { name: "Maintenance", href: "#services" },
    { name: "Training", href: "#services" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: companyInfo.social.facebook, label: "Facebook" },
  { icon: Instagram, href: companyInfo.social.instagram, label: "Instagram" },
  { icon: Linkedin, href: companyInfo.social.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: companyInfo.social.twitter, label: "Twitter" },
  { icon: Youtube, href: companyInfo.social.youtube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="stacking-section relative overflow-hidden bg-zinc-950">
      {/* Top CTA Section */}
      <div className="relative border-b border-white/10 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-orange-500/10" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div>
              <h3 className="font-sans text-3xl font-bold text-white md:text-4xl">
                Ready to Get Started?
              </h3>
              <p className="mt-2 font-body text-white/60">
                Contact us today for a free consultation and quote.
              </p>
            </div>
            <Link
              href="#contact"
              className="group flex items-center gap-3 bg-red-600 px-8 py-4 font-body text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-red-700"
            >
              Request Quote
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="#home" className="inline-block">
              <h3 className="font-sans text-2xl font-bold">
                <span className="text-red-500">DIAMOND</span>
                <span className="text-white"> MACHINES</span>
              </h3>
            </Link>
            <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-white/60">
              {companyInfo.description}
            </p>

            {/* Social Links */}
            <div className="mt-8 flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center border border-white/10 bg-white/5 text-white/60 transition-all hover:border-red-500 hover:bg-red-500 hover:text-white"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-white">
              Products
            </h4>
            <ul className="mt-6 space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/60 transition-colors hover:text-red-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="mt-6 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/60 transition-colors hover:text-red-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" />
                <span className="font-body text-sm text-white/60">
                  {companyInfo.address.street}
                  <br />
                  {companyInfo.address.city}, {companyInfo.address.country}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-center gap-3 text-white/60 transition-colors hover:text-white"
                >
                  <Phone className="h-5 w-5 flex-shrink-0 text-red-500" />
                  <span className="font-body text-sm">{companyInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-3 text-white/60 transition-colors hover:text-white"
                >
                  <Mail className="h-5 w-5 flex-shrink-0 text-red-500" />
                  <span className="font-body text-sm">{companyInfo.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" />
                <span className="font-body text-sm text-white/60">
                  {companyInfo.workingHours.weekdays}
                  <br />
                  {companyInfo.workingHours.saturday}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="font-body text-sm text-white/40">
              © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="#"
                className="font-body text-sm text-white/40 transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="font-body text-sm text-white/40 transition-colors hover:text-white"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute left-6 top-20 h-20 w-20 border-l-2 border-t-2 border-red-500/30" />
      <div className="absolute right-6 top-20 h-20 w-20 border-r-2 border-t-2 border-orange-500/30" />
    </footer>
  );
}
