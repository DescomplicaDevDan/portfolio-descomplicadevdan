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

const selfScreens = [
  { file: "inicio-sem-retrato", title: "Apresentação da Self em Ação", width: 1864, height: 844 },
];

export function ProjectScreensPreview({ project = "nutricomp" }: { project?: "nutricomp" | "motor-busca" | "self-em-acao" }) {
  const isSelf = project === "self-em-acao";
  const isMotor = project === "motor-busca";
  const screens = isSelf ? selfScreens : isMotor ? motorScreens : nutricompScreens;
  const name = isSelf ? "Self em Ação" : isMotor ? "Motor de Busca" : "Nutricomp";
  const desktop = screens[0];
  const mobile = screens.find((item) => item.file === "mobile");
  const source = (file: string) => `/assets/projects/${project}/${file}.png`;
  return (
    <div className={styles.preview}>
      <div className={styles.label}><span /> {isSelf ? "EM DESENVOLVIMENTO" : "EXPERIÊNCIA RESPONSIVA"}</div>
      <div className={`${styles.composition} ${isSelf ? styles.desktopOnly : ""}`}>
        <div className={styles.browser}>
          <div className={styles.toolbar}><span>● ● ●</span><span>{isSelf ? "Self em Ação · Prévia" : isMotor ? "Motor de Busca · Python / Flask" : "nutricomp.com.br"}</span></div>
          <Image src={source(desktop.file)} width={desktop.width} height={desktop.height} alt={`${name}: ${desktop.title}`} sizes="(max-width: 850px) 85vw, 550px" />
        </div>
        {mobile && <div className={styles.phone}>
          <div className={styles.phoneTop} aria-hidden="true"><span /><i /></div>
          <div className={styles.phoneScreen}>
          <Image src={source("mobile")} width={mobile.width} height={mobile.height} alt={`${name} no celular`} sizes="(max-width: 560px) 110px, 155px" />
          </div>
          <div className={styles.phoneBottom} aria-hidden="true"><span /></div>
        </div>}
      </div>
      <div className={styles.caption}><p>{isSelf ? "Uma presença digital com identidade." : isMotor ? "Da pesquisa ao resultado." : "Do cardápio ao pedido."}<br /><span>{isSelf ? "Em desenvolvimento · retrato substituído." : "Uma experiência em qualquer tela."}</span></p></div>
    </div>
  );
}
