/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, Phone, ArrowUp } from "lucide-react";
import { CONTACT_INFO } from "../types";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="app-footer" className="bg-bg-brand border-t border-border-brand py-12 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Upper footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-border-brand">
          
          {/* Logo & Slogan Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl font-bold tracking-[0.25em] text-text-white">
                MRT DAYIOĞLU
              </span>
              <span className="text-xs tracking-[0.4em] text-gold-brand font-medium uppercase mt-0.5">
                AUTO
              </span>
            </div>
            <p className="text-xs sm:text-sm text-text-muted font-light leading-relaxed max-w-sm">
              Premium ve lüks otomobil deneyimini dürüst ticaret anlayışı ve üstün hizmet kalitesiyle taçlandırıyoruz.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-text-white uppercase font-display">
              Hızlı Gezinti
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-text-muted">
              <a href="#home" className="hover:text-gold-brand transition-colors duration-300 focus:outline-none focus-visible:underline rounded-[2px] p-0.5">Ana Sayfa</a>
              <a href="#about" className="hover:text-gold-brand transition-colors duration-300 focus:outline-none focus-visible:underline rounded-[2px] p-0.5">Hakkımızda</a>
              <a href="#why-us" className="hover:text-gold-brand transition-colors duration-300 focus:outline-none focus-visible:underline rounded-[2px] p-0.5">Neden Biz?</a>
              <a href="#location" className="hover:text-gold-brand transition-colors duration-300 focus:outline-none focus-visible:underline rounded-[2px] p-0.5">Konum</a>
              <a href="#contact" className="hover:text-gold-brand transition-colors duration-300 font-medium focus:outline-none focus-visible:underline rounded-[2px] p-0.5">İletişim</a>
            </div>
          </div>

          {/* Social and Fast Call Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-text-white uppercase font-display">
              Hızlı Bağlantılar
            </h4>
            <div className="space-y-3">
              {/* Instagram link */}
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs text-text-muted hover:text-gold-brand transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-gold-brand/80 rounded-[2px] p-1"
              >
                <Instagram className="w-4 h-4 text-gold-brand flex-shrink-0" />
                <span>@{CONTACT_INFO.instagram}</span>
              </a>

              {/* Phone link */}
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center gap-2.5 text-xs text-text-muted hover:text-gold-brand transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-gold-brand/80 rounded-[2px] p-1"
              >
                <Phone className="w-4 h-4 text-gold-brand flex-shrink-0" />
                <span>{CONTACT_INFO.phoneFormatted}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Lower footer grid */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left space-y-1">
            <p className="text-[11px] sm:text-xs text-text-muted font-light">
              &copy; {currentYear} <strong>MRT DAYIOĞLU AUTO</strong>. Tüm Hakları Saklıdır.
            </p>
            <p className="text-[10px] text-text-muted/50 font-light">
              Bu web sitesi, kurumsal tanıtım ve iletişim amaçlı tasarlanmıştır. Siteden doğrudan araç satışı gerçekleştirilmez.
            </p>
          </div>

          {/* Back to top button */}
          <button
            onClick={handleScrollToTop}
            className="bg-card-brand/80 hover:bg-gold-brand hover:text-bg-brand text-gold-brand border border-border-brand p-3 rounded-[2px] transition-all duration-300 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-brand/80"
            aria-label="Yukarı Çık"
          >
            <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
