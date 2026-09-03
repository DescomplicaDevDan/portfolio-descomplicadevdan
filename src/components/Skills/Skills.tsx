"use client";

import type { CSSProperties, PointerEvent } from "react";
import { SkillsScene } from "./SkillsScene";
import styles from "./Skills.module.css";

const particles = Array.from({ length: 18 }, (_, index) => ({
  "--particle-left": `${(index * 17 + 7) % 96}%`,
  "--particle-delay": `${-(index % 7) * 0.9}s`,
  "--particle-duration": `${5.5 + (index % 5) * 0.8}s`,
  "--particle-size": `${24 + (index % 4) * 14}px`,
}) as CSSProperties);

export function Skills() {
  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
  }

  function resetPointer(event: PointerEvent<HTMLElement>) {
    event.currentTarget.style.setProperty("--pointer-x", "50%");
    event.currentTarget.style.setProperty("--pointer-y", "52%");
  }

  return <section className={styles.skills} id="skills" aria-labelledby="skills-title" onPointerMove={handlePointerMove} onPointerLeave={resetPointer}>
    <div className={styles.ambientBackground} aria-hidden="true">
      <div className={styles.dataParticles}>{particles.map((style, index) => <i key={index} style={style} />)}</div>
      <span className={styles.orbLeft} /><span className={styles.orbRight} />
    </div>
    <div className={styles.container}>
      <header className={styles.heading}>
        <p className={styles.eyebrow}>developer@portfolio:~$ skills <i /></p>
        <h2 id="skills-title">Tecnologias que uso para<br /><span>transformar ideias</span> em soluções.</h2>
      </header><SkillsScene />
    </div>
  </section>;
}
