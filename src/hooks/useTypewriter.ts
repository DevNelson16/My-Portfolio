import { useEffect, useState } from "react";

/**
 * Recebe uma lista de frases e devolve o texto que deve aparecer neste
 * instante, simulando alguém a escrever e a apagar cada frase à vez
 * (o mesmo efeito que tinhas no #typewriter do script.js original).
 */
export function useTypewriter(words: string[], typingSpeed = 80, pause = 1500) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    // Enquanto está a apagar, remove um caractere; enquanto escreve, adiciona um.
    const delta = isDeleting ? -1 : 1;
    const nextLength = text.length + delta;

    // setTimeout devolve um id que guardamos para poder cancelar o timer
    // se o componente desmontar ou os valores mudarem antes de disparar
    // (isto é o "cleanup" do useEffect — evita fugas de memória).
    const timeout = setTimeout(() => {
      setText(currentWord.slice(0, nextLength));

      if (!isDeleting && nextLength === currentWord.length) {
        // Terminou de escrever: espera um pouco e começa a apagar.
        setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && nextLength === 0) {
        // Terminou de apagar: passa para a próxima palavra da lista.
        setIsDeleting(false);
        setWordIndex((i) => i + 1);
      }
    }, isDeleting ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, pause]);

  return text;
}
