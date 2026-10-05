import Image from "next/image";
import styles from "./NutricompPreview.module.css";

const nutricompScreens = [
  { file: "desktop", title: "Explore o cardápio", width: 1917, height: 865 },
  { file: "mobile", title: "Cardápio no celular", width: 335, height: 755 },
];
const motorScreens = [
  { file: "resultados", title: "Resultados por relevância", width: 1912, height: 908 },
  { file: "mobile", title: "Pesquisa no celular", width: 353, height: 798 },
];

export function ProjectScreensPreview({ project = "nutricomp" }: { project?: "nutricomp" | "motor-busca" | "central-de-chamados" }) {
  if (project === "central-de-chamados") {
    return (
      <div className={styles.preview}>
        <div className={styles.label}><span /> EM DESENVOLVIMENTO</div>
        <div className={styles.desktopOnly}>
          <div className={styles.browser}>
            <div className={styles.toolbar}><span>● ● ●</span><span>Central de Chamados · Projeto</span></div>
            <Image
              src="/assets/projects/central-de-chamados/desktop.png"
              width={1912}
              height={908}
              alt="Central de Chamados em desenvolvimento: visão geral com menu lateral e formulário de abertura de chamado"
              sizes="(max-width: 850px) 85vw, 550px"
              quality={90}
            />
          </div>
        </div>
        <div className={styles.caption}><p>Da solicitação à solução.<br /><span>Demonstração ainda não publicada.</span></p></div>
      </div>
    );
  }
  const isMotor = project === "motor-busca";
  const screens = isMotor ? motorScreens : nutricompScreens;
  const name = isMotor ? "Motor de Busca" : "Nutricomp";
  const desktop = screens[0];
  const mobile = screens.find((item) => item.file === "mobile");
  const source = (file: string) => `/assets/projects/${project}/${file}.png`;
  return (
    <div className={styles.preview}>
      <div className={styles.label}><span /> EXPERIÊNCIA RESPONSIVA</div>
      <div className={styles.composition}>
        <div className={styles.browser}>
          <div className={styles.toolbar}><span>● ● ●</span><span>{isMotor ? "Motor de Busca · Python / Flask" : "nutricomp.com.br"}</span></div>
          <Image src={source(desktop.file)} width={desktop.width} height={desktop.height} alt={`${name}: ${desktop.title}`} sizes="(max-width: 850px) 85vw, 550px" quality={90} />
        </div>
        {mobile && <div className={styles.phone}>
          <div className={styles.phoneTop} aria-hidden="true"><span /><i /></div>
          <div className={styles.phoneScreen}>
          <Image src={source("mobile")} width={mobile.width} height={mobile.height} alt={`${name} no celular`} sizes="(max-width: 560px) 110px, 155px" quality={90} />
          </div>
          <div className={styles.phoneBottom} aria-hidden="true"><span /></div>
        </div>}
      </div>
      <div className={styles.caption}><p>{isMotor ? "Da pesquisa ao resultado." : "Do cardápio ao pedido."}<br /><span>Uma experiência em qualquer tela.</span></p></div>
    </div>
  );
}
