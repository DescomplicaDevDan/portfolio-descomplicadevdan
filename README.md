# Descomplica Dev Dan — Portfólio

Portfólio profissional de **Descomplica Dev Dan**, desenvolvedor web e analista de sistemas. A aplicação apresenta sua trajetória, projetos, competências e formas de contato por meio de uma interface inspirada em terminais, com identidade visual escura e detalhes em verde neon.

> **Status:** em desenvolvimento. A Home, o Header, o Hero e a primeira versão da seção Sobre estão implementados. Projetos, Skills, Experiências, Contato e Footer ainda fazem parte do roadmap.

## Visão geral

O projeto foi iniciado para reunir experiências e trabalhos em uma aplicação própria, responsiva e acessível. A interface utiliza animações como recurso narrativo, mantendo o conteúdo legível e oferecendo uma alternativa para usuários que preferem movimento reduzido.

### Funcionalidades disponíveis

- Header fixo com transparência e desfoque.
- Navegação por âncoras com indicação da seção ativa.
- Menu responsivo para dispositivos móveis.
- Alternância de tema com preferência persistida no navegador.
- Hero com background personalizado e conteúdo responsivo.
- Animação sequencial de digitação do nome.
- Iluminação ambiente e efeitos neon controlados.
- Ícones sociais vetoriais e acessíveis.
- Indicadores profissionais com interações no hover.
- Seção Sobre com apresentação e cards de especialidades.
- Background Matrix com sequências binárias pseudoaleatórias.
- Terminal animado com múltiplos códigos e realce de sintaxe.

## Tecnologias

| Tecnologia | Uso |
| --- | --- |
| Next.js 16 | Framework, App Router e geração estática |
| React 19 | Construção dos componentes e interações |
| TypeScript 5 | Tipagem estática |
| CSS Modules | Estilos isolados por componente |
| CSS puro | Layout, responsividade e animações |
| `next/font` | Carregamento otimizado das fontes Geist |
| `next/image` | Otimização dos recursos visuais |
| ESLint | Qualidade e análise estática |

O Tailwind CSS permanece instalado, mas não é utilizado na interface atual. A escolha por CSS Modules mantém os estilos explícitos, isolados e sem dependência de classes utilitárias.

## Arquitetura

O projeto utiliza o **App Router**. A rota principal permanece como Server Component e componentes interativos são isolados em limites de cliente específicos.

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── About/
    │   ├── About.module.css
    │   ├── About.tsx
    │   └── CodeTerminal.tsx
    ├── Header/
    │   ├── Header.module.css
    │   └── Header.tsx
    └── Hero/
        ├── Hero.module.css
        └── Hero.tsx
```

Recursos estáticos e imagens ficam em `public/assets`.

### Decisões técnicas

- **Página única por seções:** a navegação principal usa âncoras para manter a experiência contínua.
- **Server Components por padrão:** apenas Header e terminal usam APIs do navegador e estado no cliente.
- **CSS Modules:** evitam conflitos globais e mantêm os estilos próximos aos componentes.
- **Animações sem bibliotecas:** os efeitos usam CSS e pequenos controles React, reduzindo dependências.
- **Sequências determinísticas:** a chuva binária parece aleatória, mas gera o mesmo resultado a cada renderização.
- **Progressive enhancement:** o conteúdo continua compreensível quando animações são reduzidas.

## Acessibilidade

- HTML semântico com regiões e hierarquia de títulos.
- Navegação principal identificada por `aria-label`.
- Estados de foco visíveis para navegação por teclado.
- Elementos decorativos ocultos de tecnologias assistivas.
- Nome animado acompanhado por um rótulo completo para leitores de tela.
- Suporte a `prefers-reduced-motion`.
- Bloqueio de rolagem enquanto o menu móvel está aberto.

## Como executar

### Pré-requisitos

- Node.js 20 ou superior.
- npm 10 ou superior.

### Instalação

```bash
git clone <url-do-repositorio>
cd portfolio-descomplicadevdan
npm install
```

### Desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

### Validação local

```bash
npm run lint
npm run build
```

O build atual gera a rota `/` como conteúdo estático.

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera e valida o build de produção |
| `npm run start` | Executa o build de produção localmente |
| `npm run lint` | Analisa o código com ESLint |

## Limitações atuais

- Os links de GitHub, LinkedIn, WhatsApp e e-mail ainda são provisórios.
- O currículo ainda não foi adicionado; o botão de download permanece desabilitado.
- O texto da seção Sobre é uma primeira versão e precisa de revisão final.
- Ainda não há suíte automatizada de testes.
- Ainda não há ambiente público de demonstração.
- Apenas as seções Início e Sobre foram implementadas.

## Roadmap

- [x] Configurar a base em Next.js, React e TypeScript.
- [x] Criar tokens globais e estrutura de estilos.
- [x] Implementar Header responsivo.
- [x] Implementar Hero e indicadores.
- [x] Implementar a primeira versão da seção Sobre.
- [x] Adicionar animações acessíveis e terminal com syntax highlighting.
- [ ] Revisar o conteúdo definitivo da seção Sobre.
- [ ] Adicionar links reais e currículo.
- [ ] Criar a seção Projetos.
- [ ] Criar a seção Skills.
- [ ] Criar a seção Experiências.
- [ ] Criar a seção Contato e o Footer.
- [ ] Adicionar testes automatizados.
- [ ] Adicionar metadados sociais, sitemap e robots.
- [ ] Executar auditorias de acessibilidade e desempenho.
- [ ] Publicar a aplicação.

## Convenções

Os commits seguem o padrão [Conventional Commits](https://www.conventionalcommits.org/):

```text
feat: add new functionality
fix: correct unexpected behavior
style: refine visual presentation
docs: update project documentation
refactor: improve implementation without changing behavior
```

## Autoria

Desenvolvido por **Descomplica Dev Dan**.

Os links profissionais serão adicionados quando os canais definitivos forem configurados.

## Observação sobre o OneDrive

O repositório está atualmente em uma pasta sincronizada pelo OneDrive. Em alguns momentos, arquivos gerados em `.next`, `next-env.d.ts` ou arquivos internos de `.git` podem receber o atributo de somente leitura e causar erros `EPERM`.

Se isso ocorrer com frequência, mova o repositório para uma pasta local fora do OneDrive e mantenha apenas o remoto Git como mecanismo de sincronização do código.
