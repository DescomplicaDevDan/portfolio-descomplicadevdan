import { skills, practices } from "@/config/skills";
import styles from "./PortfolioHome.module.css";
export function SkillsSection() {
  return <section className={styles.section} id="stack" aria-labelledby="stack-title">
    <h2 id="stack-title">Stack e <span>como desenvolvo.</span></h2>
    <div className={styles.tags}>{skills.map(skill => <span key={skill}>{skill}</span>)}</div>
    <div className={styles.solutions} id="processo">{practices.map(item => <article className={styles.solution} key={item.title}><div><h3>{item.title}</h3><p>{item.description}</p></div></article>)}</div>
  </section>;
}
