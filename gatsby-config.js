require("dotenv/config");

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

/** @type {import('gatsby').GatsbyConfig} */
const config = {
  siteMetadata: {
    title: `Automeyt`,
    description: `We build AI agents and set up automations for your business' success`,
    author: `@mayknxyz`,
    siteUrl: `https://automeyt.com`,
  },
  plugins: [],
};

module.exports = config;
