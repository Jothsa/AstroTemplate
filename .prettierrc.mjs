export default {
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'all',
  semi: true,
  bracketSameLine: true,
  experimentalTernaries: true,
  plugins: ['prettier-plugin-astro', 'prettier-plugin-svelte'],
  overrides: [
    { files: '*.astro', options: { parser: 'astro' } },
    { files: '*.svelte', options: { parser: 'svelte' } },
  ],
};
