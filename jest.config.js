module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  coverageDirectory: "coverage",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  preset: "ts-jest",
  moduleNameMapper: {
    "^.+\\.(css|less)$": "<rootDir>/config/CSStub.js",
  },
  testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
};
