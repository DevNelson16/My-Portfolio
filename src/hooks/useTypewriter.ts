import { useEffect, useState } from "react"

export function useTypewriter(words: string[], typingSpeed = 80, pause = 1500) {
  const [text, setText] = useState("")
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length]

    const delta = isDeleting ? -1 : 1;
    const nextLength = text.length + delta

    const timeout = setTimeout(() => {
      setText(currentWord.slice(0, nextLength))

      if (!isDeleting && nextLength === currentWord.length) {
        setTimeout(() => setIsDeleting(true), pause)
      } else if (isDeleting && nextLength === 0) {
        setIsDeleting(false);
        setWordIndex((i) => i + 1)
      }
    }, isDeleting ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, pause])

  return text;
}
