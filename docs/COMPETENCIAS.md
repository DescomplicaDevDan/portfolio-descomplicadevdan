# Competências e preparação técnica

As evidências indicam prática no projeto; não são uma medição objetiva de proficiência.

| Competência | Evidência verificável | Declaração defensável |
| --- | --- | --- |
| React e TypeScript | Nutricomp: componentes, tipos e CartContext | Uso prático em projeto freelance |
| Estado e persistência | CartContext e LocalStorage | Explicar restauração, atualização e limites |
| Regras de negócio | tamanhos.ts e testes/pedido.spec.ts | Gramagem, preço, combo e quantidades |
| Next.js | Portfólio: rotas, metadados e componentes | Uso prático no portfólio |
| CSS e responsividade | CSS Modules e Tailwind nos projetos | Implementação responsiva; validar aparelhos reais |
| Testes | Playwright e Vitest | Fluxos e componentes cobertos; sem prometer cobertura total |
| Acessibilidade | Nomes acessíveis, teclado e axe no portfólio | Conhecimentos básicos; auditoria manual pendente |
| Python e Flask | Motor de Busca: rotas e unittest | Competência complementar |
| Algoritmos | Índice invertido, TF-IDF e Trie | Fundamentos de recuperação de documentos |
| Git | Commits separados por etapa | Histórico revisável de mudanças |

## Roteiro de entrevista

1. **Por que Context API?** Compartilhar carrinho entre catálogo e checkout. Explique quando uma solução diferente faria sentido.
2. **O que ocorre ao adicionar um produto?** Verifique a gramagem, a identidade produto+tamanho e a soma das quantidades.
3. **Por que LocalStorage?** Persistência no mesmo navegador sem backend; não sincroniza dispositivos nem protege preços.
4. **Quais tipos modelam o domínio?** Abra Marmita, CartItem e EscolhaCombo e explique cada relação.
5. **Qual falha móvel foi encontrada?** Reconstrua a sequência mousedown, mudança de layout e click descrita no case.
6. **O que os testes garantem?** Cite cenários concretos e as dimensões simuladas. Diga também o que não foi testado.
7. **O que não confiar ao Front-end?** Preços, identidade e estoque precisam de validação no servidor ou conferência no atendimento.
8. **Como evoluir com backend?** Centralizar validação e persistência de pedidos no servidor, com estados e confirmação explícitos.
9. **E 10 mil produtos?** Avaliar busca, paginação e carregamento; não declarar capacidade sem medição.

## Auditoria de candidatura

Peça a uma pessoa para identificar em cinco minutos: profissão, tecnologias centrais, projeto principal, código e decisões técnicas. Registre onde ela teve dúvidas e revise o conteúdo. Essa validação humana ainda precisa ser feita.
