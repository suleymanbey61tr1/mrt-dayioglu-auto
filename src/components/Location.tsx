/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Navigation, Copy, Check } from "lucide-react";
import { CONTACT_INFO } from "../types";

export default function Location() {
  const [copied, setCopied] = useState(false);

 const handleCopyAddress = async () => {
  try {
    await navigator.clipboard.writeText(CONTACT_INFO.address);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  } catch (error) {
    console.error("Adres kopyalanamadı:", error);
  }
};

  return (
    <section
      id="location"
      className="relative border-t border-border-brand bg-bg-brand py-24 sm:py-32 overflow-hidden"
    >
      <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-gold-brand/5 blur-3xl" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:.7}}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="block text-xs font-display font-semibold uppercase tracking-[0.35em] text-gold-brand">
            SHOWROOM & KONUM
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold uppercase tracking-wide text-text-white">
            Bizi Ziyaret Edin
          </h2>
          <div className="mx-auto mt-5 h-px w-24 bg-gold-brand/50" />
          <p className="mt-6 text-text-muted leading-7">
            Sizleri showroomumuzda ağırlamaktan memnuniyet duyar, kaliteli hizmet
            anlayışımızı yakından tanımanızı isteriz.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-12">
          <motion.div
            initial={{opacity:0,x:-30}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
            transition={{duration:.7}}
            className="lg:col-span-4 rounded-[2px] border border-border-brand bg-card-brand p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-gold-brand"/>
                <h3 className="font-display text-lg font-bold uppercase tracking-wide text-text-white">
                  Showroom Adresi
                </h3>
              </div>

              <div className="mt-6 rounded-[2px] border border-border-brand bg-bg-brand p-4">
                <p className="text-sm leading-7 text-text-muted">
                  {CONTACT_INFO.address || "Adres bilgisi yakında eklenecektir."}
                </p>
              </div>

              <button
                onClick={handleCopyAddress}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-[2px] border border-border-brand bg-bg-brand py-3 text-xs font-semibold tracking-[0.2em] text-text-white transition-all hover:border-gold-brand hover:text-gold-brand"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-500"/>
                    <span className="text-emerald-500">KOPYALANDI</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4"/>
                    <span>ADRESİ KOPYALA</span>
                  </>
                )}
              </button>

<div className="mt-8 border-t border-border-brand pt-6">
  <h4 className="mb-4 font-display text-xs uppercase tracking-[0.3em] text-text-white">
    Çalışma Saatleri
  </h4>

  <div className="flex justify-between text-sm text-text-muted">
    <span>Pazartesi - Cumartesi</span>
    <span className="text-text-white">09:00 - 18:00</span>
  </div>

  <div className="mt-2 flex justify-between text-sm text-text-muted">
    <span>Pazar</span>
    <span className="text-gold-brand">Kapalı</span>
  </div>
</div>
            </div>

            <a
              href={CONTACT_INFO.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center justify-center gap-3 rounded-[2px] bg-gold-brand py-4 font-bold tracking-[0.2em] text-bg-brand transition-all hover:-translate-y-1 hover:bg-gold-hover"
            >
              <Navigation className="h-5 w-5"/>
              <span>YOL TARİFİ AL</span>
            </a>
          </motion.div>

          <motion.div
            initial={{opacity:0,x:30}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
            transition={{duration:.7,delay:.15}}
            className="relative min-h-[420px] overflow-hidden rounded-[2px] border border-border-brand bg-card-brand p-2 lg:col-span-8"
          >
            <iframe
              src={CONTACT_INFO.mapsEmbedUrl}
              title="MRT DAYIOĞLU AUTO Konum"
              loading="lazy"
              className="h-full w-full rounded-[2px] border-0 invert-[90%] brightness-[95%] contrast-[105%] hue-rotate-[180deg]"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute inset-2 rounded-[2px] border border-white/5 shadow-inner"/>
          </motion.div>
        </div>
      </div>
    </section>
  );
}