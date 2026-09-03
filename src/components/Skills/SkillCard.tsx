import { skills } from "./skills.config";
import styles from "./Skills.module.css";

export function SkillCard({ index }: { index: number }) {
  const skill = skills[index];
  const { Icon } = skill;

  return (
    <li className={`${styles.skillItem} ${styles[skill.className]}`}>
      <Icon className={styles.icon} aria-hidden="true" />
      <span>{skill.name}</span>
    </li>
  );
}
