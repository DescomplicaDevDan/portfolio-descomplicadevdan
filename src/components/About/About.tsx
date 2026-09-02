import Image from "next/image";
import { CodeTerminal } from "./CodeTerminal";
import styles from "./About.module.css";

const specialties = [
  {
    icon: "/assets/code-slash.svg",
    title: "Desenvolvimento Web",
    description: "Interfaces modernas, rápidas e responsivas, pensadas para pessoas reais.",
  },
  {
    icon: "/assets/light-ideia.png",
    title: "Análise de Sistemas",
    description: "Soluções bem estruturadas, da compreensão do problema até a entrega.",
  },
  {
    icon: "/assets/rocket-takeoff.svg",
    title: "Evolução Contínua",
    description: "Tecnologia aplicada com curiosidade, consistência e foco em resultados.",
  },
];

function createBinaryColumn(seed: number) {
  let value = seed * 7919 + 104729;
  const length = 22 + (seed % 13);

  return Array.from({ length }, () => {
    value = (value * 48271) % 2147483647;
    return value % 2;
  }).join("\n");
}

const binaryColumns = Array.from({ length: 28 }, (_, index) =>
  createBinaryColumn(index + 1),
);

export function About() {
  return (
    <section className={styles.about} id="sobre" aria-labelledby="about-title">
      <div className={styles.matrixRain} aria-hidden="true">
        {binaryColumns.map((column, index) => (
          <span key={index}>{column}</span>
        ))}
      </div>
      <div className={styles.container}>
        <div className={styles.mainGrid}>
          <div className={styles.leftColumn}>
            <div className={styles.heading}>
              <p className={styles.eyebrow}>01. sobre_mim</p>
              <h2 id="about-title">Tecnologia com propósito<span>.</span></h2>
              <p>
                Gosto de transformar desafios complexos em experiências digitais simples,
                funcionais e humanas.
              </p>
            </div>

            <div className={styles.copy}>
              <p>
                Sou <strong>Descomplica Dev Dan</strong>, desenvolvedor web e analista de
                sistemas. Minha jornada é movida pela curiosidade e pela vontade de usar
                tecnologia para resolver problemas que realmente importam.
              </p>
              <p>
                Uno pensamento analítico, criatividade e atenção aos detalhes para criar
                soluções digitais que sejam fáceis de usar, sustentáveis e alinhadas aos
                objetivos de cada projeto.
              </p>
              <a href="#contato" className={styles.contactLink}>
                Vamos conversar <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className={styles.codeCard} aria-label="Resumo em formato de código">
            <div className={styles.codeHeader}>
              <div><span /><span /><span /></div>
              <p>about.ts</p>
              <span>⌁</span>
            </div>
            <CodeTerminal />
          </div>
        </div>

        <div className={styles.specialties}>
          {specialties.map((specialty) => (
            <article className={styles.specialty} key={specialty.title}>
              <span className={styles.icon}>
                <Image src={specialty.icon} alt="" width={28} height={28} />
              </span>
              <div>
                <h3>{specialty.title}</h3>
                <p>{specialty.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
