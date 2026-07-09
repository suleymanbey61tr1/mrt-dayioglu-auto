/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, MessageSquare, Instagram, Mail, MapPin, Clock } from "lucide-react";
import { CONTACT_INFO } from "../types";

export default function Contact() {
  const contactMethods = [
    {
      id: "contact-phone",
      icon: Phone,
      title: "TELEFON",
      value: CONTACT_INFO.phoneFormatted,
      href: `tel:${CONTACT_INFO.phone}`,
      actionText: "Hemen Ara",
      color: "text-gold-brand border-gold-brand/20 bg-gold-brand/5"
    },
    {
      id: "contact-whatsapp",
      icon: MessageSquare,
      title: "WHATSAPP",
      value: CONTACT_INFO.phoneFormatted,
      href: CONTACT_INFO.whatsappUrl,
      actionText: "Mesaj Gönder",
      color: "text-emerald-500 border-emerald-500/20 bg-emerald-500/5",
      isExternal: true
    },
    {
      id: "contact-instagram",
      icon: Instagram,
      title: "INSTAGRAM",
      value: `@${CONTACT_INFO.instagram}`,
      href: CONTACT_INFO.instagramUrl,
      actionText: "Takip Et",
      color: "text-purple-400 border-purple-400/20 bg-purple-400/5",
      isExternal: true
    }
  ];

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-card-brand/20 border-t border-border-brand relative overflow-hidden"
    >
      {/* Decorative Blur Backgrounds */}
      <div className="absolute -bottom-20 right-1/4 w-[500px] h-[500px] bg-gold-brand/2 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24 space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-gold-brand font-display block">
            İLETİŞİM MERKEZİ
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-wider text-text-white uppercase">
            BİZİMLE İLETİŞİME GEÇİN
          </h2>
          <p className="text-sm sm:text-base text-text-muted font-light">
            Sorularınız, iş birlikleri veya showroom ziyaret planlamalarınız için dilediğiniz kanaldan anında ulaşın.
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" id="contact-methods-grid">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <a
                key={method.id}
                href={method.href}
                target={method.isExternal ? "_blank" : undefined}
                rel={method.isExternal ? "noopener noreferrer" : undefined}
                className="group bg-card-brand border border-border-brand hover:border-gold-brand/40 p-8 rounded-[2px] flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-brand/80"
                id={method.id}
              >
                {/* Icon Wrapper */}
                <div className={`p-4 rounded-[2px] border mb-6 transition-transform duration-500 group-hover:scale-110 ${method.color}`}>
                  <Icon className="w-6 h-6" />
                </div>

                <span className="text-xs font-display font-bold tracking-widest text-text-muted mb-2 uppercase">
                  {method.title}
                </span>

                <span className="text-lg sm:text-xl font-semibold text-text-white group-hover:text-gold-brand transition-colors duration-300 mb-6 font-display">
                  {method.value}
                </span>

                <span className="text-xs font-bold tracking-widest text-gold-brand border-b border-gold-brand/30 pb-0.5 group-hover:text-gold-hover group-hover:border-gold-hover transition-colors">
                  {method.actionText.toUpperCase()}
                </span>
              </a>
            );
          })}
        </div>

        {/* Placeholders Row: Email & Address Placeholders as explicitly requested */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border-brand pt-12" id="contact-placeholders">
          
          {/* E-posta Placeholder */}
          <div className="bg-card-brand/40 border border-border-brand/50 p-6 rounded-[2px] flex items-start gap-4">
            <div className="bg-white/5 p-3 rounded-[2px] text-text-muted flex-shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-xs font-semibold tracking-widest text-text-white uppercase font-display">
                E-POSTA ADRESİ
              </h4>
              <p className="text-sm text-text-muted italic font-light font-mono">
                [ info@mrtdayiogluauto.com ]
              </p>
              <p className="text-[11px] text-text-muted/60">
                Resmi kurumsal e-posta adresi yakında aktif edilecektir.
              </p>
            </div>
          </div>

          {/* Adres Placeholder */}
          <div className="bg-card-brand/40 border border-border-brand/50 p-6 rounded-[2px] flex items-start gap-4">
            <div className="bg-white/5 p-3 rounded-[2px] text-text-muted flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-xs font-semibold tracking-widest text-text-white uppercase font-display">
                KURUMSAL ADRES (ALTERNATİF)
              </h4>
              <p className="text-sm text-text-muted italic font-light">
                [ Showroom Adresi Dışındaki Ofis/Şube Adresi Buraya Eklenecektir ]
              </p>
              <p className="text-[11px] text-text-muted/60">
                Yeni şube bilgileri çok yakında paylaşılacaktır.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
