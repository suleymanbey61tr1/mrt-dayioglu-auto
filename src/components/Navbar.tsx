/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Instagram, Phone } from "lucide-react";
import { CONTACT_INFO } from "../types";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
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

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
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
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="flex flex-col items-start gap-0.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-brand/80 rounded-[2px] p-1"
            id="nav-logo"
          >
            <span className="font-display text-lg sm:text-xl font-bold tracking-[0.25em] text-text-white group-hover:text-gold-brand transition-colors duration-300">
              MRT DAYIOĞLU
            </span>
            <span className="text-[10px] tracking-[0.4em] text-gold-brand font-medium uppercase">
              AUTO
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium tracking-wide text-text-muted hover:text-text-white transition-colors duration-300 relative py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-gold-brand"
              >
                {link.name}
              </a>
            ))}
            
            {/* Instagram Connection Link */}
            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold tracking-wider text-text-white border border-border-brand hover:border-gold-brand hover:text-gold-brand bg-card-brand/40 px-5 py-2.5 rounded-[2px] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-brand/80"
              id="desktop-instagram-btn"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>{CONTACT_INFO.instagram.toUpperCase()}</span>
            </a>
          </nav>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-text-white hover:text-gold-brand transition-colors p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-brand/80 rounded-[2px]"
            aria-label="Menüyü Aç"
            id="mobile-menu-trigger"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-bg-brand/98 z-30 pt-28 px-6 md:hidden flex flex-col justify-between pb-12"
            id="mobile-nav-drawer"
          >
            {/* Links */}
            <nav className="flex flex-col gap-6 text-center">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-xl font-display tracking-widest text-text-muted hover:text-gold-brand py-2 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            {/* Social and Quick Actions */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-4 items-center"
            >
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full max-w-xs text-xs font-semibold tracking-wider text-text-white border border-border-brand py-4 rounded-[2px] hover:border-gold-brand hover:text-gold-brand transition-all duration-300"
              >
                <Instagram className="w-4 h-4 text-gold-brand" />
                <span>INSTAGRAM: {CONTACT_INFO.instagram.toUpperCase()}</span>
              </a>

              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center justify-center gap-2 w-full max-w-xs text-xs font-semibold tracking-wider text-bg-brand bg-gold-brand hover:bg-gold-hover py-4 rounded-[2px] transition-all duration-300 shadow-lg shadow-gold-brand/10"
              >
                <Phone className="w-4 h-4" />
                <span>HEMEN ARA</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
