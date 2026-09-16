"use client";
import { useState } from "react";
import styles from "./PortfolioHome.module.css";
const columns = Array.from({ length: 18 }, (_, i) => {
  const digits = Array.from({ length: 45 }, (_, d) => `<text x="3" y="${18 + d * 26}">${(d * 7 + i * 3 + Math.floor(d / 3)) % 2}</text>`).join("");
  return `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="1170"><g fill="#42e862" font-family="monospace" font-size="13">${digits}</g></svg>`)}")`;
});
export function BinaryBackground() {
  const [paused, setPaused] = useState(false);
  return <><div className={styles.binary} aria-hidden="true" data-paused={paused}>{columns.map((backgroundImage, i) => <span key={i} style={{ left: `${i * 5.8}%`, backgroundImage, animationDelay: `${-i * 2.7}s`, animationDuration: `${24 + i % 5 * 3}s` }} />)}</div><button className={styles.motionToggle} type="button" aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? "Retomar animação" : "Pausar animação"}</button></>;
}
