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
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-4"
      id="floating-actions-container"
    >
      {/* WhatsApp Floating Button */}
      <motion.a
        href={CONTACT_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.8 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-[2px] flex items-center justify-center shadow-2xl hover:shadow-emerald-500/20 transition-colors cursor-pointer relative group focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/80"
        aria-label="WhatsApp ile iletişime geçin"
        id="floating-whatsapp"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
        
        {/* Hover Tooltip */}
        <span className="absolute right-16 bg-card-brand text-text-white border border-border-brand text-xs font-semibold tracking-wider py-1.5 px-3 rounded-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          WHATSAPP HATTI
        </span>
      </motion.a>

      {/* Phone Floating Button */}
      <motion.a
        href={`tel:${CONTACT_INFO.phone}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.9 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-gold-brand hover:bg-gold-hover text-bg-brand rounded-[2px] flex items-center justify-center shadow-2xl hover:shadow-gold-brand/20 transition-colors cursor-pointer relative group focus:outline-none focus-visible:ring-4 focus-visible:ring-gold-brand/80"
        aria-label="Telefonla arayın"
        id="floating-phone"
      >
        <Phone className="w-6 h-6 fill-current" />

        {/* Hover Tooltip */}
        <span className="absolute right-16 bg-card-brand text-text-white border border-border-brand text-xs font-semibold tracking-wider py-1.5 px-3 rounded-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          HEMEN ARA
        </span>
      </motion.a>
    </div>
  );
}
