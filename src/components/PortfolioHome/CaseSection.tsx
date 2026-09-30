import styles from "./PortfolioHome.module.css";

export function CaseSection() {
  return <section className={styles.section} id="case-nutricomp" aria-labelledby="case-title">
    <p className={styles.eyebrow}>Case principal · projeto freelance · desenvolvimento individual</p>
    <h2 id="case-title">Nutricomp: do catálogo <span>ao pedido.</span></h2>
    <p className={styles.lead}>Uma interface para escolher marmitas, aplicar regras de gramagem e preço, montar combos e preparar a mensagem para atendimento pelo WhatsApp.</p>
    <div className={styles.solutions}>
      <article className={styles.solution}><div><h3>Estado e persistência</h3><p>Context API compartilha o carrinho. LocalStorage mantém a seleção no navegador. Produto e gramagem identificam itens avulsos distintos.</p></div></article>
      <article className={styles.solution}><div><h3>Uma falha real no celular</h3><p>Um evento mousedown alterava o layout antes de concluir o clique no carrinho. A mudança para click foi acompanhada por um teste de quantidade e total.</p></div></article>
      <article className={styles.solution}><div><h3>Limites explícitos</h3><p>O checkout prepara uma mensagem. Não usa a API do WhatsApp, não processa pagamentos e não confirma o recebimento do pedido.</p></div></article>
    </div>
    <a className={styles.primary} href="https://github.com/DescomplicaDevDan/marmitas-app/blob/HEAD/docs/CASE.md" target="_blank" rel="noreferrer">Ler o case técnico ↗</a>
  </section>;
}
