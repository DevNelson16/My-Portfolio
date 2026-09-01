// Tipos centrais da aplicação. Ter isto num ficheiro só evita repetir
// "shapes" de objeto espalhados pelos componentes e dá autocomplete/erros
// em tempo de escrita sempre que os dados não baterem certo.

export interface Stat {
  number: string;
  label: string;
}

export interface Skill {
  name: string;
  img: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  icon: string;
  demoLink: string;
  repoLink: string;
}

export type Theme = "dark" | "light";
