/**
 * This is the single source of truth. For choices in the command, this maps to
 * { value: name }.
 */
export const LanguageChoices = {
  batchfile: "Batch File",
  blade: "Blade",
  c: "C",
  "c#": "C#",
  "c++": "C++",
  cmake: "CMake",
  css: "CSS",
  dockerfile: "Dockerfile",
  go: "Go",
  hcl: "HCL",
  html: "HTML",
  java: "Java",
  javascript: "JavaScript",
  "jupyter notebook": "Jupyter Notebook",
  kotlin: "Kotlin",
  makefile: "Makefile",
  "objective-c": "Objective-C",
  php: "PHP",
  python: "Python",
  ruby: "Ruby",
  scss: "SCSS",
  shell: "Shell",
  swift: "Swift",
  typescript: "TypeScript",
  vue: "Vue",
};

/**
 * Values grabbed from https://github.com/ozh/github-colors/blob/master/colors.json.
 */
export const LanguageColours: {
  [key in keyof typeof LanguageChoices]: number;
} = {
  batchfile: 0xc1f12e,
  blade: 0xf7523f,
  c: 0x555555,
  "c#": 0x178600,
  "c++": 0xf34b7d,
  cmake: 0xda3434,
  css: 0x563d7c,
  dockerfile: 0x384d54,
  go: 0x00add8,
  hcl: 0x844fba,
  html: 0xe34c26,
  java: 0xb07219,
  javascript: 0xf1e05a,
  "jupyter notebook": 0xda5b0b,
  kotlin: 0xa97bff,
  makefile: 0x427819,
  "objective-c": 0x438eff,
  php: 0x4f5d95,
  python: 0x3572a5,
  ruby: 0x701516,
  scss: 0xc6538c,
  shell: 0x89e051,
  swift: 0xf05138,
  typescript: 0x3178c6,
  vue: 0x41b883,
};

/**
 * Derived from https://gitlab.com/explore/projects.
 * Use the language dropdown to see available languages and
 * get the number map.
 */
export const GitLabLanguageIds: {
  [key in Partial<keyof typeof LanguageChoices>]: number;
} = {
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
