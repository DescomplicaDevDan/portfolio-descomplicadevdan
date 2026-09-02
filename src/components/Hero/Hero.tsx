import Image from "next/image";
import styles from "./Hero.module.css";

const socialLinks = [
  { label: "GitHub", icon: "/assets/github-icon.png", href: "#" },
  { label: "LinkedIn", icon: "/assets/linkedin-icon.png", href: "#" },
  { label: "WhatsApp", icon: "/assets/wpp-icon.png", href: "#" },
  { label: "E-mail", icon: "/assets/email-icon.png", href: "#" },
];

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
        <h1>
          <span>Olá, eu sou</span>
          <span className={styles.nameLine}>Descomplica</span>
          <span className={styles.nameLine}>
            Dev Dan<span className={styles.cursor}>|</span>
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
