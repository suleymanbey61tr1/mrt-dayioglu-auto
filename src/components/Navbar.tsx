import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import { AnimatePresence, motion } from "motion/react";
import { Instagram, Menu, Phone, X } from "lucide-react";
import { CONTACT_INFO } from "../types";

const NAV_LINKS = [
  { name: "Ana Sayfa", href: "#home" },
  { name: "Hakkımızda", href: "#about" },
  { name: "Neden Biz?", href: "#why-us" },
  { name: "Konum", href: "#location" },
  { name: "İletişim", href: "#contact" },
] as const;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#home");

  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    let animationFrameId = 0;

    const updateNavbarState = () => {
      setIsScrolled(window.scrollY > 50);

      const headerHeight =
        document.getElementById("app-header")?.offsetHeight ?? 88;

      const currentPosition = window.scrollY + headerHeight + 80;

      let currentSection = NAV_LINKS[0].href;

      for (const link of NAV_LINKS) {
        const section = document.querySelector<HTMLElement>(link.href);

        if (section && section.offsetTop <= currentPosition) {
          currentSection = link.href;
        }
      }

      setActiveSection(currentSection);
      animationFrameId = 0;
    };

    const handleScroll = () => {
      if (animationFrameId !== 0) return;

      animationFrameId = window.requestAnimationFrame(updateNavbarState);
    };

    updateNavbarState();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (animationFrameId !== 0) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      firstMobileLinkRef.current?.focus();
    }, 150);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const desktopMediaQuery = window.matchMedia("(min-width: 768px)");

    const handleDesktopChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsMobileMenuOpen(false);
      }
    };

    desktopMediaQuery.addEventListener("change", handleDesktopChange);

    return () => {
      desktopMediaQuery.removeEventListener("change", handleDesktopChange);
    };
  }, []);

  const handleLinkClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();

    const target = document.querySelector<HTMLElement>(href);

    if (!target) return;

    setActiveSection(href);
    setIsMobileMenuOpen(false);

    const headerHeight =
      document.getElementById("app-header")?.offsetHeight ?? 88;

    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      headerHeight -
      16;

    window.scrollTo({
      top: Math.max(targetPosition, 0),
      behavior: "smooth",
    });

    window.history.replaceState(null, "", href);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((currentState) => !currentState);
  };

  return (
    <>
      <header
        id="app-header"
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? "border-b border-border-brand bg-bg-brand/90 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-md"
            : "border-b border-transparent bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <a
            href="#home"
            aria-label="MRT DAYIOĞLU AUTO ana sayfa"
            onClick={(event) => handleLinkClick(event, "#home")}
            className="group flex flex-col items-start gap-0.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-brand focus-visible:ring-offset-4 focus-visible:ring-offset-bg-brand"
          >
            <span className="font-display text-lg font-bold tracking-[0.25em] text-text-white transition-colors duration-300 group-hover:text-gold-brand sm:text-xl">
              MRT DAYIOĞLU
            </span>

            <span className="text-[10px] uppercase tracking-[0.4em] text-gold-brand">
              AUTO
            </span>
          </a>

          <nav
            aria-label="Ana navigasyon"
            className="hidden items-center gap-8 md:flex"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={(event) => handleLinkClick(event, link.href)}
                  className={`group relative rounded-sm py-2 text-sm transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-brand focus-visible:ring-offset-4 focus-visible:ring-offset-bg-brand ${
                    isActive
                      ? "text-text-white"
                      : "text-text-muted hover:text-text-white"
                  }`}
                >
                  {link.name}

                  <span
                    aria-hidden="true"
                    className={`absolute bottom-0 left-0 h-px bg-gold-brand transition-all duration-300 ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              );
            })}

            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram'da ${CONTACT_INFO.instagram} profilini aç`}
              className="group flex items-center gap-2 border border-border-brand bg-card-brand/40 px-5 py-2.5 text-sm text-text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-brand hover:bg-card-brand/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-brand focus-visible:ring-offset-4 focus-visible:ring-offset-bg-brand"
            >
              <Instagram
                aria-hidden="true"
                className="h-4 w-4 text-gold-brand transition-transform duration-300 group-hover:scale-110"
              />

              <span>{CONTACT_INFO.instagram.toUpperCase()}</span>
            </a>
          </nav>

          <button
            ref={menuButtonRef}
            type="button"
            aria-label={
              isMobileMenuOpen
                ? "Mobil menüyü kapat"
                : "Mobil menüyü aç"
            }
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={toggleMobileMenu}
            className="relative z-50 flex h-11 w-11 items-center justify-center rounded-sm border border-border-brand bg-card-brand/40 text-text-white transition-colors duration-300 hover:border-gold-brand hover:text-gold-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-brand focus-visible:ring-offset-4 focus-visible:ring-offset-bg-brand md:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMobileMenuOpen ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <X aria-hidden="true" className="h-6 w-6" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu aria-hidden="true" className="h-6 w-6" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Mobil navigasyon"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setIsMobileMenuOpen(false);
                menuButtonRef.current?.focus();
              }
            }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-bg-brand/95 px-6 pb-12 pt-28 backdrop-blur-md md:hidden"
          >
            <motion.nav
              aria-label="Mobil navigasyon bağlantıları"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.07,
                    delayChildren: 0.08,
                  },
                },
              }}
              className="flex flex-col gap-2 text-center"
            >
              {NAV_LINKS.map((link, index) => {
                const isActive = activeSection === link.href;

                return (
                  <motion.a
                    key={link.href}
                    ref={index === 0 ? firstMobileLinkRef : undefined}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={(event) =>
                      handleLinkClick(event, link.href)
                    }
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: -12,
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                      },
                    }}
                    transition={{ duration: 0.3 }}
                    className={`border-b py-4 font-display text-xl tracking-widest transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-brand ${
                      isActive
                        ? "border-gold-brand text-gold-brand"
                        : "border-border-brand/60 text-text-muted hover:text-gold-brand"
                    }`}
                  >
                    {link.name}
                  </motion.a>
                );
              })}
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.35 }}
              className="flex flex-col gap-4"
            >
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profilimizi aç"
                className="flex items-center justify-center gap-2 border border-border-brand py-4 text-text-white transition-colors duration-300 hover:border-gold-brand hover:text-gold-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-brand"
              >
                <Instagram
                  aria-hidden="true"
                  className="h-4 w-4 text-gold-brand"
                />

                INSTAGRAM
              </a>

              <a
                href={`tel:${CONTACT_INFO.phone}`}
                aria-label={`MRT DAYIOĞLU AUTO'yu ara: ${CONTACT_INFO.phoneFormatted}`}
                className="flex items-center justify-center gap-2 bg-gold-brand py-4 font-semibold text-bg-brand transition-opacity duration-300 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-white focus-visible:ring-offset-4 focus-visible:ring-offset-bg-brand"
              >
                <Phone aria-hidden="true" className="h-4 w-4" />

                HEMEN ARA
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}