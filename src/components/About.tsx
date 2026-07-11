/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ShieldCheck, Star, Users } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Şeffaf Süreçler",
      text: "Araç seçiminden teslimata kadar tüm süreçlerde açık, dürüst ve güvenilir bir hizmet anlayışı sunuyoruz.",
    },
    {
      icon: Star,
      title: "Premium Standartlar",
      text: "Kaliteli araçlar ve özenli hizmet anlayışımızla müşterilerimize ayrıcalıklı bir deneyim yaşatıyoruz.",
    },
    {
      icon: Users,
      title: "Müşteri Odaklı Yaklaşım",
      text: "Amacımız yalnızca araç satmak değil, uzun yıllar sürecek güven ilişkileri kurmaktır.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-border-brand bg-bg-brand py-24 sm:py-32"
    >
      <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-gold-brand/5 blur-3xl pointer-events-none" />
      <div className="absolute -left-32 bottom-10 h-96 w-96 rounded-full bg-gold-brand/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 lg:col-span-7"
          >
            <div>
              <span className="mb-3 block font-display text-xs font-semibold uppercase tracking-[0.35em] text-gold-brand">
                HAKKIMIZDA
              </span>

              <h2 className="text-3xl font-display font-bold uppercase leading-tight tracking-wide text-text-white sm:text-4xl md:text-5xl">
                Güvenin
                <br />
                <span className="font-light text-gold-brand">
                  Yeni Adresi.
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-text-muted sm:text-lg">
              <p>
                <strong className="text-text-white">MRT DAYIOĞLU AUTO</strong>,
                kaliteli otomobilleri güvenilir hizmet anlayışıyla
                buluşturan kurumsal bir otomotiv galerisidir.
              </p>

              <p>
                Araç seçiminden satış sürecine kadar her aşamada şeffaf,
                dürüst ve profesyonel bir yaklaşım benimsiyor; müşterilerimizin
                güvenini her şeyin üzerinde tutuyoruz.
              </p>

              <p className="font-medium text-text-white">
                Sizleri showroomumuzda ağırlamaktan ve kahvemizi birlikte
                içmekten memnuniyet duyarız.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative overflow-hidden rounded-[2px] border border-border-brand bg-card-brand/50 p-8 sm:p-10">
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-gold-brand/10 blur-2xl" />

              <h3 className="mb-8 border-b border-border-brand pb-4 font-display text-lg font-bold uppercase tracking-[0.25em] text-text-white">
                Temel Değerlerimiz
              </h3>

              <div className="space-y-6">
                {values.map(({ icon: Icon, title, text }) => (
                  <motion.div
                    key={title}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="flex gap-4 rounded-md border border-transparent p-3 transition-all duration-300 hover:border-gold-brand/20 hover:bg-white/5"
                  >
                    <div className="flex-shrink-0 rounded-[2px] border border-gold-brand/20 bg-gold-brand/10 p-3">
                      <Icon className="h-6 w-6 text-gold-brand" />
                    </div>

                    <div>
                      <h4 className="mb-1 font-display text-sm font-semibold uppercase tracking-wide text-text-white sm:text-base">
                        {title}
                      </h4>

                      <p className="text-sm leading-6 text-text-muted">
                        {text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}