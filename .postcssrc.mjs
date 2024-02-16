import presetEnv from 'postcss-preset-env';

/** @type {import('postcss-load-config').Config} */
export default {
  plugins: [
    presetEnv({
      features: {
        'custom-media-queries': true,
      },
    }),
  ],
};
