# Descomplica Dev Dan — Front-end Júnior

Portfólio de Danilo, com foco em React, TypeScript e JavaScript. Apresenta projetos, decisões técnicas e limitações para avaliação profissional.

## Projetos e evidências

- **Nutricomp:** projeto freelance com catálogo, regras de gramagem, combos, carrinho persistente e preparação de mensagem para WhatsApp.
- **Motor de Busca:** fundamentos de algoritmos e recuperação de documentos com Python, Flask, TF-IDF e Trie.
- **Central de Chamados:** central interna de suporte em desenvolvimento, com layout e prévia do formulário de abertura de chamados.
- **Este portfólio:** Next.js, componentes de servidor para conteúdo, interação do menu no cliente, CSS Modules, testes de componentes e E2E.

## Organização

`PortfolioHome.tsx` compõe Hero, Projetos, Case, Stack, Sobre e Contato. Cada seção tem responsabilidade própria; dados compartilhados ficam em `src/config/` (contato, projetos, site e competências).

A home prioriza projetos e código. O case resume as decisões da Nutricomp e aponta para a documentação do repositório. As fotos usam `next/image`, dimensões e `sizes`. A animação respeita movimento reduzido.

## Executar e verificar

Use Node.js 22 e npm:

```bash
npm ci
npm run dev
```

Acesse http://localhost:3000. Para verificar:

```bash
npx playwright install chromium
npm run check
```

O comando executa lint, TypeScript, testes com cobertura, Playwright e build. Os testes axe verificam violações automáticas graves, sem garantir conformidade completa de acessibilidade.

## Metadados e publicação

Defina `NEXT_PUBLIC_SITE_URL` com a URL canônica de produção. Na Vercel, o fallback usa `VERCEL_PROJECT_PRODUCTION_URL` antes da URL de preview; localmente usa localhost. Canonical, Open Graph, sitemap e robots usam essa configuração.

A alteração no repositório não confirma publicação. Valide a URL e o build do provedor antes de divulgar.

## Manutenção

- Conteúdo profissional: `docs/POSICIONAMENTO.md`.
- Evidências por competência e roteiro de entrevista: `docs/COMPETENCIAS.md`.
- Links e dados dos projetos: `src/config/projects.ts`.
- Contatos: `src/config/contact.ts`.
- Verificações e pendências desta revisão: `docs/REVISAO.md`.
