# Changelog

Todas as mudanças relevantes deste pacote. Formato baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/)
e [SemVer](https://semver.org/lang/pt-BR/).

## [1.1.0] - 2026-10-20

Suporte ao site v1.1 (issue Wren-pages-studio/wrenpages-web#24). Versão minor (e não 1.0.1) porque adiciona ícone,
componente e props; nada foi removido.

### Changed

- **Contraste:** novo primitivo `honey/300` (#F7C67A). `color/text/accent` passa a usá-lo: texto mel sobre o verde vai de
  4,24:1 para **4,75:1** (WCAG AA). Ícones, estrelas e marcadores continuam em `honey/400`.
- **Ilustração do celular:** a fileira de 5 estrelas virou uma linha de texto neutra (sem sugerir avaliações).
- **BaseLink:** links absolutos `http(s)` abrem em nova aba com `rel="noopener noreferrer"` (redes sociais, sites externos).

### Added

- Papel de texto `closing`: Body/M Strong no mobile, Fraunces H4 a partir do tablet (frase de fechamento da seção de problemas).
- Ícone `facebook`.
- Ilustração `ConceptSiteArt` (mockup de um site; motivos `scissors`, `pole`, `house`).
- Prop `badge` no `WorkCard` (ex.: `{ label: 'Concept', tone: 'accent' }`); `demo` fica obsoleta.
- Molécula `Prose` para textos longos (páginas legais).

## [1.0.0] - 2026-10-19

### Added

- Tokens como fonte única da verdade em TypeScript, gerando `tokens.css` (245 custom properties) e `typography.css`.
- Átomos: Badge, Button, Card, Checkbox/Radio, CheckMarker, Divider, Icon (24 glifos), IconButton, Illustration,
  Input, Logo, Select, SkipLink, Text, Textarea, TextLink, VisuallyHidden.
- Layout: Section, Container, Grid, Stack.
- Moléculas: CtaGroup, FaqItem, FeatureRow, FormField, LinkButton, NavItem, ProblemCard, SectionHeading, SocialLinks,
  Stat, StepCard, Testimonial/Stars, Toast, WorkCard.
- Organismos: AboutBlock, AuditForm/AuditSection, ComparisonTable, CtaBand, FaqList, Footer, Header, Hero, LinkInBio,
  Message, PageHeader, PricingCard, StickyCta.
- Template: PageShell (container `page` para responsividade por container queries).
- Storybook com documentação de fundações (marca, cores, tipografia, espaçamentos, elevação, grid, ícones,
  acessibilidade, conteúdo) e stories de todos os componentes.
