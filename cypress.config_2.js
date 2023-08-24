const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 2240,
  viewportHeight: 1260,
  video: false,
  projectId: "yjbo6d",
  e2e: {
    baseUrl: "https://santa-secret.ru/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
