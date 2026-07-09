/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ShieldCheck, Star, Users } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-bg-brand border-t border-border-brand relative overflow-hidden"
    >
      {/* Absolute Decorative Glow Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-brand/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold-brand/2 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Column 1: Subtitle, Title and Paragraphs */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-gold-brand font-display block">
                KURUMSAL BİLİNÇ
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-wider text-text-white uppercase leading-tight">
                MRT DAYIOĞLU AUTO <br />
                <span className="text-gold-brand font-light font-sans lowercase italic capitalize">
                  Prestij ve Güvenle.
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-text-muted font-light leading-relaxed text-base sm:text-lg">
              <p>
                Otomotiv dünyasında uzun yıllara dayanan kurumsal birikimimizi, dürüst ticaret ilkelerimiz ve üstün hizmet kalitemizle birleştiriyoruz. <strong>MRT DAYIOĞLU AUTO</strong> olarak, yalnızca seçkin bir otomobil deneyimi sunmakla kalmıyor, aynı zamanda kalıcı güven ilişkileri ve kurumsal değerler inşa ediyoruz.
              </p>
              <p>
                Showroomumuzdaki her detay ve tüm danışmanlık süreçlerimiz, teknik standartlara ve estetik olgunluğa uygun olarak titizlikle yapılandırılmıştır. Müşterilerimizin memnuniyetini en üst düzeyde korumayı ilke edinerek, tüm iletişim süreçlerinde şeffaf, güvenilir ve prestijli bir yaklaşım sergiliyoruz.
              </p>
              <p className="text-text-white font-medium">
                Sizleri ağırlamaktan, kurumsal hizmet standartlarımızı paylaşmaktan ve kahvemizi ikram etmekten memnuniyet duyarız.
              </p>
            </div>
          </div>

          {/* Column 2: Highlights / Value Metrics Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-card-brand/50 border border-border-brand p-8 sm:p-10 rounded-[2px] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold-brand/5 rounded-full blur-xl" />
              
              <h3 className="text-lg font-display font-bold tracking-widest text-text-white uppercase mb-8 border-b border-border-brand pb-4">
                TEMEL DEĞERLERİMİZ
              </h3>

              <div className="space-y-8">
                {/* Value 1 */}
                <div className="flex gap-4 items-start">
                  <div className="bg-gold-brand/10 p-3 rounded-[2px] border border-gold-brand/20 flex-shrink-0">
                    <ShieldCheck className="w-6 h-6 text-gold-brand" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold tracking-wide text-text-white mb-1 uppercase font-display">
                      Şeffaf Süreçler
                    </h4>
                    <p className="text-sm text-text-muted font-light">
                      Güven ve dürüstlük prensiplerimiz doğrultusunda, tüm kurumsal iletişimimizde tam şeffaflık sağlarız.
                    </p>
                  </div>
                </div>

                {/* Value 2 */}
                <div className="flex gap-4 items-start">
                  <div className="bg-gold-brand/10 p-3 rounded-[2px] border border-gold-brand/20 flex-shrink-0">
                    <Star className="w-6 h-6 text-gold-brand" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold tracking-wide text-text-white mb-1 uppercase font-display">
                      Premium Standartlar
                    </h4>
                    <p className="text-sm text-text-muted font-light">
                      Lüks otomobil kültürünün gerektirdiği kusursuz ilgi ve seçkin atmosferi showroomumuzda yaşatıyoruz.
                    </p>
                  </div>
                </div>

                {/* Value 3 */}
                <div className="flex gap-4 items-start">
                  <div className="bg-gold-brand/10 p-3 rounded-[2px] border border-gold-brand/20 flex-shrink-0">
                    <Users className="w-6 h-6 text-gold-brand" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold tracking-wide text-text-white mb-1 uppercase font-display">
                      Kurumsal Rehberlik
                    </h4>
                    <p className="text-sm text-text-muted font-light">
                      Otomotiv sektöründeki tecrübemizle, her adımda dürüst ve profesyonel bir yol arkadaşı oluyoruz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
