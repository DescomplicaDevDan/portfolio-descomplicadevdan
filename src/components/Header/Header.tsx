"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo/BrandLogo";
import styles from "./Header.module.css";

const links = [
  { label: "Serviços", href: "/#servicos", id: "servicos" },
  { label: "Projetos", href: "/projetos", id: "projetos" },
  { label: "Como funciona", href: "/#processo", id: "processo" },
  { label: "Sobre", href: "/#sobre", id: "sobre" },
];

export function Header() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: "-25% 0px -60%", threshold: [0, 0.25, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    function closeMenuWithEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setIsMenuOpen(false);
      menuButtonRef.current?.focus();
    }

    if (isMenuOpen) document.addEventListener("keydown", closeMenuWithEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", closeMenuWithEscape);
    };
  }, [isMenuOpen]);

  function handleNavigation(sectionId: string) {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  }

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Link className={styles.brand} href="/#inicio" aria-label="Ir para o início" onClick={() => handleNavigation("inicio")}>
          <BrandLogo className={styles.brandLogo} />
        </Link>

        <nav className={`${styles.navigation} ${isMenuOpen ? styles.navigationOpen : ""}`} aria-label="Navegação principal" id="primary-navigation">
          {links.map((link) => (
            <Link className={activeSection === link.id ? styles.active : undefined} href={link.href} key={link.href} aria-current={activeSection === link.id ? "page" : undefined} onClick={() => handleNavigation(link.id)}>
              {link.label}
            </Link>
          ))}
          <Link className={styles.mobileContact} href="/#contato" onClick={() => handleNavigation("contato")}>Vamos conversar</Link>
        </nav>

        <div className={styles.actions}>
          <Link className={styles.contactButton} href="/#contato" onClick={() => handleNavigation("contato")}>Vamos conversar</Link>
          <button ref={menuButtonRef} className={`${styles.menuButton} ${isMenuOpen ? styles.menuButtonOpen : ""}`} type="button" aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={isMenuOpen} aria-controls="primary-navigation" onClick={() => setIsMenuOpen((open) => !open)}>
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
