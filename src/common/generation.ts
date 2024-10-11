export const generateLoremIpsum = (wordCount: number): string => {
  const loremIpsumText = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  `

  const words = loremIpsumText.trim().split(/\s+/);

  const repeatedWords = [];
  while (repeatedWords.length < wordCount) {
    repeatedWords.push(...words);
  }

  return repeatedWords.slice(0, wordCount).join(' ');
}