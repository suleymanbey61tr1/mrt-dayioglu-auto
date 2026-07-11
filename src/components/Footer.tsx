/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Instagram, Phone, ArrowUp } from "lucide-react";
import { CONTACT_INFO } from "../types";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const links = [
    ["Ana Sayfa","#home"],
    ["Hakkımızda","#about"],
    ["Neden Biz?","#why-us"],
    ["Konum","#location"],
    ["İletişim","#contact"],
  ];

  return (
    <footer
      id="app-footer"
      className="relative border-t border-border-brand bg-bg-brand py-14 sm:py-16 overflow-hidden"
    >
      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-gold-brand/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-12 border-b border-border-brand pb-12 md:grid-cols-12">
          <motion.div
            initial={{opacity:0,y:20}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            transition={{duration:.6}}
            className="space-y-4 md:col-span-5"
          >
            <div>
              <h2 className="font-display text-2xl font-bold tracking-[0.25em] text-text-white">
                MRT DAYIOĞLU
              </h2>
              <span className="mt-1 block text-xs uppercase tracking-[0.4em] text-gold-brand">
                AUTO
              </span>
            </div>

            <p className="max-w-sm leading-7 text-text-muted">
              Güvenilir ticaret anlayışı ve kaliteli hizmet yaklaşımıyla
              premium otomobil deneyimi sunuyoruz.
            </p>
          </motion.div>

          <motion.div
            initial={{opacity:0,y:20}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            transition={{duration:.6,delay:.1}}
            className="md:col-span-4"
          >
            <h3 className="mb-5 font-display text-xs font-semibold uppercase tracking-[0.35em] text-text-white">
              Hızlı Menü
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {links.map(([title,href])=>(
                <a
                  key={href}
                  href={href}
                  className="text-sm text-text-muted transition-colors hover:text-gold-brand"
                >
                  {title}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{opacity:0,y:20}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            transition={{duration:.6,delay:.2}}
            className="md:col-span-3"
          >
            <h3 className="mb-5 font-display text-xs font-semibold uppercase tracking-[0.35em] text-text-white">
              İletişim
            </h3>

            <div className="space-y-4">
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-text-muted transition-colors hover:text-gold-brand"
              >
                <Instagram className="h-5 w-5 text-gold-brand"/>
                <span>@{CONTACT_INFO.instagram}</span>
              </a>

              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center gap-3 text-text-muted transition-colors hover:text-gold-brand"
              >
                <Phone className="h-5 w-5 text-gold-brand"/>
                <span>{CONTACT_INFO.phoneFormatted}</span>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col gap-6 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-text-muted">
              © {currentYear} <strong>MRT DAYIOĞLU AUTO</strong>. Tüm Hakları Saklıdır.
            </p>

            <p className="mt-2 text-xs text-text-muted/60">
              Bu web sitesi kurumsal tanıtım amacıyla hazırlanmıştır.
            </p>
          </div>

          <button
            onClick={handleScrollToTop}
            className="group rounded-[2px] border border-border-brand bg-card-brand p-3 text-gold-brand transition-all duration-300 hover:-translate-y-1 hover:border-gold-brand hover:bg-gold-brand hover:text-bg-brand"
            aria-label="Sayfanın başına dön"
          >
            <ArrowUp className="h-5 w-5 transition-transform group-hover:-translate-y-1"/>
          </button>
        </div>
      </div>
    </footer>
  );
}