/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import {
  Phone,
  MessageSquare,
  Instagram,
  Mail,
  MapPin,
} from "lucide-react";
import { CONTACT_INFO } from "../types";

export default function Contact() {
  const contactMethods = [
  {
    id: "phone",
    icon: Phone,
    title: "Telefon",
    value: CONTACT_INFO.phoneFormatted,
    href: `tel:${CONTACT_INFO.phone}`,
    action: "Hemen Ara",
    color: "text-gold-brand border-gold-brand/20 bg-gold-brand/5",
  },
  {
    id: "whatsapp",
    icon: MessageSquare,
    title: "WhatsApp",
    value: CONTACT_INFO.phoneFormatted,
    href: CONTACT_INFO.whatsappUrl,
    action: "Mesaj Gönder",
    color: "text-emerald-500 border-emerald-500/20 bg-emerald-500/5",
    external: true,
  },
  {
    id: "instagram",
    icon: Instagram,
    title: "Instagram",
    value: `@${CONTACT_INFO.instagram}`,
    href: CONTACT_INFO.instagramUrl,
    action: "Takip Et",
    color: "text-purple-400 border-purple-400/20 bg-purple-400/5",
    external: true,
  },
];

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border-brand bg-card-brand/20 py-24 sm:py-32"
    >
      <div className="absolute -bottom-24 right-1/3 h-96 w-96 rounded-full bg-gold-brand/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="block text-xs font-display font-semibold uppercase tracking-[0.35em] text-gold-brand">
            İLETİŞİM
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold uppercase tracking-wide text-text-white">
            Bizimle İletişime Geçin
          </h2>

          <div className="mx-auto mt-5 h-px w-24 bg-gold-brand/50" />

          <p className="mt-6 leading-7 text-text-muted">
            Sorularınız veya showroom ziyaretiniz için dilediğiniz zaman bizimle
            iletişime geçebilirsiniz.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {contactMethods.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.id}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group rounded-[2px] border border-border-brand bg-card-brand p-8 text-center transition-all hover:border-gold-brand/40"
              >
                <div className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-[2px] border ${item.color}`}>
                  <Icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
                </div>

                <h3 className="text-xs font-display font-semibold uppercase tracking-[0.3em] text-text-muted">
                  {item.title}
                </h3>

                <p className="mt-4 text-xl font-display font-bold text-text-white group-hover:text-gold-brand">
                  {item.value}
                </p>

                <span className="mt-6 inline-block border-b border-gold-brand/30 pb-1 text-xs font-bold uppercase tracking-[0.25em] text-gold-brand">
                  {item.action}
                </span>
              </motion.a>
            );
          })}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-[2px] border border-border-brand bg-card-brand/40 p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-[2px] bg-white/5 p-3">
                <Mail className="h-5 w-5 text-gold-brand" />
              </div>
              <div>
                <h4 className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-text-white">
                  E-Posta
                </h4>
                <p className="mt-2 text-text-muted">
                  suleymanertekin6161@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2px] border border-border-brand bg-card-brand/40 p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-[2px] bg-white/5 p-3">
                <MapPin className="h-5 w-5 text-gold-brand" />
              </div>
              <div>
                <h4 className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-text-white">
                  Adres
                </h4>
                <p className="mt-2 text-text-muted">
                  {CONTACT_INFO.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}