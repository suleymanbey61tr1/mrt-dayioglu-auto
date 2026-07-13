import { motion, useReducedMotion } from "motion/react";
import {
  ChevronDown,
  MapPin,
  MessageSquare,
  Phone,
} from "lucide-react";
import { CONTACT_INFO } from "../types";
import heroImage from "../assets/images/hero_luxury_car_1783580755950.jpg";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const mapsUrl =
    CONTACT_INFO.mapsDirectionsUrl ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      CONTACT_INFO.address,
    )}`;

  const handleScrollToNext = () => {
    const nextSection = document.querySelector<HTMLElement>("#about");

    if (!nextSection) return;

    const headerHeight =
      document.getElementById("app-header")?.offsetHeight ?? 88;

    const targetPosition =
      nextSection.getBoundingClientRect().top +
      window.scrollY -
      headerHeight -
      16;

    window.scrollTo({
      top: Math.max(targetPosition, 0),
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  const entranceTransition = {
    duration: shouldReduceMotion ? 0 : 0.8,
    ease: "easeOut" as const,
  };

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg-brand"
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src={heroImage}
          alt=""
          width="1920"
          height="1080"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full scale-105 object-cover object-center brightness-75"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-bg-brand via-bg-brand/60 to-bg-brand/70" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(11,11,11,0.3)_50%,rgba(11,11,11,0.9)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pb-28 pt-32 text-center sm:pb-32">
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  scale: 0.9,
                }
          }
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={entranceTransition}
          className="mb-6 flex items-center gap-2 rounded-[2px] border border-gold-brand/30 bg-gold-brand/5 px-4 py-1.5"
        >
          <span className="relative flex h-1.5 w-1.5">
            {!shouldReduceMotion && (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-brand opacity-75" />
            )}

            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold-brand" />
          </span>

          <span className="font-display text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-brand">
            SEÇKİN ARAÇLAR
          </span>
        </motion.div>

        <motion.h1
          id="hero-title"
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 30,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            ...entranceTransition,
            delay: shouldReduceMotion ? 0 : 0.1,
          }}
          className="mb-4 font-display text-4xl font-bold uppercase leading-tight tracking-[0.12em] text-text-white sm:text-6xl sm:tracking-[0.2em] md:text-7xl"
        >
          MRT DAYIOĞLU

          <span className="mt-2 block text-2xl font-light tracking-[0.32em] text-gold-brand sm:text-4xl sm:tracking-[0.4em] md:text-5xl">
            AUTO
          </span>
        </motion.h1>

        <motion.p
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 20,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            ...entranceTransition,
            delay: shouldReduceMotion ? 0 : 0.2,
          }}
          className="mb-12 max-w-2xl font-sans text-base font-light leading-relaxed tracking-wide text-text-muted sm:text-lg md:text-xl"
        >
          Seçkin otomotiv dünyasında güven, prestij ve kurumsal mükemmelliğin
          buluştuğu adres.
        </motion.p>

        <motion.div
          id="hero-cta-group"
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 20,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            ...entranceTransition,
            delay: shouldReduceMotion ? 0 : 0.3,
          }}
          className="grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3"
        >
          <a
            id="hero-call-btn"
            href={`tel:${CONTACT_INFO.phone}`}
            aria-label={`MRT DAYIOĞLU AUTO'yu ara: ${CONTACT_INFO.phoneFormatted}`}
            className="flex items-center justify-center gap-3 rounded-[2px] bg-gold-brand px-6 py-4 text-xs font-semibold uppercase tracking-wider text-bg-brand shadow-xl shadow-gold-brand/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-brand focus-visible:ring-offset-4 focus-visible:ring-offset-bg-brand sm:text-sm"
          >
            <Phone aria-hidden="true" className="h-4 w-4 flex-shrink-0" />
            <span>Hemen Ara</span>
          </a>

          <a
            id="hero-whatsapp-btn"
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="MRT DAYIOĞLU AUTO ile WhatsApp üzerinden iletişime geç"
            className="flex items-center justify-center gap-3 rounded-[2px] border border-border-brand bg-transparent px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-brand hover:bg-white/5 hover:text-gold-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-brand focus-visible:ring-offset-4 focus-visible:ring-offset-bg-brand sm:text-sm"
          >
            <MessageSquare
              aria-hidden="true"
              className="h-4 w-4 flex-shrink-0 text-emerald-500"
            />
            <span>WhatsApp</span>
          </a>

          <a
            id="hero-location-btn"
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="MRT DAYIOĞLU AUTO konumunu Google Haritalar'da aç"
            className="flex items-center justify-center gap-3 rounded-[2px] border border-border-brand bg-transparent px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-brand hover:bg-white/5 hover:text-gold-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-brand focus-visible:ring-offset-4 focus-visible:ring-offset-bg-brand sm:text-sm"
          >
            <MapPin
              aria-hidden="true"
              className="h-4 w-4 flex-shrink-0 text-red-500"
            />
            <span>Konuma Git</span>
          </a>
        </motion.div>
      </div>

      <motion.button
        type="button"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: shouldReduceMotion ? 0 : 0.6,
          duration: shouldReduceMotion ? 0 : 1,
        }}
        onClick={handleScrollToNext}
        aria-label="Hakkımızda bölümüne geç"
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-2 rounded-[2px] p-2 text-text-muted transition-colors duration-300 hover:text-gold-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-brand sm:bottom-8"
      >
        <span className="text-xs font-light uppercase tracking-[0.25em]">
          Keşfet
        </span>

        <ChevronDown
          aria-hidden="true"
          className={`h-4 w-4 ${
            shouldReduceMotion ? "" : "animate-bounce"
          }`}
        />
      </motion.button>
    </section>
  );
}