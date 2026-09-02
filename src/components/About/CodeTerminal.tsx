"use client";

import { useEffect, useState } from "react";
import styles from "./About.module.css";

const snippets = [
  `const developer = {
  nome: "Dev Dan",
  perfil: "curioso e criativo",
  foco: ["experiência", "qualidade", "propósito"],
  status: "sempre evoluindo"
};`,
  `function criarSolucao(desafio: Desafio) {
  const ideia = entender(desafio);
  const codigo = transformar(ideia);

  return entregar(codigo, {
    simples: true,
    humano: true
  });
}`,
  `const impacto = tecnologia
  .comCriatividade()
  .comProposito()
  .paraPessoas();

console.log(impacto);
// soluções que fazem sentido`,
];

const keywords = new Set(["const", "function", "return"]);
const properties = new Set(["nome", "perfil", "foco", "status", "simples", "humano"]);
const functions = new Set([
  "criarSolucao",
  "entender",
  "transformar",
  "entregar",
  "comCriatividade",
  "comProposito",
  "paraPessoas",
  "log",
]);

function highlightCode(code: string) {
  const tokenPattern = /(\/\/[^\n]*|"[^"\n]*"?|\b(?:const|function|return|true|false)\b|\b[A-Za-z_$][\w$]*(?=\s*[:(])|\b\d+\b)/g;

  return code.split(tokenPattern).map((token, index) => {
    let className: string | undefined;

    if (token.startsWith("//")) className = styles.codeComment;
    else if (token.startsWith('"')) className = styles.codeString;
    else if (keywords.has(token)) className = styles.codeKeyword;
    else if (token === "true" || token === "false") className = styles.codeBoolean;
    else if (properties.has(token)) className = styles.codeProperty;
    else if (functions.has(token)) className = styles.codeFunction;
    else if (/^\d+$/.test(token)) className = styles.codeNumber;

    return className ? <span className={className} key={index}>{token}</span> : token;
  });
}

export function CodeTerminal() {
  const [displayedCode, setDisplayedCode] = useState("");

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let timer: number;

    if (reduceMotion) {
      timer = window.setTimeout(() => setDisplayedCode(snippets[0]), 0);
      return () => window.clearTimeout(timer);
    }

    let snippetIndex = 0;
    let characterIndex = 0;
    let isDeleting = false;

    function animate() {
      const currentSnippet = snippets[snippetIndex];

      if (isDeleting) {
        characterIndex -= 1;
        setDisplayedCode(currentSnippet.slice(0, characterIndex));

        if (characterIndex === 0) {
          isDeleting = false;
          snippetIndex = (snippetIndex + 1) % snippets.length;
          timer = window.setTimeout(animate, 360);
          return;
        }

        timer = window.setTimeout(animate, 12);
        return;
      }

      characterIndex += 1;
      setDisplayedCode(currentSnippet.slice(0, characterIndex));

      if (characterIndex === currentSnippet.length) {
        isDeleting = true;
        timer = window.setTimeout(animate, 1800);
        return;
      }

      timer = window.setTimeout(animate, 22);
    }

    timer = window.setTimeout(animate, 350);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <pre className={styles.animatedCode} aria-label="Código sendo digitado">
      <code>{highlightCode(displayedCode)}<span className={styles.codeCursor} aria-hidden="true">|</span></code>
    </pre>
  );
}
