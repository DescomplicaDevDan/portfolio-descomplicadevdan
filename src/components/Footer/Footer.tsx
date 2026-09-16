import Link from "next/link";
import { contact } from "@/config/contact";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p><strong>Danilo</strong><span>•</span> Descomplica Dev Dan</p>
        <nav aria-label="Redes profissionais">
          <a href={contact.githubUrl} target="_blank" rel="noreferrer">GitHub</a>
          <a href={contact.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>
          <Link href="/#inicio">Voltar ao início <span aria-hidden="true">↑</span></Link>
        </nav>
      </div>
    </footer>
  );
}
