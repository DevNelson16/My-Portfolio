import type { Stat, Skill, Project } from "../types";

// Todo o "conteúdo" do site vive aqui, separado dos componentes.
// Assim, para editares um projeto ou uma skill, mexes só neste ficheiro
// e nunca precisas de tocar em JSX.

export const ROLES: string[] = [
  "Full-Stack Developer",
  "Front-End Developer",
  "Back-End Developer",
  "Mobile",
];

export const STATS: Stat[] = [
  { number: "6+", label: "Anos de Experiência" },
  { number: "15+", label: "Projetos Entregues" },
  { number: "10+", label: "Tecnologias" },
];

export const SKILLS: Skill[] = [
  { name: "HTML5", img: "/assets/html.png" },
  { name: "CSS3", img: "/assets/css3.png" },
  { name: "JavaScript", img: "/assets/js.png" },
  { name: "TypeScript", img: "/assets/ts.png" },
  { name: "React", img: "/assets/react.png" },
  { name: "Next.js", img: "/assets/next2.png" },
  { name: "Node.js", img: "/assets/node.png" },
  { name: "NestJS", img: "/assets/nest.png" },
  { name: "PHP", img: "/assets/php.png" },
  { name: "C#", img: "/assets/csharp.png" },
  { name: "MySQL", img: "/assets/mysql.png" },
  { name: "PostgreSQL", img: "/assets/psql.png" },
  { name: "SQL", img: "/assets/sql.png" },
  { name: "Git", img: "/assets/git.png" },
  { name: "GitHub", img: "/assets/github.png" },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Music Store Platform",
    description:
      "Plataforma completa de e-commerce para músicos, bandas e artistas. Autenticação, carrinho, checkout, gestão de produtos e painel administrativo integrado com MySQL.",
    tags: ["PHP", "MySQL", "JavaScript", "AJAX", "HTML5", "CSS3"],
    icon: "🎵",
    demoLink:
      "https://www.linkedin.com/feed/update/urn:li:activity:7467562806012194817/",
    repoLink: "https://github.com/DevNelson16/music-store-platform",
  },
  {
    id: 2,
    title: "PrimeFlix - React Movies App",
    description:
      "Exploração de filmes com detalhes completos e favoritos. Consome API externa de filmes, usa React Router e Local Storage.",
    tags: ["React", "JavaScript", "React Router", "Axios", "CSS3"],
    icon: "🎬",
    demoLink: "https://primeflixpt.netlify.app/",
    repoLink: "https://github.com/DevNelson16/PimeFlix",
  },
  {
    id: 3,
    title: "Cars API AI Search",
    description:
      "API REST com Node.js, TypeScript, PostgreSQL e OpenAI. Pesquisa de veículos por linguagem natural. Front-end em React/TypeScript em desenvolvimento.",
    tags: ["Node.js", "TypeScript", "Fastify", "PostgreSQL", "Drizzle ORM", "OpenAI", "React"],
    icon: "🚗",
    demoLink:
      "https://www.linkedin.com/feed/update/urn:li:activity:7472966015258361857/",
    repoLink: "https://github.com/DevNelson16/Openai-Project",
  },
  {
    id: 4,
    title: "React Firebase CRUD",
    description:
      "App full-stack com React e Firebase: autenticação, CRUD completo, base de dados em tempo real e interface responsiva.",
    tags: ["React", "Firebase", "JavaScript", "CRUD"],
    icon: "🔥",
    demoLink: "https://tiny-choux-125e17.netlify.app/",
    repoLink: "https://github.com/DevNelson16/React-Firebase-CRUD",
  },
  {
    id: 5,
    title: "Restaurante Online",
    description:
      "Sistema completo de restaurante online com encomendas, carrinho, gestão de produtos, clientes, pedidos e painel administrativo.",
    tags: ["PHP", "JavaScript", "HTML", "CSS", "MySQL"],
    icon: "🍽️",
    demoLink: "",
    repoLink: "https://github.com/DevNelson16/Restaurante-Online",
  },
  {
    id: 6,
    title: "Sistema de Controle de Horas Trabalhadas",
    description:
      "Gestão e controlo de horas trabalhadas: registo de colaboradores, entrada/saída, relatórios e painel administrativo.",
    tags: ["PHP", "JavaScript", "HTML", "CSS", "MySQL"],
    icon: "⏱️",
    demoLink:
      "https://www.linkedin.com/feed/update/urn:li:activity:7454922471033610240/",
    repoLink: "https://github.com/DevNelson16/Programa-o-De-Horas-De-Trabalho",
  },
  {
    id: 7,
    title: "Cripto Moedas + API",
    description:
      "Acompanhamento de criptomoedas em tempo real via API CoinCap: preço, capitalização, volume e variação em 24h.",
    tags: ["React", "TypeScript", "Vite", "CSS Modules", "CoinCap API"],
    icon: "🪙",
    demoLink:
      "https://www.linkedin.com/feed/update/urn:li:activity:7484195876966670336/",
    repoLink: "https://github.com/DevNelson16/Criptomoedas-API",
  },
];
