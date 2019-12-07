module.exports = {
  coveragePathIgnorePatterns: ["/node_modules/", "/dist/", "/tests/"],
  testPathIgnorePatterns: ["/node_modules/", "/.history/"],
  testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.[jt]sx?$",
  coverageThreshold: {
    "global": {
      "branches": 80,
      "functions": 80,
      "lines": 80,
      "statements": 0
    }
  }
};