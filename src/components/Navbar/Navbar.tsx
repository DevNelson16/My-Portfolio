import { useState } from "react"
import { useTheme } from "../../context/ThemeContext"
import { useActiveSection } from "../../hooks/useActiveSection"
import styles from "./Navbar.module.css"

const LINKS = [
  { id: "hero", label: "Início" },
  { id: "about", label: "Sobre" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projetos" },
  { id: "contact", label: "Contato" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const activeId = useActiveSection(LINKS.map((l) => l.id))
  // Estado local só deste componente: controla se o menu mobile está aberto.
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <a href="#hero" className={styles.logo}>
          <span className={styles.bracket}>&lt;</span>Nelson
          <span className={styles.bracket}>/&gt;</span>
        </a>

        <ul className={`${styles.menu} ${mobileOpen ? styles.menuOpen : ""}`}>
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`${styles.link} ${
                  activeId === link.id ? styles.linkActive : ""
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label="Alternar tema"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <button
            className={styles.mobileToggle}
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Menu mobile"
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
  )
}
