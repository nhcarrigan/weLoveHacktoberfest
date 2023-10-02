/**
 * Returns a random index from the given array of phrases.
 *
 * @param {string[]} phrases An array of sentences to choose from.
 * @returns {number} The random index.
 */
export const getRandom = <T>(phrases: Array<T>): T => {
  const result = phrases[Math.floor(Math.random() * phrases.length)];
  return result as T;
};
