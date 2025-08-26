import { defineConfig } from "cypress";

export default defineConfig({
  watchForFileChanges: false,
  projectId: "6za1w3",
  e2e: {
    baseUrl: "https://practicesoftwaretesting.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
