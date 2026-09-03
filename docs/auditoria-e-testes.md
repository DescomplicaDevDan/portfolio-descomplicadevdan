# Auditoria inicial e estratégia de testes

Data da auditoria: 2 de setembro de 2026.

## Resumo executivo

O projeto está estruturalmente saudável: lint, TypeScript e build de produção passam, não há vulnerabilidades conhecidas nas dependências mantidas e as rotas `/` e `/projetos` são pré-renderizadas como conteúdo estático.

Os principais riscos atuais são funcionais e de experiência: existem destinos de navegação ainda não implementados, os canais sociais usam links provisórios e o título principal é cortado em telas de 390 px após o fim da animação.

## Resultado da auditoria

| Prioridade | Área | Evidência | Impacto | Próxima ação |
| --- | --- | --- | --- | --- |
| Alta | Responsividade | `Descomplica` mede cerca de 460 px em viewport útil de 375 px e é cortado pelo `overflow: hidden` | Nome profissional incompleto em celulares | Ajustar tipografia/animação do Hero e criar regressão visual |
| Alta | Links sociais | GitHub, LinkedIn, WhatsApp e e-mail usam `href="#"` | CTAs não levam a nenhum canal real | Inserir URLs reais e testar destino/protocolo |
| Alta | Navegação | `#experiencias` e `#contato` não existem; “Vamos conversar” também aponta para contato inexistente | Links não executam a ação prometida | Criar as seções ou ocultar temporariamente os links |
| Média | Tema | O controle muda o Header e variáveis globais, mas as seções mantêm fundos escuros fixos | Tema claro visualmente inconsistente | Definir tokens de superfície e aplicar em todas as seções |
| Média | Menu móvel | Menu abre e bloqueia o scroll, mas o conteúdo de fundo continua exposto à árvore de acessibilidade e não há fechamento por `Escape` | Navegação por teclado/leitor de tela pode escapar do menu | Implementar gerenciamento de foco e `Escape` |
| Média | Build | `next/font/google` precisa de rede durante o build | Builds offline/restritos falham | Considerar fonte local com `next/font/local` |
| Baixa | Next.js | O servidor avisa que `scroll-behavior: smooth` exige `data-scroll-behavior="smooth"` no `<html>` | Ruído de diagnóstico e transições menos previsíveis | Adicionar o atributo recomendado pelo Next.js |
| Média | Conteúdo | A página de projetos contém apenas cases demonstrativos | Portfólio ainda não prova entregas reais | Substituir cards por projetos e links reais |
| Baixa | Assets | Há PNGs sociais de 1,1–1,5 MB sem uso; o Hero PNG tem cerca de 2,25 MB | Repositório maior e oportunidade de otimização | Remover assets órfãos e avaliar AVIF/WebP para o Hero |

## Verificações executadas

| Verificação | Resultado |
| --- | --- |
| `npm run lint` | Aprovado |
| `npm run typecheck` | Aprovado |
| `next build --webpack` | Aprovado quando o Google Fonts está acessível |
| `npm audit` antes da suíte | 0 vulnerabilidades |
| Inspeção desktop | Sem overflow horizontal; navegação e Hero carregam |
| Inspeção mobile 390 × 844 | Menu funciona; título principal é cortado |
| Console do navegador | Sem erros ou avisos registrados |

## Resultado da primeira suíte

Execução final realizada em 2 de setembro de 2026:

| Grupo | Resultado |
| --- | --- |
| ESLint | Aprovado, sem erros |
| TypeScript | Aprovado, sem erros |
| Vitest/Testing Library | 12 de 12 testes aprovados em 7 arquivos |
| Cobertura de linhas | 84,29% |
| Cobertura de statements | 82,01% |
| Cobertura de funções | 88,46% |
| Cobertura de branches | 78% |
| Playwright | 8 de 8 cenários concluídos |
| Acessibilidade axe | `/` e `/projetos` sem violações graves/críticas após hidratação |
| Vulnerabilidades npm | 0 conhecidas após remoção do Lighthouse CI |

Dos oito cenários Playwright, quatro registram defeitos conhecidos como falhas esperadas: destinos internos ausentes, links sociais provisórios, título mobile cortado e uso de `aria-label` no `<pre>` sem papel ARIA explícito. Eles permanecem visíveis no relatório e devem virar regressões obrigatórias quando cada correção for implementada.

Nota: a leitura posterior do log de desenvolvimento encontrou o aviso específico do Next.js sobre `data-scroll-behavior="smooth"`, registrado acima. Não houve exceção de JavaScript da aplicação.

O primeiro teste de Lighthouse CI foi descartado porque a dependência `@lhci/cli` introduziu 13 vulnerabilidades transitivas, sendo 7 altas. Ela foi removida e a auditoria voltou a zero vulnerabilidades. Métricas Lighthouse podem ser executadas isoladamente, sem fixar essa árvore vulnerável no projeto, até a cadeia receber correções.

## Estratégia adotada

| Camada | Ferramenta | Objetivo | Relatório |
| --- | --- | --- | --- |
| Unidade/componente | Vitest + React Testing Library | Semântica, renderização e interações dos componentes | terminal e `coverage/` |
| Fluxos reais | Playwright | Navegação, persistência do tema e comportamento no navegador | `playwright-report/` e `reports/playwright-results.json` |
| Acessibilidade | axe-core integrado ao Playwright | Violações WCAG automatizáveis de impacto grave/crítico | incluído no relatório Playwright |
| Qualidade estática | ESLint + TypeScript | Regressões de código e tipos | terminal/CI |
| Build | Next.js | Compatibilidade de produção e pré-renderização | terminal/CI |

Vitest foi escolhido no lugar de Jest para esta base nova por ser leve, moderno e estar em forte crescimento no ecossistema. Playwright cobre Chromium, Firefox e WebKit; a primeira execução local usa Chromium para feedback rápido. O pipeline pode ser expandido para os três navegadores quando os fluxos crescerem.

## Comandos

```bash
npm run lint
npm run typecheck
npm test
npm run test:watch
npm run test:coverage
npm run test:e2e
npm run test:e2e:ui
npm run test:all
```

O comando `typecheck` executa `next typegen` antes do TypeScript. Essa ordem é necessária em ambientes limpos de CI porque helpers globais como `LayoutProps` são gerados pelo Next.js e não existem antes de `next dev`, `next build` ou `next typegen`.

## Política de resultados

- Testes novos devem descrever comportamento do usuário, não detalhes internos de implementação.
- Defeitos conhecidos ficam como falhas esperadas no Playwright: são visíveis no relatório, mas não tornam a suíte instável.
- Uma correção remove o marcador de falha esperada e transforma o caso em teste de regressão obrigatório.
- Falhas E2E preservam screenshot, vídeo e trace em `test-results/`.
- A cobertura inicial exige 70% de linhas, funções e statements, além de 60% de branches. Os limites devem subir gradualmente com o produto.
- O relatório HTML do Playwright e a cobertura são publicados como artefatos por 14 dias no GitHub Actions.

## Ordem recomendada de correção

1. Corrigir o corte do nome no Hero mobile.
2. Inserir contatos e URLs reais.
3. Criar ou remover temporariamente os links para seções ausentes.
4. Completar o tema claro ou remover o seletor até ele estar pronto.
5. Melhorar a acessibilidade do menu móvel.
6. Substituir os projetos demonstrativos por cases reais.
7. Otimizar imagens e tornar as fontes independentes de rede.
