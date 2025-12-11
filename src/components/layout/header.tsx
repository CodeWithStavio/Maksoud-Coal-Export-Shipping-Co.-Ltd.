"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

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
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            className={`font-sans text-lg font-semibold tracking-wide transition-colors hover:opacity-80 ${
              isScrolled ? "" : "text-white"
            }`}
          >
            <span className="text-primary">MAKSOUD</span>
            <span className={`hidden sm:inline ${isScrolled ? "" : "text-white"}`}> COAL</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-body text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className={`h-9 w-9 transition-colors ${
                isScrolled
                  ? "hover:bg-muted"
                  : "text-white hover:bg-white/10 hover:text-white"
              }`}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {mounted && (
                <>
                  <Sun className={`h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 ${!isScrolled ? "text-white" : ""}`} />
                  <Moon className={`absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 ${!isScrolled ? "text-white" : ""}`} />
                </>
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Theme Toggle Mobile */}
            <Button
              variant="ghost"
              size="icon"
              className={`h-9 w-9 transition-colors ${
                isScrolled
                  ? "hover:bg-muted"
                  : "text-white hover:bg-white/10 hover:text-white"
              }`}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {mounted && (
                <>
                  <Sun className={`h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 ${!isScrolled ? "text-white" : ""}`} />
                  <Moon className={`absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 ${!isScrolled ? "text-white" : ""}`} />
                </>
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`h-9 w-9 transition-colors ${
                isScrolled
                  ? "hover:bg-muted"
                  : "text-white hover:bg-white/10 hover:text-white"
              }`}
            >
              {isMobileMenuOpen ? (
                <X className={`h-5 w-5 ${!isScrolled ? "text-white" : ""}`} />
              ) : (
                <Menu className={`h-5 w-5 ${!isScrolled ? "text-white" : ""}`} />
              )}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="animate-fade-in border-t border-white/20 bg-black/80 backdrop-blur-md md:hidden">
            <div className="flex flex-col gap-4 py-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-body text-sm font-medium tracking-wide uppercase text-white transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
