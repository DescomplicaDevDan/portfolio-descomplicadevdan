import Image from "next/image";
import Link from "next/link";
import { contact } from "@/config/contact";
import { BinaryBackground } from "./BinaryBackground";
import styles from "./PortfolioHome.module.css";

export function HeroSection() {
  return <section className={styles.hero} id="inicio" aria-labelledby="home-title">
    <BinaryBackground />
    <div className={styles.heroContent}><div className={styles.heroGrid}>
      <div className={styles.heroCopy}>
        <p className={styles.authority}>Danilo · React · TypeScript · JavaScript</p>
        <h1 id="home-title">Desenvolvedor <span>Front-end Júnior</span></h1>
        <p className={styles.lead}>Desenvolvo interfaces web responsivas, com foco em regras de negócio, experiência do usuário e qualidade de código.</p>
        <Link className={styles.primary} href="/projetos">Ver projetos <span aria-hidden="true">→</span></Link>
        <a className={styles.textLink} href={contact.githubUrl} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        <p className={styles.reassurance}>Conheça o código, as decisões técnicas e os limites de cada projeto.</p>
      </div>
      <Image className={styles.portrait} src="/assets/photos/danilo-retrato.webp" alt="Danilo em seu ambiente de trabalho" width={1122} height={1402} sizes="(max-width: 760px) calc(100vw - 32px), 448px" preload />
    </div></div>
  </section>;
}
