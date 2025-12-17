"use client";

import { MessageCircle } from "lucide-react";
import { companyInfo } from "@/lib/images";

export function WhatsAppButton() {
  const whatsappNumber = companyInfo.whatsapp.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello! I'm interested in your industrial machinery products.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-pulse fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />

      {/* Tooltip */}
      <span className="absolute right-full mr-4 hidden whitespace-nowrap rounded-lg bg-black px-4 py-2 font-body text-sm text-white shadow-lg md:block">
        Chat with us!
      </span>
    </a>
  );
}
