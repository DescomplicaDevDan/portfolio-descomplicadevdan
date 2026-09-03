# Resultado da suíte de qualidade

Data: 2 de setembro de 2026.

## Status

- ESLint: aprovado.
- TypeScript: aprovado.
- Testes de unidade e componentes: 12 aprovados em 7 arquivos.
- Cobertura: 84,29% de linhas, 82,01% de statements, 88,46% de funções e 78% de branches.
- Testes E2E e acessibilidade: 8 cenários concluídos no Chromium.
- Segurança de dependências: 0 vulnerabilidades conhecidas no `npm audit`.
- Build de produção: aprovado com Webpack; gera `/` e `/projetos` como rotas estáticas.

## Defeitos conhecidos rastreados

1. Os links para `#experiencias` e `#contato` não encontram elementos correspondentes.
2. GitHub, LinkedIn, WhatsApp e e-mail ainda apontam para `#`.
3. O texto “Descomplica” ultrapassa a largura disponível em 390 px e é cortado.
4. O terminal usa `aria-label` em um `<pre>` sem papel ARIA explícito.

Esses casos estão marcados com `test.fail()` no Playwright. Isso significa que são executados e documentados como falhas esperadas sem tornar a suíte instável. Ao corrigir cada defeito, o marcador deve ser removido.

## Relatórios gerados

- Cobertura navegável: `coverage/index.html`.
- Relatório Playwright: `playwright-report/index.html`.
- Resultado Playwright estruturado: `reports/playwright-results.json`.
- Evidências de falha: `test-results/artifacts/`.

Os relatórios gerados são locais e ignorados pelo Git. No GitHub Actions, eles são publicados como artefatos por 14 dias.

## Observações

O build depende do acesso ao Google Fonts por usar `next/font/google`. Em uma rede restrita, ele falha ao buscar Geist e Geist Mono. O build foi validado com a rede liberada e passou.

O Lighthouse CI não foi mantido como dependência porque sua árvore atual introduziu 13 vulnerabilidades transitivas, incluindo 7 altas. A remoção restaurou o resultado de segurança para zero vulnerabilidades.
