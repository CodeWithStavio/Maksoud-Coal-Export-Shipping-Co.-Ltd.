"use client";

import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Clock, Send, MessageCircle } from "lucide-react";
import { companyInfo } from "@/lib/images";

export function Contact() {
  const whatsappNumber = companyInfo.whatsapp.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <section
      id="contact"
      className="stacking-section relative overflow-hidden bg-zinc-950 py-24 lg:py-32"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(220,38,38,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(220,38,38,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-red-600/5 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            <span className="font-body text-sm font-medium uppercase tracking-widest text-white">
              Contact Us
            </span>
          </div>

          <h2 className="mt-8 font-sans text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Let&apos;s Start a <span className="gradient-text">Conversation</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl font-body text-lg text-white/60">
            Whether you&apos;re looking for industrial machinery or need expert
            consultation, our team is ready to assist you.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {/* Address */}
              <div className="group flex items-start gap-4 border border-white/10 bg-white/5 p-5 transition-all hover:border-red-500/50 hover:bg-white/10">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-red-600">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-wider text-white/50">
                    Visit Us
                  </p>
                  <p className="mt-1 font-body text-sm text-white">
                    {companyInfo.address.street}
                    <br />
                    {companyInfo.address.city}, {companyInfo.address.country}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <a
                href={`tel:${companyInfo.phone}`}
                className="group flex items-start gap-4 border border-white/10 bg-white/5 p-5 transition-all hover:border-red-500/50 hover:bg-white/10"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-red-600">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-wider text-white/50">
                    Call Us
                  </p>
                  <p className="mt-1 font-body text-sm text-white">
                    {companyInfo.phone}
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 border border-white/10 bg-white/5 p-5 transition-all hover:border-green-500/50 hover:bg-white/10"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-green-500">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-wider text-white/50">
                    WhatsApp
                  </p>
                  <p className="mt-1 font-body text-sm text-white">
                    {companyInfo.whatsapp}
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${companyInfo.email}`}
                className="group flex items-start gap-4 border border-white/10 bg-white/5 p-5 transition-all hover:border-orange-500/50 hover:bg-white/10"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-orange-500">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-wider text-white/50">
                    Email Us
                  </p>
                  <p className="mt-1 font-body text-sm text-white">
                    {companyInfo.email}
                  </p>
                </div>
              </a>

              {/* Hours */}
              <div className="group flex items-start gap-4 border border-white/10 bg-white/5 p-5 transition-all hover:border-red-500/50 hover:bg-white/10 sm:col-span-2 lg:col-span-1">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-red-600">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-wider text-white/50">
                    Working Hours
                  </p>
                  <p className="mt-1 font-body text-sm text-white">
                    {companyInfo.workingHours.weekdays}
                    <br />
                    {companyInfo.workingHours.saturday}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 border border-white/10 bg-white/5 p-8 backdrop-blur-sm lg:p-10">
            <h3 className="font-sans text-2xl font-bold text-white">
              Send us a message
            </h3>
            <p className="mt-2 font-body text-sm text-white/50">
              Fill out the form below and we&apos;ll get back to you within 24
              hours.
            </p>

            <form className="mt-8 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block font-body text-sm font-medium text-white/80"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="mt-2 w-full border border-white/10 bg-white/5 px-4 py-3 font-body text-sm text-white outline-none transition-all placeholder:text-white/30 focus:border-red-500"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block font-body text-sm font-medium text-white/80"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="mt-2 w-full border border-white/10 bg-white/5 px-4 py-3 font-body text-sm text-white outline-none transition-all placeholder:text-white/30 focus:border-red-500"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-body text-sm font-medium text-white/80"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-2 w-full border border-white/10 bg-white/5 px-4 py-3 font-body text-sm text-white outline-none transition-all placeholder:text-white/30 focus:border-red-500"
                  placeholder="john@company.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block font-body text-sm font-medium text-white/80"
                >
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="mt-2 w-full border border-white/10 bg-white/5 px-4 py-3 font-body text-sm text-white outline-none transition-all placeholder:text-white/30 focus:border-red-500"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label
                  htmlFor="product"
                  className="block font-body text-sm font-medium text-white/80"
                >
                  Product Interested In
                </label>
                <select
                  id="product"
                  name="product"
                  className="mt-2 w-full border border-white/10 bg-white/5 px-4 py-3 font-body text-sm text-white outline-none transition-all focus:border-red-500"
                >
                  <option value="" className="bg-zinc-900">
                    Select a product
                  </option>
                  <option value="cnc" className="bg-zinc-900">
                    CNC Machines
                  </option>
                  <option value="laser" className="bg-zinc-900">
                    Laser Cutting
                  </option>
                  <option value="robots" className="bg-zinc-900">
                    Industrial Robots
                  </option>
                  <option value="welding" className="bg-zinc-900">
                    Welding Equipment
                  </option>
                  <option value="other" className="bg-zinc-900">
                    Other
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-body text-sm font-medium text-white/80"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-2 w-full resize-none border border-white/10 bg-white/5 px-4 py-3 font-body text-sm text-white outline-none transition-all placeholder:text-white/30 focus:border-red-500"
                  placeholder="Tell us about your requirements..."
                  required
                />
              </div>

              <Button
                type="submit"
                className="group w-full h-14 rounded-none bg-red-600 font-body text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-red-700"
              >
                <Send className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Decorative corners */}
      <div className="absolute left-6 top-24 h-20 w-20 border-l-2 border-t-2 border-red-500/50" />
      <div className="absolute bottom-24 right-6 h-20 w-20 border-b-2 border-r-2 border-orange-500/50" />
    </section>
  );
}
