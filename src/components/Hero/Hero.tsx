import Image from "next/image";
import Link from "next/link";
import { CopyButton } from "@/components/CopyButton/CopyButton";
import { contact } from "@/config/contact";
import styles from "./Hero.module.css";

const socialLinks = [
  { label: "GitHub", type: "github", href: contact.githubUrl, external: true },
  { label: "LinkedIn", type: "linkedin", href: contact.linkedinUrl, external: true },
  { label: "WhatsApp", type: "whatsapp", href: contact.phone.whatsappUrl, external: true },
  { label: "E-mail", type: "email", href: null, external: false },
].filter((social) => social.href !== null);

function SocialIcon({ type }: { type: string }) {
  const paths: Record<string, string> = {
    github: "M8 0a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38v-1.49c-2.23.49-2.7-1.08-2.7-1.08-.37-.93-.9-1.18-.9-1.18-.73-.5.06-.49.06-.49.8.06 1.23.83 1.23.83.72 1.23 1.88.87 2.34.67.07-.52.28-.87.51-1.07-1.78-.2-3.65-.89-3.65-3.96 0-.88.31-1.59.83-2.15-.09-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.7 7.7 0 0 1 8 3.73a7.7 7.7 0 0 1 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.17 1.92.08 2.12.52.56.83 1.27.83 2.15 0 3.08-1.88 3.75-3.66 3.95.29.25.54.74.54 1.5v2.31c0 .21.15.46.55.38A8 8 0 0 0 8 0Z",
    linkedin: "M3.64 2A1.64 1.64 0 1 1 .36 2a1.64 1.64 0 0 1 3.28 0ZM.64 5.25h2.72V16H.64V5.25Zm4.43 0h2.61v1.47h.04c.36-.69 1.25-1.42 2.57-1.42 2.75 0 3.26 1.81 3.26 4.17V16h-2.72v-5.79c0-1.38-.03-3.16-1.93-3.16-1.93 0-2.22 1.5-2.22 3.06V16H5.07V5.25Z",
    whatsapp: "M13.6 2.32A7.85 7.85 0 0 0 1.24 11.8L.13 15.87l4.17-1.1A7.84 7.84 0 0 0 16 7.93a7.8 7.8 0 0 0-2.4-5.61ZM8.1 14.45a6.5 6.5 0 0 1-3.32-.91l-.24-.14-2.47.65.66-2.41-.16-.25a6.51 6.51 0 1 1 5.53 3.06Zm3.57-4.88c-.2-.1-1.16-.57-1.34-.64-.18-.07-.31-.1-.44.1-.13.19-.5.64-.62.77-.11.13-.23.15-.42.05-.2-.1-.83-.3-1.58-.98a5.9 5.9 0 0 1-1.1-1.37c-.11-.2-.01-.3.09-.4.09-.09.2-.23.3-.34.1-.11.13-.2.2-.33.06-.13.03-.25-.02-.35-.05-.1-.44-1.06-.6-1.45-.16-.38-.32-.33-.44-.34h-.37c-.13 0-.34.05-.52.24-.18.2-.68.67-.68 1.63s.7 1.89.8 2.02c.1.13 1.38 2.1 3.34 2.95.47.2.83.32 1.11.41.47.15.9.13 1.24.08.38-.06 1.16-.48 1.32-.94.16-.46.16-.86.12-.94-.05-.08-.18-.13-.38-.23Z",
    email: "M1.5 3h13A1.5 1.5 0 0 1 16 4.5v8a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5v-8A1.5 1.5 0 0 1 1.5 3Zm0 1a.5.5 0 0 0-.5.5v.38l7 4.2 7-4.2V4.5a.5.5 0 0 0-.5-.5h-13ZM15 6.05 8.26 10.1a.5.5 0 0 1-.52 0L1 6.05v6.45a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V6.05Z",
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 16 16">
      <path d={paths[type]} />
    </svg>
  );
}

const highlights = [
  {
    icon: "/assets/code-slash.svg",
    value: "10+",
    label: "Projetos concluídos",
  },
  {
    icon: "/assets/rocket-takeoff.svg",
    value: "100%",
    label: "Dedicação em cada linha de código",
  },
  {
    icon: "/assets/light-ideia.png",
    value: "Soluções",
    label: "Focadas em problemas reais",
  },
  {
    icon: "/assets/people-fill.svg",
    value: "Pessoas",
    label: "No centro de cada decisão",
  },
];

export function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.overlay} />
      <div className={styles.content}>
        <p className={styles.terminal}>descomplicadevdan@portfolio:~$</p>
        <h1 aria-label="Olá, eu sou Descomplica Dev Dan">
          <span className={styles.greeting} aria-hidden="true">Olá, eu sou</span>
          <span className={`${styles.nameLine} ${styles.firstNameLine}`} aria-hidden="true">Descomplica</span>
          <span className={styles.lastNameLine} aria-hidden="true">
            <span className={styles.lastNameText}>Dev Dan</span>
            <span className={styles.cursor}>|</span>
          </span>
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
          <Link className={styles.primaryButton} href="/projetos">
            Conheça meus projetos <span aria-hidden="true">→</span>
          </Link>
          <a className={styles.secondaryButton} href="#sobre">
            Sobre mim
            <Image src="/assets/person-fill.svg" alt="" width={18} height={18} />
          </a>
        </div>

        <div className={styles.socialArea}>
          <p>Conecte-se comigo</p>
          <div className={styles.socialLinks}>
            {socialLinks.map((social) => (
              <a
                href={social.href}
                key={social.label}
                aria-label={social.label}
                target={social.external ? "_blank" : undefined}
                rel={social.external ? "noreferrer" : undefined}
              >
                <SocialIcon type={social.type} />
              </a>
            ))}
            <CopyButton value={contact.email} label="Copiar e-mail" successLabel="E-mail copiado">
              <SocialIcon type="email" />
            </CopyButton>
          </div>
        </div>
      </div>

      <div className={styles.highlights} aria-label="Destaques profissionais">
        {highlights.map((highlight) => (
          <article className={styles.highlight} key={highlight.value}>
            <span className={styles.highlightIcon}>
              <Image src={highlight.icon} alt="" width={34} height={34} />
            </span>
            <div>
              <strong>{highlight.value}</strong>
              <p>{highlight.label}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
