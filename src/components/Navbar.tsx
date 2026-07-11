/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Instagram, Phone } from "lucide-react";
import { CONTACT_INFO } from "../types";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Ana Sayfa", href: "#home" },
    { name: "Hakkımızda", href: "#about" },
    { name: "Neden Biz?", href: "#why-us" },
    { name: "Konum", href: "#location" },
    { name: "İletişim", href: "#contact" },
  ];

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const target = document.querySelector(href);
    if (!target) return;

    const headerHeight =
      document.getElementById("app-header")?.offsetHeight ?? 88;

    const y =
      target.getBoundingClientRect().top +
      window.scrollY -
      headerHeight -
      16;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-bg-brand/90 backdrop-blur-md border-b border-border-brand py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="flex flex-col items-start gap-0.5 group"
          >
            <span className="font-display text-lg sm:text-xl font-bold tracking-[0.25em] text-text-white group-hover:text-gold-brand transition-colors">
              MRT DAYIOĞLU
            </span>
            <span className="text-[10px] tracking-[0.4em] text-gold-brand uppercase">
              AUTO
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm text-text-muted hover:text-text-white transition-colors"
              >
                {link.name}
              </a>
            ))}

            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 border border-border-brand bg-card-brand/40 hover:border-gold-brand"
            >
              <Instagram className="w-4 h-4" />
              <span>{CONTACT_INFO.instagram.toUpperCase()}</span>
            </a>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-bg-brand/95 pt-28 px-6 pb-12 md:hidden flex flex-col justify-between"
          >
            <nav className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-xl font-display tracking-widest text-text-muted hover:text-gold-brand"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-4">
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-border-brand py-4"
              >
                <Instagram className="w-4 h-4 text-gold-brand" />
                INSTAGRAM
              </a>

              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center justify-center gap-2 bg-gold-brand text-bg-brand py-4"
              >
                <Phone className="w-4 h-4" />
                HEMEN ARA
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}