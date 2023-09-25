const languages: { [key: string]: number } = {
  batchfile: 30,
  blade: 606,
  c: 6,
  "c#": 26,
  "c++": 4,
  cmake: 5,
  css: 2,
  dockerfile: 38,
  go: 39,
  hcl: 52,
  html: 1,
  java: 8,
  javascript: 3,
  "jupyter notebook": 13,
  kotlin: 48,
  makefile: 34,
  "objective-c": 29,
  php: 11,
  python: 7,
  ruby: 12,
  scss: 605,
  shell: 16,
  swift: 28,
  typescript: 19,
  vue: 25,
};

export const getGitlabLanguageId = (lang: string): number | undefined => {
  if (lang in languages) {
    return languages[lang];
  }
};
