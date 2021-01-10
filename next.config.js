const withImages = require('next-images');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

module.exports = withBundleAnalyzer(
  withImages({
    env: {
      API_URI: 'https://api.themarket.io'
    }
  })
);
