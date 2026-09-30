import { contact } from "@/config/contact";
import styles from "./PortfolioHome.module.css";
export function ContactSection() {
  return <section className={styles.section} id="contato" aria-labelledby="contact-title"><div className={styles.contact}>
    <div><h2 id="contact-title">Vamos <span>conversar?</span></h2><p>Entre em contato para conversar sobre oportunidades em Front-end e sobre os projetos apresentados.</p></div>
    <div className={styles.contactActions}><a className={styles.primary} href={contact.phone.whatsappUrl} target="_blank" rel="noreferrer">Conversar com Danilo ↗</a><a href={`mailto:${contact.email}`}>Enviar e-mail</a></div>
  </div></section>;
}
