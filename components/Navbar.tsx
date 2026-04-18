"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

const NAV_ITEMS = [
  { href: "#about", label: "About me" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Portfolio" },
  { href: "#contact", label: "Contact me" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const navRef = useRef<HTMLElement>(null);

  const detectBackground = useCallback(() => {
    const nav = navRef.current;
    if (!nav) return;

    nav.style.pointerEvents = "none";
    nav.style.visibility = "hidden";

    const x = window.innerWidth / 2;
    const y = 40;
    const el = document.elementFromPoint(x, y);

    nav.style.pointerEvents = "";
    nav.style.visibility = "";

    if (!el) return;

    let node: Element | null = el;
    while (node && node !== document.documentElement) {
      const bg = getComputedStyle(node).backgroundColor;
      if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") {
        const match = bg.match(/\d+/g);
        if (match) {
          const [r, g, b] = match.map(Number);
          const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
          setDark(luminance < 0.5);
        }
        return;
      }
      node = node.parentElement;
    }
    setDark(false);
  }, []);

  const detectActiveSection = useCallback(() => {
    const sections = NAV_ITEMS.map((item) => item.href.replace("#", ""));
    const offset = 150;

    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= offset) {
          setActiveSection(sections[i]);
          return;
        }
      }
    }
    setActiveSection("");
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      detectBackground();
      detectActiveSection();
    };

    detectBackground();
    detectActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [detectBackground, detectActiveSection]);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navClass = [
    styles.nav,
    scrolled ? styles.navScrolled : "",
    dark ? styles.navDark : styles.navLight,
    menuOpen ? styles.navMenuOpen : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <nav ref={navRef} className={navClass}>
      <div className="container">
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/WhatsApp Image 2026-04-11 at 11.02.55 AM.jpeg"
              alt="SG Logo"
              width={48}
              height={48}
              className={styles.logoImg}
            />
          </Link>

          {/* Desktop links */}
          <div className={styles.links}>
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              const isContact = sectionId === "contact";

              if (isContact) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`${styles.buttonLink} ${isActive ? styles.buttonLinkActive : ""}`}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.link} ${isActive ? styles.linkActive : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Hamburger button */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        <div className={styles.mobileMenuInner}>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
