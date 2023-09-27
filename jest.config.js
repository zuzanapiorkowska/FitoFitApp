module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  coverageDirectory: "coverage",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  preset: "ts-jest",
  moduleNameMapper: {
    '^.+\\.(css|less)$': '<rootDir>/config/CSStub.js',
  },
  testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
};
