export default {
  '*.{postcss,css,astro,svelte}': 'stylelint --fix',
  '*.{js,ts,astro,svelte}': 'eslint --fix',
  '*': 'prettier --ignore-unknown --write',
};
