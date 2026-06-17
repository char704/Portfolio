import { useEffect, useState } from 'react';

export function useMousePosition() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    isActive: false,
  });

  useEffect(() => {
    const handleMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
        isActive: true,
      });
    };

    const handleLeave = () => {
      setPosition((current) => ({
        ...current,
        isActive: false,
      }));
    };

    window.addEventListener('pointermove', handleMove);
    document.documentElement.addEventListener('mouseleave', handleLeave);

    return () => {
      window.removeEventListener('pointermove', handleMove);
      document.documentElement.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return position;
}
