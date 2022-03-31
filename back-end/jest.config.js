module.exports = {

  reporters: [
    "default",
    ["./node_modules/jest-html-reporter", {
      "pageTitle": "Test Report1"
    }]
  ],
  testResultsProcessor: "./node_modules/jest-html-reporter"
};