/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  bail: 0,
  cacheDirectory: "/tmp/jest_rs",
  clearMocks: true,
  preset: 'ts-jest',
  collectCoverage: false,
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
  fakeTimers: {
    "enableGlobally": false
  },
  maxWorkers: "50%",
  // modulePathIgnorePatterns: [],
  // resetMocks: true,
  restoreMocks: true,
  verbose: true,
  transform: {}
};
