/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ContactConfig {
  phone: string;
  phoneFormatted: string;
  whatsapp: string;
  whatsappUrl: string;
  instagram: string;
  instagramUrl: string;
  email: string;
  address: string;
  mapsEmbedUrl: string;
  mapsDirectionsUrl: string;
}

export const CONTACT_INFO: ContactConfig = {
  phone: "+905421838461",
  phoneFormatted: "0542 183 84 61",
  whatsapp: "+905421838461",
  // Standard WhatsApp API URL that works in all browsers and mobile apps
  whatsappUrl: "https://wa.me/905421838461?text=Merhaba,%20MRT%20DAYIO%C4%9ELU%20AUTO%20web%20sitenizden%20ula%C5%9F%C4%B1yorum.",
  instagram: "dayioglu.auto",
  instagramUrl: "https://www.instagram.com/dayioglu.auto",
  email: "[ info@mrtdayiogluauto.com ]",
  address: "[ Showroom Adresiniz Buraya Gelecek ]",
  // Highly accurate, high-quality dark-themed or standard map placeholder location
  // Using custom lat/long or generic Istoc coordinate for Istoc, Istanbul (auto trade center)
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.828236166879!2d28.8028779!3d41.0725355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa5167f8b965f%3A0xc3f8e5fba609bb2a!2zxLBzdG_DpyBPdG8gVGljYXJldCBNZXJrZXpp!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str",
  mapsDirectionsUrl: "https://maps.google.com/?q=Istoc+Oto+Ticaret+Merkezi,+Bagcilar,+Istanbul"
};
