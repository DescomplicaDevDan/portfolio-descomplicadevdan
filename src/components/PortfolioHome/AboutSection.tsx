import styles from "./PortfolioHome.module.css";
export function AboutSection() {
  return <section className={styles.section} id="sobre" aria-labelledby="about-title">
    <h2 id="about-title">Sobre <span>mim.</span></h2>
    <p className={styles.lead}>Sou Danilo, desenvolvedor Front-end Júnior. Meu foco é construir interfaces com React e TypeScript e entender as regras de negócio por trás de cada interação.</p>
    <p className={styles.lead}>A Nutricomp reúne minha experiência em um projeto freelance. O portfólio demonstra a organização de uma aplicação Next.js; o Motor de Busca complementa essa trajetória com Python, algoritmos e indexação.</p>
  </section>;
}
