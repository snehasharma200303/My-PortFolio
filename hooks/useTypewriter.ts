"use client";

import { useState, useEffect } from "react";

/**
 * useTypewriter — cycles through an array of words with a typing + deleting effect.
 */
export function useTypewriter(
  words: string[],
  typingSpeed = 75,
  deletingSpeed = 40,
  pauseMs = 2200
) {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx, setWordIdx]     = useState(0);
  const [deleting, setDeleting]   = useState(false);
  const [pausing, setPausing]     = useState(false);

  useEffect(() => {
    if (pausing) return;

    const word = words[wordIdx];

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, displayed.length + 1);
        setDisplayed(next);
        if (next === word) {
          // finished typing — pause then start deleting
          setPausing(true);
          setTimeout(() => {
            setPausing(false);
            setDeleting(true);
          }, pauseMs);
        }
      } else {
        const next = word.slice(0, displayed.length - 1);
        setDisplayed(next);
        if (next === "") {
          setDeleting(false);
          setWordIdx((i) => (i + 1) % words.length);
        }
      }
    }, deleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayed, deleting, pausing, wordIdx, words, typingSpeed, deletingSpeed, pauseMs]);

  return displayed;
}
