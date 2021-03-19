export const getRandom = (phrases: string[]): number => {
  return Math.floor(Math.random() * phrases.length);
};
