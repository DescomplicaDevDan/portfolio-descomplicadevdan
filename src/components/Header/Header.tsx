"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo/BrandLogo";
import styles from "./Header.module.css";

const links = [
  { label: "Início", href: "/#inicio", id: "inicio" },
  { label: "Sobre", href: "/#sobre", id: "sobre" },
  { label: "Projetos", href: "/projetos", id: "projetos" },
  { label: "Skills", href: "/#skills", id: "skills" },
  { label: "Experiências", href: "/#experiencias", id: "experiencias" },
  { label: "Contato", href: "/#contato", id: "contato" },
];

type Theme = "dark" | "light";

export function Header() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("portfolio-theme") as Theme | null;
    const initialTheme = storedTheme ?? "dark";
    document.documentElement.dataset.theme = initialTheme;
    const syncTheme = window.setTimeout(() => setTheme(initialTheme), 0);
    return () => window.clearTimeout(syncTheme);
  }, []);

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
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);
    setTheme(nextTheme);
  }

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
        </nav>

        <div className={styles.actions}>
          <button className={styles.download} type="button" disabled title="Currículo em preparação">
            Download CV<Image src="/assets/download.svg" alt="" width={18} height={18} />
          </button>
          <button className={styles.themeButton} type="button" aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"} aria-pressed={theme === "light"} onClick={toggleTheme}>
            <Image src={theme === "dark" ? "/assets/moon-fill.svg" : "/assets/brightness-high-fill.svg"} alt="" width={20} height={20} />
          </button>
          <button className={`${styles.menuButton} ${isMenuOpen ? styles.menuButtonOpen : ""}`} type="button" aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={isMenuOpen} aria-controls="primary-navigation" onClick={() => setIsMenuOpen((open) => !open)}>
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
