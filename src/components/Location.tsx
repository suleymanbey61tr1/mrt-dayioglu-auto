/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { MapPin, Navigation, Copy, Check } from "lucide-react";
import { CONTACT_INFO } from "../types";

export default function Location() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CONTACT_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="location"
      className="py-24 sm:py-32 bg-bg-brand border-t border-border-brand relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title Group */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-gold-brand font-display block">
            ULAŞIM & SHOWROOM
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-wider text-text-white uppercase">
            ZİYARET EDİN
          </h2>
          <p className="text-sm sm:text-base text-text-muted font-light">
            Sizleri showroomumuzda ağırlamaktan ve kurumsal hizmet ayrıcalıklarımızı paylaşmaktan onur duyarız.
          </p>
        </div>

        {/* Layout: Sidebar & Big Map Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Address Details Panel */}
          <div className="lg:col-span-4 bg-card-brand border border-border-brand p-8 rounded-[2px] flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-gold-brand">
                <MapPin className="w-5 h-5" />
                <h3 className="font-display font-bold text-lg tracking-wider text-text-white uppercase">
                  SHOWROOM ADRESİ
                </h3>
              </div>

              {/* Address Container */}
              <div className="space-y-4">
                <div className="p-4 bg-bg-brand border border-border-brand rounded-[2px]">
                  <p className="text-text-muted text-sm sm:text-base leading-relaxed font-light">
                    {CONTACT_INFO.address || "Adres bilgisi yakında eklenecektir."}
                  </p>
                </div>

                {/* Copy Button */}
                <button
                  onClick={handleCopyAddress}
                  className="flex items-center justify-center gap-2 w-full text-xs font-semibold tracking-wider text-text-white hover:text-gold-brand bg-bg-brand hover:bg-bg-brand/80 border border-border-brand hover:border-gold-brand py-3 rounded-[2px] transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-brand/80"
                  id="copy-address-btn"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500 font-bold">ADRES KOPYALANDI!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>ADRESİ KOPYALA</span>
                    </>
                  )}
                </button>
              </div>

              {/* Working Hours Info */}
              <div className="border-t border-border-brand pt-6 space-y-3">
                <h4 className="text-xs font-semibold tracking-widest text-text-white uppercase font-display">
                  Çalışma Saatleri
                </h4>
                <div className="flex justify-between text-xs text-text-muted">
                  <span>Pazartesi - Cumartesi:</span>
                  <span className="text-text-white font-medium">09:00 - 19:00</span>
                </div>
                <div className="flex justify-between text-xs text-text-muted">
                  <span>Pazar:</span>
                  <span className="text-gold-brand font-medium">Randevu ile</span>
                </div>
              </div>
            </div>

            {/* Main Action Button */}
            <a
              href={CONTACT_INFO.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-gold-brand hover:bg-gold-hover text-bg-brand font-bold tracking-wider py-4 rounded-[2px] transition-all duration-300 shadow-lg shadow-gold-brand/15 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-brand/80"
              id="get-directions-btn"
            >
              <Navigation className="w-5 h-5 fill-current" />
              <span>YOL TARİFİ AL</span>
            </a>
          </div>

          {/* Interactive Google Map Frame */}
          <div className="lg:col-span-8 bg-card-brand border border-border-brand p-2 rounded-[2px] h-[400px] lg:h-auto min-h-[350px] relative overflow-hidden">
            <iframe
              src={CONTACT_INFO.mapsEmbedUrl}
              className="w-full h-full rounded-[2px] border-0 filter invert-[90%] hue-rotate-[180deg] contrast-[105%] brightness-[95%]"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MRT DAYIOĞLU AUTO Google Haritası"
              id="showroom-map-iframe"
            />
            {/* Elegant Map Rim Shadow Overlay */}
            <div className="absolute inset-2 pointer-events-none rounded-[2px] border border-white/5 shadow-inner" />
          </div>

        </div>
      </div>
    </section>
  );
}
