# Descomplica Dev Dan — Portfólio

Portfólio profissional de Danilo, desenvolvedor web e analista de sistemas. O site apresenta sua atuação, tecnologias, formas de contato e três projetos reais.

## O que está disponível

- Página inicial com apresentação, sobre, skills e contato.
- Página de projetos com capturas, tecnologias, status e links externos.
- Navegação responsiva para desktop e celular.
- Formulário que prepara uma mensagem e abre o WhatsApp para confirmação.
- Links para GitHub, LinkedIn e WhatsApp.
- Ações para copiar e-mail e telefone.
- Suporte a `prefers-reduced-motion`.
- Metadados para mecanismos de busca e compartilhamento social.
- `robots.txt` e `sitemap.xml` gerados pelo Next.js.

## Projetos apresentados

| Projeto | Status | Tecnologias | Links |
| --- | --- | --- | --- |
| Nutricomp — Marmitas App | Publicado | React, TypeScript, Tailwind CSS e Vite | Site e GitHub |
| Self em Ação | Em desenvolvimento | Next.js, React, TypeScript e Tailwind CSS | GitHub |
| Motor de Busca | Projeto didático publicado | Python, Flask, TF-IDF e Trie | Site e GitHub |

## Tecnologias

- Next.js 16 com App Router
- React 19
- TypeScript
- CSS Modules
- Vitest e React Testing Library
- Playwright e axe-core
- ESLint

## Executar localmente

Requer Node.js 22 ou uma versão compatível com o Next.js usado pelo projeto.

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## URL pública

Em produção, a aplicação usa automaticamente a URL fornecida pela Vercel. Em outro provedor, configure:

```env
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com
```

Essa variável é usada nos links canônicos, no sitemap e no arquivo de robots. Durante o desenvolvimento, o fallback é `http://localhost:3000`.

## Qualidade

```bash
npm run lint
npm run typecheck
npm run test:coverage
npm run build
npm run test:e2e
```

O comando abaixo executa todas as verificações:

```bash
npm run check
```

### O que é testado

- **Componentes e integração:** conteúdo principal, navegação, menu, projetos, canais de contato, geração da mensagem do WhatsApp, cópia para a área de transferência, movimento reduzido e interação da seção de skills.
- **Fluxos E2E:** navegação da Home para Projetos, menu móvel operado por teclado, bloqueio e restauração da rolagem, validação do formulário e redirecionamento para o WhatsApp.
- **Responsividade:** o título principal é medido em viewport de 390 px para evitar corte em celulares.
- **Acessibilidade:** semântica dos controles e análise automática com `axe-core` nas rotas `/` e `/projetos`, bloqueando violações `serious` e `critical` das regras WCAG configuradas.
- **SEO técnico:** título, descrição, canonical, Open Graph, Twitter Card, `robots.txt` e `sitemap.xml`.
- **Links de projetos:** destinos publicados, abertura em nova aba e atributos de segurança.

Os testes unitários e de integração usam Vitest, Testing Library e `jsdom`. Os testes no navegador usam Playwright com Chromium. Os limites mínimos de cobertura são 70% para linhas, funções e statements, e 60% para branches.

O build de produção usa o compilador Webpack suportado pelo Next.js para manter a execução consistente no Windows e no CI.

Testes automáticos de acessibilidade não substituem uma revisão manual com teclado, ampliação e leitor de tela.

## Estrutura principal

```text
src/
├── app/          # Rotas, layout e metadados
├── components/   # Componentes da interface
└── config/       # Dados de contato, projetos e site

tests/e2e/        # Fluxos no navegador e acessibilidade
public/assets/    # Imagens e ícones
```

## Autoria

Desenvolvido por **Descomplica Dev Dan**.

- [GitHub](https://github.com/DescomplicaDevDan)
- [LinkedIn](https://www.linkedin.com/in/danilo-texeira-dev/)
