import { useEffect, useState } from 'react';

export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0, isActive: false });

  useEffect(() => {
    const handleMove = (event) => {
      if (event.clientX === 0 && event.clientY === 0) {
        return;
      }

      setPosition({ x: event.clientX, y: event.clientY, isActive: true });
    };

    window.addEventListener('pointermove', handleMove);
    window.addEventListener('mousemove', handleMove);

    return () => {
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('mousemove', handleMove);
    };
  }, []);

  return position;
}
