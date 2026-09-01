import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { Theme } from "../types";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

// createContext cria uma "caixa" de estado acessível por qualquer componente
// dentro do <ThemeProvider>, sem teres de passar props manualmente de pai
// para filho em cada nível (isto substitui o localStorage + querySelector
// que o script.js fazia diretamente no DOM).
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = "portfolio-theme";

export function ThemeProvider({ children }: { children: ReactNode }) {
  // useState com uma função (lazy initializer) só corre uma vez, na primeira
  // renderização — aqui usamos para ler o tema guardado no browser.
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "light" || saved === "dark" ? saved : "dark";
  });

  // useEffect corre sempre que "theme" muda: aplica o atributo data-theme
  // no <html> (é o que o teu CSS já espera, ver [data-theme="light"] no index.css)
  // e persiste a escolha para a próxima visita.
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook de conveniência: em vez de useContext(ThemeContext) em todo o lado,
// os componentes só chamam useTheme(). O erro ajuda a apanhar o engano de
// usar o hook fora do <ThemeProvider>.
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme deve ser usado dentro de <ThemeProvider>");
  return ctx;
}
