import { useEffect, useState } from 'react';

const STORAGE_KEY = 'portfolio-theme';
const THEMES = {
  light: 'light',
  dark: 'dark',
};

function getStoredTheme() {
  try {
    const storedTheme = window.localStorage.getItem(STORAGE_KEY);
    return storedTheme === THEMES.dark || storedTheme === THEMES.light ? storedTheme : null;
  } catch {
    return null;
  }
}

function getSystemTheme() {
  if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
    return THEMES.dark;
  }

  return THEMES.light;
}

function getInitialTheme() {
  if (typeof window === 'undefined') {
    return THEMES.light;
  }

  return getStoredTheme() ?? getSystemTheme();
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === THEMES.dark);

    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Storage can be unavailable in private or restricted browser contexts.
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === THEMES.dark ? THEMES.light : THEMES.dark));
  };

  return { theme, toggleTheme };
}
