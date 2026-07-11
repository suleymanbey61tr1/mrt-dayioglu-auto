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
  // Telefon
  phone: "+905421838461",
  phoneFormatted: "0542 183 84 61",

  // WhatsApp
  whatsapp: "+905421838461",

  whatsappUrl:
    "https://wa.me/905421838461?text=Merhaba,%20MRT%20DAYIOĞLU%20AUTO%20web%20sitesi%20üzerinden%20size%20ulaşıyorum.",

  // Instagram
  instagram: "mrtdayioglu.auto",

  instagramUrl:
    "https://www.instagram.com/mrtdayioglu.auto/",

  // E-posta
  email: "",

  // Showroom Adresi
  address:
    "Kanuni Mahallesi Horon Caddesi No: 51A, Ortahisar / Trabzon",

  // Google Maps
  mapsEmbedUrl: "",

  mapsDirectionsUrl: ""
};