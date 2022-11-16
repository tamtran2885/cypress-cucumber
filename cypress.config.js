const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  // To use esBuild for the bundler when preprocessing
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  // defaultCommandTimeout: 10000,
  pageLoadTimeout: 10000,
  e2e: {
    setupNodeEvents,
    baseUrl: "https://stately-caramel-5cb3b8.netlify.app",
    chromeWebSecurity: false,
    specPattern: "cypress/e2e/features/*.feature",
  },
});
