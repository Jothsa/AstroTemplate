export default {
  '*.{postcss,css,astro}': 'stylelint --fix',
  '*.{js,ts,astro}': 'eslint --fix',
  '*': 'prettier --ignore-unknown --write',
};
