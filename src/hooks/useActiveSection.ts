import { useEffect, useState } from "react";

/**
 * Observa as secções da página (pelos ids passados) e devolve o id da
 * secção que está atualmente mais visível no ecrã. Usa a IntersectionObserver
 * API do browser, que é muito mais performática do que ouvir o evento
 * "scroll" e calcular posições manualmente (como o script.js original fazia).
 */
export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" } // considera "ativa" a secção perto do centro do ecrã
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Cleanup: para de observar quando o componente desmonta ou os ids mudam.
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
