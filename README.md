# @wrenpages/design-system

Design system da **Wren Pages** — tokens, átomos, moléculas, organismos e templates em React 19, documentados no
Storybook e publicados no npm para serem consumidos pelo site (`wrenpages-web`).

> **Regra de ouro:** nenhum valor visual solto. Cor, espaçamento, tamanho, raio, tipografia, sombra, camada e
> movimento vêm **sempre** de um token. Se faltar um valor, o design deixou uma decisão em aberto — o valor é
> adicionado em `src/tokens/*.ts` (e no Figma) antes de ser usado. O `stylelint` quebra o build se encontrar um número
> hard-coded no CSS, e o ESLint proíbe a prop `style`.

## Stack

| Ferramenta                       | Uso                                |
| -------------------------------- | ---------------------------------- |
| React 19 + TypeScript 6          | Componentes                        |
| Vite 8 (library mode)            | Build ESM + `styles.css` + tipos   |
| CSS Modules + custom properties  | Estilo com escopo, 100% via tokens |
| Storybook 10 (+ docs, a11y/axe)  | Documentação viva                  |
| Vitest + Testing Library         | Testes unitários                   |
| ESLint 9, Stylelint 17, Prettier | Qualidade                          |
| Husky + lint-staged + commitlint | Hooks e Conventional Commits       |

## Estrutura (Atomic Design)

```
src/
├─ tokens/        # fonte única da verdade (TS) → gera styles/tokens.css e typography.css
├─ styles/        # tokens.css (gerado), base.css, typography.css (gerado), fontes
├─ foundations/   # páginas MDX do Storybook (cores, tipografia, espaçamentos, a11y…)
├─ atoms/         # Button, Icon, Text, Input, Badge, Logo, Card, Illustration…
├─ molecules/     # FormField, FaqItem, StepCard, PricingFeature, WorkCard, Toast…
├─ organisms/     # Header, Hero, PricingCard, ComparisonTable, AuditForm, Footer…
├─ templates/     # PageShell (skip link + header + main + footer + sticky CTA)
├─ layout/        # Section, Container, Grid, Stack (gaps só de tokens)
├─ utils/         # LinkProvider (integração com qualquer router), cx
└─ assets/logo/   # SVGs estáticos do logo/favicon (gerados)
```

Cada componente fica em sua pasta: `Component.tsx`, `Component.module.css`, `Component.stories.tsx`,
`Component.test.tsx` e `index.ts`.

## Scripts

```bash
npm run dev              # Storybook em http://localhost:6006
npm run tokens           # regenera tokens.css, typography.css e SVGs do logo
npm run build            # dist/ (ESM, styles.css, tokens.css, fonts, tipos)
npm run build-storybook  # storybook-static/
npm run lint             # eslint + stylelint
npm run typecheck
npm test
npm run check:version    # diz se a versão atual será publicada
```

## Uso no app

```tsx
import '@wrenpages/design-system/styles.css';
import { LinkProvider, PageShell, Header, Hero, Button } from '@wrenpages/design-system';
import { tokens } from '@wrenpages/design-system'; // valores tipados (breakpoints, timing…)
```

`LinkProvider` recebe um adaptador do router do app; links externos (`http`, `mailto:`, `tel:`, `#`) continuam `<a>`.

## Fluxo de trabalho (Gitflow)

| Branch            | Para quê                                         | Pipeline                                                                                                                       |
| ----------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `main`            | Somente versões publicadas                       | `release.yml`: publica no npm (se a versão subiu), cria tag `vX.Y.Z` + GitHub Release, publica o Storybook no Cloudflare Pages |
| `develop`         | Integração                                       | `ci.yml`                                                                                                                       |
| `feature/<nome>`  | Nova funcionalidade, sai de `develop`            | `ci.yml`                                                                                                                       |
| `release/<x.y.z>` | Estabilização + bump de versão, sai de `develop` | `ci.yml`                                                                                                                       |
| `hotfix/<x.y.z>`  | Correção urgente, sai de `main`                  | `ci.yml`                                                                                                                       |

**Publicar uma versão nova**

1. `git switch develop && git switch -c release/1.1.0`
2. `npm version minor --no-git-tag-version` (ou `patch`/`major`) e atualize o `CHANGELOG.md`
3. Abra PR `release/1.1.0 → main`. Ao fazer merge, o `release.yml` compara a versão do `package.json` com a do npm e,
   se for maior, publica automaticamente.
4. Faça merge de `main` de volta em `develop`.

Commits seguem [Conventional Commits](https://www.conventionalcommits.org) (`feat:`, `fix:`, `docs:`…), validados pelo
commitlint.

## Configuração única (dono do repositório)

1. **npm** — crie a organização gratuita `wrenpages` em npmjs.com (ou troque o escopo do `name` no `package.json`
   para o seu usuário, ex.: `@seu-usuario/wrenpages-design-system`). Gere um _Granular Access Token_ com permissão de
   publish e salve como secret `NPM_TOKEN` no repositório (Settings → Secrets and variables → Actions).
   O repositório é privado, então a publicação não usa `--provenance` (o npm só aceita provenance de repositório público).
2. **Storybook** — no Cloudflare, crie o projeto Pages `wrenpages-storybook` (Direct Upload) e salve os secrets
   `CLOUDFLARE_API_TOKEN` e `CLOUDFLARE_ACCOUNT_ID`. Sem eles o job só emite um aviso e não falha.
3. **Branch protection** (requer GitHub Pro/Team em repositório privado) — proteja `main` e `develop` exigindo o check
   `CI / Lint · Typecheck · Test · Build`.
