import Image from "next/image";
import Link from "next/link";
import { FiMonitor, FiSettings, FiTrendingUp } from "react-icons/fi";
import { contact } from "@/config/contact";
import { projects } from "@/config/projects";
import { CopyButton } from "@/components/CopyButton/CopyButton";
import { BinaryBackground } from "./BinaryBackground";
import styles from "./PortfolioHome.module.css";
const services = [
  { title: "Sites profissionais", text: "Apresente seus serviços e facilite o contato com seus clientes.", Icon: FiMonitor },
  { title: "Sistemas sob medida", text: "Organize informações e simplifique as tarefas do seu negócio.", Icon: FiSettings },
  { title: "Melhorias em sites", text: "Torne seu site mais claro, rápido e fácil de usar no celular e no computador.", Icon: FiTrendingUp },
];
const steps = [
  { title: "Conversamos sobre sua ideia", text: "Entendo o que você precisa e tiro suas dúvidas, sem complicar." },
  { title: "Planejamos a solução", text: "Definimos juntos o que será feito, o prazo e o investimento." },
  { title: "Desenvolvo e acompanho a entrega", text: "Você acompanha o projeto e recebe orientação para usar a solução." },
];
const previews = [
  { image: "/assets/projects/nutricomp/desktop.png", text: "Cardápio digital com montagem de combos e pedidos pelo WhatsApp." },
  { image: "/assets/projects/self-em-acao/inicio-sem-retrato.png", text: "Site para apresentar serviços de psicologia e facilitar o contato." },
];
export function PortfolioHome() {
  return <main className={styles.main} id="conteudo">
    <BinaryBackground />
    <div className={styles.content}>
      <section className={styles.hero} id="inicio" aria-labelledby="home-title"><div>
        <p className={styles.eyebrow}>Olá, eu sou o Danilo.</p>
        <h1 id="home-title">Crio sites e sistemas web para o <span>seu negócio.</span></h1>
        <p className={styles.lead}>Apresente seus serviços, facilite o contato com clientes e simplifique tarefas do dia a dia.</p>
        <div className={styles.actions}><a className={styles.primary} href={contact.phone.whatsappUrl} target="_blank" rel="noreferrer">Conversar sobre meu projeto <span aria-hidden="true">↗</span></a><Link className={styles.secondary} href="/projetos">Ver projetos <span aria-hidden="true">→</span></Link></div>
        <p className={styles.caption}>Desenvolvedor web e analista de sistemas</p>
      </div><Image className={styles.portrait} src="/assets/photos/danilo-retrato.webp" alt="Danilo sentado em seu ambiente de trabalho" width={1122} height={1402} sizes="(max-width: 760px) 90vw, 40vw" preload /></section>
      <section className={styles.section} id="servicos" aria-labelledby="services-title"><p className={styles.eyebrow}>Do que você precisa?</p><h2 id="services-title">O que posso fazer pelo <span>seu negócio</span></h2><div className={styles.services}>{services.map(({ title, text, Icon }) => <article className={styles.card} key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className={styles.section} id="projetos" aria-labelledby="projects-title"><div className={styles.sectionHeading}><div><p className={styles.eyebrow}>Projetos selecionados</p><h2 id="projects-title">Veja isso <span>na prática</span></h2></div><Link className={styles.textLink} href="/projetos">Todos os projetos →</Link></div><div className={styles.projects}>{projects.slice(0, 2).map((project, i) => <article className={styles.project} key={project.title}><Link href="/projetos" aria-label={`Conhecer o projeto ${project.title}`}><Image src={previews[i].image} alt={`Captura do site ${project.title}`} width={1200} height={750} sizes="(max-width: 760px) 90vw, 45vw" /></Link><div className={styles.projectCopy}><p className={styles.status}>{project.status}</p><h3>{project.title}</h3><p>{previews[i].text}</p><Link className={styles.textLink} href="/projetos">Conhecer o projeto →</Link></div></article>)}</div></section>
      <section className={styles.section} id="sobre" aria-labelledby="about-title"><div className={styles.split}><Image className={styles.workPhoto} src="/assets/photos/danilo-desenvolvendo.webp" alt="Danilo trabalhando em um projeto no computador" width={1536} height={1024} sizes="(max-width: 760px) 90vw, 45vw" /><div><p className={styles.eyebrow}>Quem vai cuidar do seu projeto</p><h2 id="about-title">Você fala direto com <span>quem desenvolve.</span></h2><p className={styles.lead}>Sou Danilo, desenvolvedor web e analista de sistemas. Primeiro entendo sua necessidade. Depois, transformo essa ideia em uma solução simples de usar.</p><p className={styles.body}>Meu objetivo é facilitar sua rotina com tecnologia bem aplicada e uma comunicação clara em cada etapa.</p></div></div><h3 className={styles.processTitle}>Como vamos trabalhar</h3><ol className={styles.steps}>{steps.map((step, i) => <li key={step.title}><span className={styles.number}>0{i + 1}</span><div><h4>{step.title}</h4><p>{step.text}</p></div></li>)}</ol></section>
      <section className={`${styles.section} ${styles.split}`} id="contato" aria-labelledby="contact-title"><div><p className={styles.eyebrow}>Vamos conversar</p><h2 id="contact-title">Vamos tirar sua <span>ideia do papel?</span></h2><p className={styles.lead}>Me conte o que você precisa. Vamos conversar sobre os próximos passos.</p><div className={styles.contactActions}><a className={styles.primary} href={contact.phone.whatsappUrl} target="_blank" rel="noreferrer">Falar pelo WhatsApp ↗</a><a className={styles.textLink} href={`mailto:${contact.email}`}>Prefiro enviar um e-mail</a><CopyButton value={contact.email} label="Copiar e-mail" successLabel="E-mail copiado" className={styles.copy}>Copiar e-mail</CopyButton></div><p className={styles.body}>Pode ser um novo site, um sistema ou uma melhoria no que você já tem.</p></div><Image className={styles.workPhoto} src="/assets/photos/danilo-planejando.webp" alt="Danilo planejando as telas de um site em um caderno" width={1536} height={1024} sizes="(max-width: 760px) 90vw, 45vw" /></section>
    </div>
  </main>;
}

