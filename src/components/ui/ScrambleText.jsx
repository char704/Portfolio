import { motion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';

const SCRAMBLE_CHARS = '!@#$%^&*<>?/{}[]+=';

function getRandomChar() {
  return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
}

export default function ScrambleText({ text, children, className = '' }) {
  const content = useMemo(() => String(text ?? children ?? ''), [children, text]);
  const [displayText, setDisplayText] = useState(content);
  const [hasEntered, setHasEntered] = useState(false);
  const frameRef = useRef(null);

  useEffect(() => {
    setDisplayText(content);
  }, [content]);

  useEffect(() => {
    if (!hasEntered) {
      return undefined;
    }

    const letters = Array.from(content);
    const duration = 900;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const lockProgress = Math.max((progress - 0.35) / 0.65, 0);
      const lockedUntil = Math.floor(lockProgress * letters.length);

      const nextText = letters
        .map((letter, index) => {
          if (letter === ' ' || index <= lockedUntil) {
            return letter;
          }

          return getRandomChar();
        })
        .join('');

      setDisplayText(progress >= 1 ? content : nextText);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameRef.current);
  }, [content, hasEntered]);

  return (
    <motion.span
      className={className}
      viewport={{ once: true, margin: '-10% 0px' }}
      onViewportEnter={() => setHasEntered(true)}
      initial={false}
    >
      {displayText}
    </motion.span>
  );
}
