import Image from "next/image";
import styles from "./Header.module.css";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Skills", href: "#skills" },
  { label: "Experiências", href: "#experiencias" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <a className={styles.brand} href="#inicio" aria-label="Ir para o início">
          <span aria-hidden="true">&gt;_</span>
          <span>sudo be_myself</span>
        </a>

        <nav className={styles.navigation} aria-label="Navegação principal">
          {links.map((link, index) => (
            <a
              className={index === 0 ? styles.active : undefined}
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a className={styles.download} href="#" aria-label="Baixar currículo">
            Download CV
            <Image src="/assets/download.svg" alt="" width={18} height={18} />
          </a>
          <button className={styles.themeButton} type="button" aria-label="Alternar tema">
            <Image src="/assets/moon-fill.svg" alt="" width={20} height={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
