import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo/BrandLogo";
import { CopyButton } from "@/components/CopyButton/CopyButton";
import { contact } from "@/config/contact";
import styles from "./Footer.module.css";

const navigation = [
  { label: "Início", href: "/#inicio" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Projetos", href: "/projetos" },
  { label: "Skills", href: "/#skills" },
  { label: "Contato", href: "/#contato" },
];

const professionalLinks = [
  { label: "GitHub", href: contact.githubUrl },
  { label: "LinkedIn", href: contact.linkedinUrl },
  { label: "WhatsApp", href: contact.phone.whatsappUrl },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.ambient} aria-hidden="true" />
      <div className={styles.container}>
        <div className={styles.cta}>
          <div>
            <p className={styles.availability}><i /> Disponível para projetos e oportunidades</p>
            <h2>Vamos construir algo que <span>faça sentido?</span></h2>
          </div>
          <a className={styles.ctaButton} href={contact.phone.whatsappUrl} target="_blank" rel="noreferrer">
            Iniciar conversa <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className={styles.content}>
          <div className={styles.brandColumn}>
            <Link href="/#inicio" aria-label="Voltar ao início">
              <BrandLogo className={styles.logo} />
            </Link>
            <p>Transformando ideias em soluções digitais funcionais, humanas e construídas com propósito.</p>
            <code>developer@portfolio:~$ keep_building</code>
          </div>

          <nav className={styles.column} aria-label="Navegação do rodapé">
            <h3>Navegação</h3>
            {navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
          </nav>

          <div className={styles.column}>
            <h3>Conecte-se</h3>
            {professionalLinks.map((item) => (
              <a href={item.href} key={item.label} target="_blank" rel="noreferrer">
                {item.label}<span aria-hidden="true">↗</span>
              </a>
            ))}
            <CopyButton
              value={contact.email}
              label="Copiar e-mail profissional"
              successLabel="E-mail copiado"
              className={styles.copyEmail}
            >
              <span>Copiar e-mail</span>
            </CopyButton>
          </div>

          <div className={styles.contactColumn}>
            <h3>Contato direto</h3>
            <p>{contact.email}</p>
            <p>{contact.phone.display}</p>
            <a href="/#inicio" className={styles.backToTop}>
              Voltar ao topo <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>© {new Date().getFullYear()} Descomplica Dev Dan</p>
          <p>Desenvolvido com Next.js, TypeScript e propósito.</p>
          <a href={contact.githubUrl + "/portfolio-descomplicadevdan"} target="_blank" rel="noreferrer">
            portfolio@0.1.0 <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

