# Portfólio — React + TypeScript + Vite

Reconstrução do teu portfólio (devnelson.netlify.app) usando React,
TypeScript e Vite, mantendo o mesmo conteúdo e identidade visual.

## Como correr

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

Para gerar a versão de produção (pasta `dist/`, pronta para o Netlify):

```bash
npm run build
```

## Estrutura

```
src/
  App.tsx                 → junta todas as secções, na ordem certa
  main.tsx                → ponto de entrada, monta a App no HTML
  index.css               → variáveis de tema (dark/light) e reset global
  types/index.ts          → tipos TypeScript partilhados (Skill, Project, Stat...)
  data/content.ts         → todo o conteúdo (skills, projetos, stats, roles)
  context/ThemeContext.tsx→ estado global do tema dark/light
  hooks/
    useTypewriter.ts       → efeito de "máquina de escrever" do hero
    useActiveSection.ts    → destaca o link ativo na navbar ao dar scroll
  components/
    Navbar/    → menu fixo + toggle de tema + menu mobile
    Hero/      → nome, cargo animado, botões de ação
    About/     → foto, texto e estatísticas
    Skills/    → grelha de tecnologias
    Projects/  → grelha de projetos (Projects.tsx lista, ProjectCard.tsx desenha 1)
    Contact/   → formulário controlado com validação
    Footer/
public/assets/ → imagens, ícones e o teu CV em PDF (servidos tal como estão)
```

## Porquê esta organização

- **Um componente por pasta**, com o seu próprio ficheiro `.module.css`
  (CSS Modules) — os estilos de um componente nunca colidem com os de outro.
- **`data/content.ts` separado da UI** — para editar um projeto, uma skill ou
  uma stat, mexes só neste ficheiro, nunca em JSX.
- **Hooks (`useTypewriter`, `useActiveSection`)** isolam lógica que antes
  estava misturada no `script.js` — ficam reutilizáveis e fáceis de testar.
- **Formulário controlado** em `Contact.tsx` — o valor de cada campo vive no
  estado do React (`useState`), o que torna a validação trivial em TypeScript.

## Próximos passos sugeridos

1. Ligar o formulário de contacto a um serviço real (ex: EmailJS, Resend, ou
   um endpoint teu) dentro de `handleSubmit` em `Contact.tsx`.
2. Adicionar animações de entrada ao scroll (ex: biblioteca `framer-motion`).
3. Adicionar `react-router-dom` se quiseres páginas separadas por projeto.
4. Publicar no Netlify: `npm run build` e arrastar a pasta `dist/` para o
   Netlify, ou ligar o repositório GitHub diretamente.
