import { HeroSection } from "./HeroSection";
import { ProjectsSection } from "./ProjectsSection";
import { CaseSection } from "./CaseSection";
import { SkillsSection } from "./SkillsSection";
import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";
import styles from "./PortfolioHome.module.css";

export function PortfolioHome() {
  return <main className={styles.main} id="conteudo"><HeroSection /><div className={styles.content}>
    <ProjectsSection /><CaseSection /><SkillsSection /><AboutSection /><ContactSection />
  </div></main>;
}
