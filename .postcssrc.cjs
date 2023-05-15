/* eslint-disable @typescript-eslint/no-var-requires */

const config = {
  plugins: [
    require('postcss-preset-env')({
      stage: 2,
      preserve: true,
      // TODO might not need nesting to be manually enabled anymore
      features: {
        'nesting-rules': true,
        'custom-media-queries': true,
      },
    }),
  ],
};

module.exports = config;
