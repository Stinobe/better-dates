module.exports = {
  coveragePathIgnorePatterns: ["/node_modules/", "/dist/", "/tests/"],
  testPathIgnorePatterns: ["/node_modules/", "/.history/"],
  testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.[jt]sx?$",
  coverageThreshold: {
    "global": {
      "branches": 90,
      "functions": 90,
      "lines": 90,
      "statements": 0
    }
  }
};