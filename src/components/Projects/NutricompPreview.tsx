"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./NutricompPreview.module.css";

const screens = [
  { file: "desktop", title: "Explore o cardápio", width: 1917, height: 865 },
  { file: "mobile", title: "Cardápio no celular", width: 335, height: 755 },
  { file: "combo-desktop", title: "Monte seu combo", width: 1917, height: 863 },
  { file: "combo-mobile", title: "Personalize pelo celular", width: 333, height: 753 },
  { file: "pedido-desktop", title: "Revise seu pedido", width: 1877, height: 862 },
  { file: "checkout-mobile", title: "Finalize pelo celular", width: 335, height: 752 },
];
const source = (file: string) => `/assets/projects/nutricomp/${file}.png`;

export function NutricompPreview() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState(0);
  const screen = screens[selected];

  function openGallery() {
    setSelected(0);
    dialog.current?.showModal();
  }

  return (
    <div className={styles.preview}>
      <div className={styles.label}><span /> EXPERIÊNCIA RESPONSIVA</div>
      <div className={styles.composition}>
        <div className={styles.browser}>
          <div className={styles.toolbar}><span>● ● ●</span><span>nutricomp.com.br</span></div>
          <Image src={source("desktop")} width={1917} height={865} alt="Cardápio Nutricomp no desktop, com categorias, combos e carrinho" sizes="(max-width: 850px) 85vw, 550px" />
        </div>
        <div className={styles.phone}>
          <Image src={source("mobile")} width={335} height={755} alt="Cardápio Nutricomp adaptado ao celular" sizes="(max-width: 560px) 100px, 145px" />
        </div>
      </div>
      <div className={styles.caption}><p>Do cardápio ao pedido.<br /><span>Uma experiência em qualquer tela.</span></p><button type="button" onClick={openGallery}>Ver telas <span aria-hidden="true">↗</span></button></div>
      <dialog ref={dialog} className={styles.dialog} aria-labelledby="nutricomp-gallery-title" onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
        <div className={styles.dialogContent}>
          <header className={styles.dialogHeader}><div><p>Nutricomp · {selected + 1} / {screens.length}</p><h2 id="nutricomp-gallery-title">{screen.title}</h2></div><button type="button" onClick={() => dialog.current?.close()} autoFocus>Fechar <span aria-hidden="true">×</span></button></header>
          <div className={styles.stage}><Image src={source(screen.file)} width={screen.width} height={screen.height} alt={screen.title} sizes="90vw" /><a href={source(screen.file)} target="_blank" rel="noopener noreferrer">Abrir imagem original ↗</a></div>
          <nav className={styles.tabs} aria-label="Telas da Nutricomp">{screens.map((item, index) => <button type="button" key={item.file} aria-pressed={index === selected} onClick={() => setSelected(index)}>{item.title}</button>)}</nav>
        </div>
      </dialog>
    </div>
  );
}
