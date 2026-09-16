import Image from "next/image";
import Link from "next/link";
import { FiMonitor, FiSettings, FiTrendingUp } from "react-icons/fi";
import { contact } from "@/config/contact";
import { projects } from "@/config/projects";
import { BinaryBackground } from "./BinaryBackground";
import styles from "./PortfolioHome.module.css";

const solutions = [
  {
    title: "Quero apresentar meu negócio",
    description: "Um site profissional que explica seu valor e facilita o contato.",
    Icon: FiMonitor,
  },
  {
    title: "Quero organizar minha rotina",
    description: "Um sistema sob medida para tarefas e informações.",
    Icon: FiSettings,
  },
  {
    title: "Meu site precisa melhorar",
    description: "Mais clareza, velocidade e facilidade no celular.",
    Icon: FiTrendingUp,
  },
];

const benefits = [
  { title: "Mais clareza", description: "para seus clientes", Icon: FiMonitor },
  { title: "Mais praticidade", description: "na sua rotina", Icon: FiSettings },
  { title: "Feito para", description: "seu negócio", Icon: FiTrendingUp },
];

const projectPreviews = [
  {
    image: "/assets/projects/nutricomp/desktop.png",
    description: "Cardápio digital com combos, carrinho e pedidos pelo WhatsApp.",
  },
  {
    image: "/assets/projects/self-em-acao/inicio-sem-retrato.png",
    description: "Site para apresentar serviços de psicologia e facilitar o contato.",
  },
];

const steps = [
  { title: "Entendo sua necessidade", description: "Conversamos sobre seu objetivo e o que você precisa." },
  { title: "Planejamos a solução", description: "Definimos o melhor caminho para o projeto." },
  { title: "Desenvolvo e acompanho", description: "Você participa das decisões e acompanha a entrega." },
];

export function PortfolioHome() {
  return (
    <main className={styles.main} id="conteudo">
      <section className={styles.hero} id="inicio" aria-labelledby="home-title">
        <BinaryBackground />
        <div className={styles.heroContent}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.authority}>Danilo <span>•</span> Desenvolvedor web e analista de sistemas</p>
              <h1 id="home-title">
                Sites e sistemas que ajudam seu negócio a <span>vender, atender e trabalhar melhor.</span>
              </h1>
              <p className={styles.lead}>Crio soluções profissionais para apresentar seus serviços, receber contatos e simplificar sua rotina.</p>
              <a className={styles.primary} href={contact.phone.whatsappUrl} target="_blank" rel="noreferrer">
                Quero falar sobre meu projeto <span aria-hidden="true">↗</span>
              </a>
              <Link className={styles.textLink} href="/projetos">Ver projetos reais <span aria-hidden="true">→</span></Link>
              <p className={styles.reassurance}>Conversa inicial direta e sem linguagem técnica.</p>
            </div>
            <Image className={styles.portrait} src="/assets/photos/danilo-retrato.webp" alt="Danilo em seu ambiente de trabalho" width={1122} height={1402} sizes="(max-width: 760px) 100vw, 48vw" preload />
          </div>
          <div className={styles.benefits} aria-label="Benefícios">
            {benefits.map(({ title, description, Icon }) => (
              <div key={title}><Icon aria-hidden="true" /><p><strong>{title}</strong><span>{description}</span></p></div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.content}>
        <section className={styles.section} id="servicos" aria-labelledby="solutions-title">
          <p className={styles.eyebrow}>Escolha o que mais se parece com sua necessidade</p>
          <h2 id="solutions-title">O que você precisa <span>resolver?</span></h2>
          <div className={styles.solutions}>
            {solutions.map(({ title, description, Icon }) => (
              <article className={styles.solution} key={title}>
                <Icon aria-hidden="true" />
                <div><h3>{title}</h3><p>{description}</p><a href="#contato">Entender esta solução <span aria-hidden="true">→</span></a></div>
              </article>
            ))}
          </div>
          <aside className={styles.helper} aria-label="Ajuda para definir o projeto">
            <div><h3>Não sabe por onde começar?</h3><p>Eu ajudo você a definir o essencial antes de desenvolver.</p></div>
            <a className={styles.primary} href={contact.phone.whatsappUrl} target="_blank" rel="noreferrer">Conversar com Danilo <span aria-hidden="true">↗</span></a>
          </aside>
        </section>

        <section className={styles.section} id="projetos" aria-labelledby="projects-title">
          <p className={styles.eyebrow}>Projetos reais, apresentados pelo problema que resolvem</p>
          <div className={styles.sectionHeading}><h2 id="projects-title">Trabalho que você <span>pode ver.</span></h2><Link className={styles.textLink} href="/projetos">Ver todos os projetos <span aria-hidden="true">→</span></Link></div>
          <div className={styles.projects}>
            {projects.slice(0, 2).map((project, index) => (
              <article className={styles.project} key={project.title}>
                <div className={styles.projectImage}><span>Projeto real</span><Image src={projectPreviews[index].image} alt={`Captura do projeto ${project.title}`} width={1200} height={750} sizes="(max-width: 760px) 100vw, 42vw" /></div>
                <div className={styles.projectCopy}>
                  <div className={styles.projectTitle}><h3>{project.title}</h3><span data-status={project.status === "Publicado" ? "live" : "building"}>{project.status}</span></div>
                  <p>{projectPreviews[index].description}</p>
                  <div className={styles.tags}>{project.technologies.slice(0, 2).map((technology) => <span key={technology}>{technology}</span>)}</div>
                  <div className={styles.projectActions}>
                    {project.siteUrl && <a className={styles.primarySmall} href={project.siteUrl} target="_blank" rel="noreferrer">Visitar site <span aria-hidden="true">↗</span></a>}
                    <Link className={styles.secondarySmall} href="/projetos">Ver projeto</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className={styles.trust} id="sobre">
            <Image src="/assets/photos/danilo-desenvolvendo.webp" alt="Danilo desenvolvendo um projeto no computador" width={1536} height={1024} sizes="(max-width: 760px) 100vw, 45vw" />
            <div><h3>Você fala direto com <span>quem desenvolve.</span></h3><p>Sem intermediários: eu entendo a necessidade, planejo e desenvolvo a solução.</p></div>
          </div>
        </section>

        <section className={styles.section} id="processo" aria-labelledby="process-title">
          <div className={styles.process}>
            <Image src="/assets/photos/danilo-planejando.webp" alt="Danilo planejando as telas de um site" width={1536} height={1024} sizes="(max-width: 760px) 100vw, 50vw" />
            <div><p className={styles.eyebrow}>Um caminho simples e transparente</p><h2 id="process-title">Do primeiro contato <span>à entrega.</span></h2><ol className={styles.steps}>{steps.map((step, index) => <li key={step.title}><span>0{index + 1}</span><div><h3>{step.title}</h3><p>{step.description}</p></div></li>)}</ol></div>
          </div>
          <div className={styles.contact} id="contato">
            <div><h2>Tem uma ideia ou um problema para <span>resolver?</span></h2><p>Me conte em poucas palavras. Eu ajudo você a encontrar o próximo passo.</p></div>
            <div className={styles.contactActions}><a className={styles.primary} href={contact.phone.whatsappUrl} target="_blank" rel="noreferrer">Conversar com Danilo <span aria-hidden="true">↗</span></a><a href={`mailto:${contact.email}`}>Enviar e-mail</a><small>Sem formulário longo.</small></div>
          </div>
        </section>
      </div>
    </main>
  );
}
