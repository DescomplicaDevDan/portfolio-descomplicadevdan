# Descomplica Dev Dan

Portfólio de Danilo: sites profissionais, sistemas sob medida e melhorias em sites.

A página inicial apresenta serviços, projetos reais, processo de trabalho e contato direto por WhatsApp ou e-mail. Inclui fotos otimizadas, layout responsivo e binários animados que respeitam a preferência por movimento reduzido.

## Executar

Requer Node.js 22 e npm.

```bash
npm ci
npm run dev
```

Abra http://localhost:3000. Para produção: `npm run build` e `npm start`.

## Verificar

```bash
npx playwright install chromium
npm run check
```

Executa lint, TypeScript, testes com cobertura, testes no navegador e build.

## Atualizar conteúdo

- `src/components/PortfolioHome/`: conteúdo e aparência da página inicial.
- `src/config/projects.ts`: projetos e links.
- `src/config/contact.ts`: canais de contato.
- `src/config/site.ts`: metadados e URL pública.
- `public/assets/photos/`: fotos aprovadas, em WebP.

Defina `NEXT_PUBLIC_SITE_URL` em produção fora da Vercel. Na Vercel, a URL é detectada automaticamente.

Stack: Next.js, React, TypeScript e CSS Modules. Testes: Vitest, Playwright e axe-core.
