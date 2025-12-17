"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems, companyInfo } from "@/lib/images";

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            className="group font-sans text-xl font-bold tracking-wide transition-all hover:opacity-80"
          >
            <span className="text-red-500">DIAMOND</span>
            <span className="text-white"> MACHINES</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 font-body text-sm font-medium uppercase tracking-wider text-white/80 transition-colors hover:text-white after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-red-500 after:transition-all hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden items-center gap-4 md:flex">
            <a
              href={`tel:${companyInfo.phone}`}
              className="flex items-center gap-2 font-body text-sm text-white/80 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4 text-red-500" />
              <span className="hidden lg:inline">{companyInfo.phone}</span>
            </a>
            <Button
              asChild
              className="h-10 rounded-none bg-red-600 px-6 font-body text-sm font-semibold uppercase tracking-wider text-white hover:bg-red-700"
            >
              <Link href="#contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="h-10 w-10 text-white hover:bg-white/10 md:hidden"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="animate-fade-in border-t border-white/10 bg-black/95 backdrop-blur-md md:hidden">
            <div className="flex flex-col gap-1 py-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 font-body text-sm font-medium uppercase tracking-wider text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4 border-t border-white/10 pt-4">
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-center gap-3 px-4 py-3 font-body text-sm text-white/80"
                >
                  <Phone className="h-4 w-4 text-red-500" />
                  {companyInfo.phone}
                </a>
                <div className="px-4 pt-2">
                  <Button
                    asChild
                    className="w-full rounded-none bg-red-600 font-body text-sm font-semibold uppercase tracking-wider text-white hover:bg-red-700"
                  >
                    <Link
                      href="#contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Get Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
