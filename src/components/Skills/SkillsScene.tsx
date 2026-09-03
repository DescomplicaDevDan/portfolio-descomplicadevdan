import { SkillCard } from "./SkillCard";
import { skills } from "./skills.config";
import styles from "./Skills.module.css";

export function SkillsScene() {
  return (
    <ul className={styles.skillsRow} aria-label="Tecnologias e ferramentas">
      {skills.map((skill, index) => <SkillCard key={skill.name} index={index} />)}
    </ul>
  );
}
