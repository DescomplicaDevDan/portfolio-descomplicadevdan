# Descomplica Dev Dan

Portfólio de Danilo, desenvolvedor web e analista de sistemas. O site apresenta, em poucos segundos, como sites profissionais e sistemas sob medida podem ajudar um negócio a vender, atender e trabalhar melhor.

## Objetivo do projeto

A página transforma o portfólio em uma jornada comercial simples:

- comunica a proposta de valor já na primeira tela;
- apresenta serviços a partir do problema do cliente;
- usa projetos reais como prova do trabalho;
- explica o processo antes da decisão;
- conduz para uma conversa direta por WhatsApp ou e-mail.

No celular, o conteúdo prioriza leitura rápida, ações visíveis e navegação curta. No desktop, a mesma mensagem ganha mais contexto sem perder foco.

## Estratégia de marketing

- **Clareza:** título orientado ao resultado que o cliente procura.
- **Identificação:** serviços descritos como necessidades reais do negócio.
- **Confiança:** fotos autorais, projetos publicados e processo transparente.
- **Conversão:** WhatsApp como ação principal e e-mail como alternativa.
- **Credibilidade:** sem números, depoimentos ou promessas que não possam ser comprovados.

## Engenharia e experiência

- Next.js 16, React 19 e TypeScript;
- CSS Modules com layout responsivo;
- imagens WebP otimizadas com `next/image`;
- SEO técnico com metadados, sitemap e robots;
- acessibilidade verificada com axe-core;
- animação de binários discreta e compatível com movimento reduzido;
- testes de componentes com Vitest e fluxos reais com Playwright.

## Projetos apresentados

- **Nutricomp — Marmitas App:** cardápio digital com combos, carrinho e pedidos por WhatsApp.
- **Self em Ação:** site para apresentar serviços de psicologia e facilitar o contato.

## Executar localmente

Requer Node.js 22 e npm.

```bash
npm ci
npm run dev
```

Acesse `http://localhost:3000`.

## Verificar

```bash
npx playwright install chromium
npm run check
```

O comando executa lint, TypeScript, testes com cobertura, testes no navegador e build de produção.

## Atualizar conteúdo

- `src/components/PortfolioHome/`: conteúdo e visual da página inicial;
- `src/config/projects.ts`: projetos e links;
- `src/config/contact.ts`: canais de contato;
- `src/config/site.ts`: metadados e URL pública;
- `public/assets/photos/`: fotos aprovadas em WebP.

Defina `NEXT_PUBLIC_SITE_URL` em produção fora da Vercel. Na Vercel, a URL é detectada automaticamente.
