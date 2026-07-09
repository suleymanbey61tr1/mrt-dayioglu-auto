/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Shield, Award, Zap, Heart } from "lucide-react";

export default function WhyUs() {
  const features = [
    {
      id: "feature-trust",
      icon: Shield,
      title: "Güvenilir Hizmet",
      description: "Şeffaf ticaret ilkeleri ve yasal ekspertiz garantisiyle, tüm süreçlerimizi güven ve dürüstlük temeli üzerine inşa ediyoruz."
    },
    {
      id: "feature-quality",
      icon: Award,
      title: "Kaliteli Hizmet Anlayışı",
      description: "Dünya standartlarında kurumsal danışmanlık ve prestijli hizmet deneyimi sunarak lüks otomobil standartlarını her aşamaya taşıyoruz."
    },
    {
      id: "feature-fast",
      icon: Zap,
      title: "Hızlı İletişim",
      description: "WhatsApp, telefon veya sosyal mecralardan gelen tüm taleplerinize dakikalar içerisinde profesyonel geri dönüş sağlıyoruz."
    },
    {
      id: "feature-satisfaction",
      icon: Heart,
      title: "Müşteri Memnuniyeti",
      description: "Tüm kurumsal ilişkilerimizde kalıcı güven, dostluklar ve memnuniyet esaslı iş birlikleri yaratmayı hedefliyoruz."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section
      id="why-us"
      className="py-24 sm:py-32 bg-card-brand/30 border-t border-border-brand relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title Group */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24 space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-gold-brand font-display block">
            AYRICALIKLARIMIZ
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-wider text-text-white uppercase">
            NEDEN MRT DAYIOĞLU AUTO?
          </h2>
          <p className="text-sm sm:text-base text-text-muted font-light leading-relaxed">
            Bizim için otomobil danışmanlığı, yüksek standartlarda bir prestij ve güven ortaklığıdır.
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          id="why-us-grid"
        >
          {features.map((feat) => {
            const IconComponent = feat.icon;
            return (
              <motion.div
                key={feat.id}
                variants={cardVariants}
                whileHover={{ y: -8, borderColor: "rgba(212,175,55,0.4)" }}
                className="bg-card-brand border border-border-brand p-8 rounded-[2px] transition-all duration-300 relative group flex flex-col justify-between"
                id={feat.id}
              >
                {/* Subtle visual glow on card hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-brand/2 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2px] pointer-events-none" />

                <div className="space-y-6">
                  {/* Icon Box */}
                  <div className="w-12 h-12 bg-bg-brand border border-border-brand rounded-[2px] flex items-center justify-center text-gold-brand group-hover:border-gold-brand/50 group-hover:text-gold-hover transition-colors duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Text Contents */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-display font-bold text-text-white tracking-wide group-hover:text-gold-brand transition-colors duration-300 uppercase">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-text-muted font-light leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>

                {/* Small Decorative Indicator */}
                <div className="mt-8 flex items-center gap-1.5 text-[10px] text-gold-brand/40 font-semibold tracking-wider uppercase font-display select-none">
                  <span>✓ GÜVENCE</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
