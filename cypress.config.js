const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'https://jobs.workable.com/view/bPHXms7TQrd4mXeRdJSB5Q/remote-%2311704-api-automation-tester-in-mexico-at-qualitest'
  },
});
