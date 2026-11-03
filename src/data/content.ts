import type { Stat, Skill, Project } from '../types'

export const ROLES: string[] = [
  'Full-Stack Developer',
  'Front-End Developer',
  'Back-End Developer'
  //"Mobile",
]

export const STATS: Stat[] = [
  { number: '2+', label: 'Anos de Experiência' },
  { number: '7+', label: 'Projetos Entregues' },
  { number: '4+', label: 'Tecnologias' }
]

export const SKILLS: Skill[] = [
  { name: 'HTML5', img: '/assets/html.png' },
  { name: 'CSS3', img: '/assets/css3.png' },
  { name: 'TailwinCSS', img: '/assets/tailwindcss.png' },
  { name: 'JavaScript', img: '/assets/js.png' },
  { name: 'TypeScript', img: '/assets/ts.png' },
  { name: 'React', img: '/assets/react.png' },
  //{ name: "Next.js", img: "/assets/next2.png" },
  { name: 'Node.js', img: '/assets/node.png' },
  //{ name: "NestJS", img: "/assets/nest.png" },
  { name: 'PHP', img: '/assets/php.png' },
  //{ name: "C#", img: "/assets/csharp.png" },
  { name: 'MySQL', img: '/assets/mysql.png' },
  { name: 'FireBase', img: '/assets/firebase.png' },
  { name: 'SupaBase', img: '/assets/supabase.png' },
  //{ name: "PostgreSQL", img: "/assets/psql.png" },
  //{ name: "SQL", img: "/assets/sql.png" },
  { name: 'ViteJS', img: '/assets/vite.png' },
  { name: 'Git', img: '/assets/git.png' },
  { name: 'GitHub', img: '/assets/github.png' }
]

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Plataforma De Loja Online',
    description:
      'Plataforma completa de e-commerce para músicos, bandas e artistas. Autenticação, carrinho, checkout, gestão de produtos e painel administrativo integrado com MySQL.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'AJAX', 'HTML5', 'CSS3'],
    images: [
      '/assets/plaOnlin1.png',
      '/assets/plaOnlin2.png',
      '/assets/plaOnlin3.png',
      '/assets/plaOnlin4.png',
      '/assets/plaOnlin5.png'
    ],
    demoLink:
      'https://www.linkedin.com/feed/update/urn:li:activity:7467562806012194817/',
    repoLink: 'https://github.com/DevNelson16/music-store-platform'
  },

  {
    id: 2,
    title: 'EventHub - Gestão de Eventos',
    description:
      'Sistema completo de gestão de eventos em PHP e MySQL, com autenticação, compra de bilhetes e painel admin para gerir eventos e utilizadores.',
    tags: ['PHP', 'JavaScript', 'HTML5', 'CSS3', 'MYSQL'],
    images: [
      '/assets/eventhub1.png',
      '/assets/eventhub2.png',
      '/assets/eventhub3.png'
    ],
    demoLink: '#',
    repoLink: 'https://github.com/DevNelson16/EventHub2'
  },

  {
    id: 3,
    title: 'PrimeFlix - React Movies App',
    description:
      'Exploração de filmes com detalhes completos e favoritos. Consome API externa de filmes, usa React Router e Local Storage.',
    tags: ['React', 'JavaScript', 'React Router', 'Axios', 'CSS3'],
    images: [
      '/assets/flix1 (1).png',
      '/assets/flix1 (2).png',
      '/assets/flix1 (3).png',
      '/assets/flix1 (4).png'
    ],
    demoLink: 'https://primeflixpt.netlify.app/',
    repoLink: 'https://github.com/DevNelson16/PimeFlix'
  },

  {
    id: 4,
    title: 'Web Cars',
    description:
      'Plataforma de venda de carros com listagem e pesquisa de veículos. API REST em Node.js e TypeScript, front-end em React com Tailwind CSS, Firebase e Supabase.',
    tags: ['TypeScript', 'React', 'Tailwind CSS', 'Firebase'],
    images: [
      '/assets/webcar1.png',
      '/assets/webcar2.png',
      '/assets/webcar3.png',
      '/assets/webcar4.png',
      '/assets/webcar5.png'
    ],
    demoLink: 'https://web-cars-five.vercel.app/',
    repoLink: 'https://github.com/DevNelson16/WebCars'
  },

  {
    id: 5,
    title: 'React Firebase CRUD',
    description:
      'App full-stack com React e Firebase: autenticação, CRUD completo, base de dados em tempo real e interface responsiva.',
    tags: ['React', 'Firebase', 'JavaScript', 'CRUD'],
    images: ['/assets/reactfire.png', '/assets/reactfire.png'],
    demoLink: 'https://tiny-choux-125e17.netlify.app/',
    repoLink: 'https://github.com/DevNelson16/React-Firebase-CRUD'
  },
  {
    id: 6,
    title: 'Restaurante Online',
    description:
      'Sistema completo de restaurante online com encomendas, carrinho, gestão de produtos, clientes, pedidos e painel administrativo.',
    tags: ['PHP', 'JavaScript', 'HTML', 'CSS', 'MySQL'],
    images: [
      '/assets/rest1.png',
      '/assets/rest2.png',
      '/assets/rest3.png',
      '/assets/rest4.png',
      '/assets/rest5.png'
    ],
    demoLink: '#',
    repoLink: 'https://github.com/DevNelson16/Restaurante-Online'
  },
  {
    id: 7,
    title: 'Loja Online Venda de Bebidas',
    description: 'Em Desenvolvimento...(Brevemente disponível)',
    tags: ['PHP', 'JavaScript', 'HTML', 'CSS', 'MySQL'],
    images: ['/assets/desenvolvimento.jpg', '/assets/desenvolvimento.jpg'],
    demoLink: '',
    repoLink: 'https://github.com/DevNelson16/LojaOnlineBebidas'
  },

  {
    id: 8,
    title: 'Cripto Moedas + API',
    description:
      'Acompanhamento de criptomoedas em tempo real via API CoinCap: preço, capitalização, volume e variação em 24h.',
    tags: ['React', 'TypeScript', 'Vite', 'CSS Modules', 'CoinCap API'],
    images: [
      '/assets/cript (1).png',
      '/assets/cript (2).png',
      '/assets/cript (3).png'
    ],
    demoLink: 'https://criptoapi1.netlify.app/',
    repoLink: 'https://github.com/DevNelson16/Criptomoedas-API'
  },

  {
    id: 9,
    title: 'Lavandaria Pro',
    description: 'Em Desenvolvimento...(Brevemente disponível)',
    tags: ['React', 'TypeScript', 'Vite', 'CSS Modules', 'CoinCap API'],
    images: ['/assets/desenvolvimento.jpg', '/assets/desenvolvimento.jpg'],
    demoLink: '#',
    repoLink: '#'
  },

  {
    id: 10,
    title: 'Pet Shop',
    description: 'Em Desenvolvimento...(Brevemente disponível)',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    images: [
      '/assets/pet (1).png',
      '/assets/pet (2).png',
      '/assets/pet (3).png',
      '/assets/pet (4).png'
    ],
    demoLink: 'https://petshopon.netlify.app/',
    repoLink: 'https://github.com/DevNelson16/PetShop'
  }
]
