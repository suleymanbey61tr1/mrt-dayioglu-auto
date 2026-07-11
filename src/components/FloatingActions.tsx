/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Phone, MessageSquare } from "lucide-react";
import { CONTACT_INFO } from "../types";

export default function FloatingActions() {
  return (
    <div
      id="floating-actions-container"
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-4"
    >
      <motion.a
        href={CONTACT_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label="WhatsApp ile iletişime geç"
        className="group relative flex h-14 w-14 items-center justify-center rounded-[2px] bg-emerald-500 text-white shadow-xl shadow-emerald-500/20 transition-all duration-300 hover:bg-emerald-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/70"
      >
        <MessageSquare className="h-6 w-6" />

        <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-[2px] border border-border-brand bg-card-brand px-3 py-2 text-xs font-semibold tracking-[0.2em] text-text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
          WHATSAPP
        </span>
      </motion.a>

      <motion.a
        href={`tel:${CONTACT_INFO.phone}`}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Telefon ile ara"
        className="group relative flex h-14 w-14 items-center justify-center rounded-[2px] bg-gold-brand text-bg-brand shadow-xl shadow-gold-brand/20 transition-all duration-300 hover:bg-gold-hover focus:outline-none focus-visible:ring-4 focus-visible:ring-gold-brand/70"
      >
        <Phone className="h-6 w-6" />

        <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-[2px] border border-border-brand bg-card-brand px-3 py-2 text-xs font-semibold tracking-[0.2em] text-text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
          HEMEN ARA
        </span>
      </motion.a>
    </div>
  );
}