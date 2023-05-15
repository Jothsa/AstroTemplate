module.exports = {
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'all',
  semi: true,
  // bracketSameLine: true,
  htmlWhitespaceSensitivity: 'strict',
  pluginSearchDirs: ['.'],
  plugins: [require.resolve('prettier-plugin-astro')],
  astroAllowShorthand: false,
  overrides: [
    {
      files: '*.svelte',
      options: {
        parser: 'svelte',
      },
    },
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
