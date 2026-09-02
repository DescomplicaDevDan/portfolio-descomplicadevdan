import Image from "next/image";
import styles from "./Hero.module.css";

const socialLinks = [
  { label: "GitHub", icon: "/assets/github-icon.png", href: "#" },
  { label: "LinkedIn", icon: "/assets/linkedin-icon.png", href: "#" },
  { label: "WhatsApp", icon: "/assets/wpp-icon.png", href: "#" },
  { label: "E-mail", icon: "/assets/email-icon.png", href: "#" },
];

export function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.overlay} />
      <div className={styles.content}>
        <p className={styles.terminal}>danilo@portfolio:~$</p>
        <h1>
          <span>Olá, eu sou</span>
          Danilo<span className={styles.cursor}>|</span>
        </h1>
        <p className={styles.role}>
          Desenvolvedor <strong>Web</strong> &amp; Analista de Sistemas
        </p>
        <p className={styles.description}>
          Transformo ideias em soluções digitais funcionais, unindo tecnologia,
          criatividade e propósito para resolver problemas e gerar valor para
          pessoas e negócios.
        </p>

        <div className={styles.buttons}>
          <a className={styles.primaryButton} href="#projetos">
            Conheça meus projetos <span aria-hidden="true">→</span>
          </a>
          <a className={styles.secondaryButton} href="#sobre">
            Sobre mim
            <Image src="/assets/person-fill.svg" alt="" width={18} height={18} />
          </a>
        </div>

        <div className={styles.socialArea}>
          <p>Conecte-se comigo</p>
          <div className={styles.socialLinks}>
            {socialLinks.map((social) => (
              <a href={social.href} key={social.label} aria-label={social.label}>
                <Image src={social.icon} alt="" width={24} height={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
