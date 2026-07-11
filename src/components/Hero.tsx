/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Phone, MessageSquare, MapPin, ChevronDown } from "lucide-react";
import { CONTACT_INFO } from "../types";
import heroImage from "../assets/images/hero_luxury_car_1783580755950.jpg";

export default function Hero() {
  const handleScrollToNext = () => {
    const nextSection = document.querySelector("#about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-brand"
    >
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="MRT Dayıoğlu Auto Luxury Showroom"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 scale-down-subtle"
          referrerPolicy="no-referrer"
        />

        {/* Cinematic Premium Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-brand via-bg-brand/60 to-bg-brand/70" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-bg-brand/30 to-bg-brand/90" />
      </div>

      {/* Main Content Box */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 text-center flex flex-col items-center">
        {/* Subtle Accent Logo Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 flex items-center gap-2 border border-gold-brand/30 bg-gold-brand/5 px-4 py-1.5 rounded-[2px]"
        >
          <span className="w-1.5 h-1.5 bg-gold-brand rounded-full animate-ping" />
          <span className="text-[10px] tracking-[0.3em] font-semibold text-gold-brand uppercase font-display">
            PREMIUM SELECTION
          </span>
        </motion.div>

        {/* Brand Display Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-[0.2em] text-text-white uppercase leading-tight mb-4"
        >
          MRT DAYIOĞLU
          <span className="block mt-2 text-2xl sm:text-4xl md:text-5xl font-light tracking-[0.4em] text-gold-brand">
            AUTO
          </span>
        </motion.h1>

        {/* Elegant Premium Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl font-sans text-text-muted max-w-2xl font-light tracking-wide leading-relaxed mb-12"
        >
          Seçkin otomotiv dünyasında güven, prestij ve kurumsal mükemmelliğin
          buluştuğu adres.
        </motion.p>

        {/* 3 Main Quick Contact Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl mb-16"
          id="hero-cta-group"
        >
          {/* Call Button */}
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="flex items-center justify-center gap-3 bg-gold-brand hover:bg-gold-hover text-bg-brand text-xs sm:text-sm font-semibold tracking-wider uppercase py-4 px-6 rounded-[2px] transition-all duration-300 shadow-xl shadow-gold-brand/10 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-brand/80"
            id="hero-call-btn"
          >
            <Phone className="w-4 h-4 flex-shrink-0" />
            <span>Hemen Ara</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-transparent hover:bg-white/5 text-text-white border border-border-brand hover:border-gold-brand hover:text-gold-brand text-xs sm:text-sm font-semibold tracking-wider uppercase py-4 px-6 rounded-[2px] transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-brand/80"
            id="hero-whatsapp-btn"
          >
            <MessageSquare className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            <span>WhatsApp</span>
          </a>

          {/* Location / Directions Button */}
          <a
            href={CONTACT_INFO.mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-transparent hover:bg-white/5 text-text-white border border-border-brand hover:border-gold-brand hover:text-gold-brand text-xs sm:text-sm font-semibold tracking-wider uppercase py-4 px-6 rounded-[2px] transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-brand/80"
            id="hero-location-btn"
          >
            <MapPin className="w-4 h-4 text-red-500 flex-shrink-0" />
            <span>Konuma Git</span>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          onClick={handleScrollToNext}
          className="absolute bottom-8 flex flex-col items-center gap-2 text-text-muted hover:text-gold-brand transition-colors duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-brand/80 p-2 rounded-[2px]"
          aria-label="Aşağı Kaydır"
        >
          <span className="text-xs uppercase tracking-[0.25em] font-light">
            KEŞFET
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
}