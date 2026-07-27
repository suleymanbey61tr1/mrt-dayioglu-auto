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

  companyName: string;
  slogan: string;
  foundedYear: number;
  workingHours: string;
}

export const CONTACT_INFO: ContactConfig = {
  companyName: "MRT DAYIOĞLU AUTO",

  slogan: "Kaliteli Araç, Güvenilir Hizmet",

  foundedYear: 2026,

  workingHours:
  "Pazartesi - Cumartesi: 10:00 - 18:00 | Pazar: Kapalı",

  // Telefon
  phone: "+905421838461",

  phoneFormatted: "0542 183 84 61",

  // WhatsApp
  whatsapp: "+905421838461",

  whatsappUrl:
    "https://wa.me/905421838461?text=Merhaba,%20MRT%20DAYIOĞLU%20AUTO%20web%20sitesi%20üzerinden%20size%20ulaşıyorum.",

  // Instagram
  instagram: "mrtdayioglu.auto",

  instagramUrl: "https://www.instagram.com/mrtdayioglu.auto/",

  // Mail
  email: "suleymanertekin6161@gmail.com",

  // Adres
  address: "Kanuni Mahallesi Horon Caddesi No: 51A, Ortahisar / Trabzon",

  // Google Maps
mapsEmbedUrl:
  "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3011.819187042834!2d39.77819367603941!3d40.985439971353706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDU5JzA3LjYiTiAzOcKwNDYnNTAuOCJF!5e0!3m2!1str!2str!4v1783930545964!5m2!1str!2str",

mapsDirectionsUrl:
  "https://maps.app.goo.gl/8yBicoheRms6PAat9?g_st=ic",
};