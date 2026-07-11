/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Shield, Award, Zap, Heart } from "lucide-react";

const features = [
  {
    id: "trust",
    icon: Shield,
    title: "Güvenilir Alım Satım",
    description:
      "Tüm süreçlerde şeffaf, dürüst ve güvenilir bir hizmet anlayışı sunuyoruz.",
    badge: "DÜRÜST TİCARET",
  },
  {
    id: "quality",
    icon: Award,
    title: "Titizlikle Seçilmiş Araçlar",
    description:
      "Kalite standartlarımızı karşılayan araçları özenle sizlerle buluşturuyoruz.",
    badge: "PREMIUM KALİTE",
  },
  {
    id: "fast",
    icon: Zap,
    title: "Hızlı İletişim",
    description:
      "Telefon, WhatsApp ve sosyal medya üzerinden hızlı geri dönüş sağlıyoruz.",
    badge: "HIZLI DESTEK",
  },
  {
    id: "care",
    icon: Heart,
    title: "Müşteri Memnuniyeti",
    description:
      "Amacımız yalnızca satış yapmak değil, uzun yıllar sürecek güven ilişkileri kurmaktır.",
    badge: "GÜVEN ODAKLI",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative border-t border-border-brand bg-card-brand/30 py-24 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="block font-display text-xs font-semibold uppercase tracking-[0.35em] text-gold-brand">
            NEDEN BİZ?
          </span>

          <h2 className="mt-3 text-3xl font-display font-bold uppercase tracking-wide text-text-white sm:text-4xl">
            Neden MRT DAYIOĞLU AUTO?
          </h2>

          <div className="mx-auto mt-5 h-px w-24 bg-gold-brand/50" />

          <p className="mt-6 text-base leading-7 text-text-muted">
            Güven, kalite ve profesyonel hizmet anlayışını bir araya getirerek
            sizlere ayrıcalıklı bir otomotiv deneyimi sunuyoruz.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ id, icon: Icon, title, description, badge }, index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-[2px] border border-border-brand bg-card-brand p-8 transition-all duration-300 hover:border-gold-brand/40"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-gold-brand/5 via-transparent to-transparent" />

              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[2px] border border-gold-brand/20 bg-gold-brand/10 transition-all duration-300 group-hover:border-gold-brand/50">
                  <Icon className="h-7 w-7 text-gold-brand transition-transform duration-300 group-hover:scale-110" />
                </div>

                <h3 className="mb-3 font-display text-lg font-bold uppercase tracking-wide text-text-white transition-colors group-hover:text-gold-brand">
                  {title}
                </h3>

                <p className="text-sm leading-7 text-text-muted">
                  {description}
                </p>

                <div className="mt-8 border-t border-border-brand pt-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold-brand">
                  ✓ {badge}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}