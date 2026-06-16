export function splitChars(text) {
  return text.split('').map((char, index) => ({
    id: `${char}-${index}`,
    value: char === ' ' ? '\u00A0' : char,
  }));
}
