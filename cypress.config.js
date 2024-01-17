const { defineConfig } = require("cypress")
const fs = require('fs')


module.exports = defineConfig({
  projectId: '5cskhu',
  e2e: {
    viewportWidth: 1600,
    viewportHeight: 900,
    experimentalRunAllSpecs: true,
    baseUrl: 'https://automationexercise.com/',
    setupNodeEvents(on, config) {
      on('task', {
        checkFileExistence: function(filePath) {
          const exists = fs.existsSync(filePath)
          if (exists) {
            return true
          } else {
            throw new Error(`O arquivo ${filePath} não foi encontrado`)
          }
        }
      })
    },
  },
});