module.exports = {
  preset: "ts-jest/presets/js-with-ts",
  testMatch: [
    "<rootDir>/packages/*/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/packages/*/src/**/?(*.)(spec|test).{js,jsx,ts,tsx}",
  ],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "dist/",
    "<rootDir>/packages/components/src/index.ts",
    "<rootDir>/packages/componentssrc/components/index.ts",
  ],
  collectCoverageFrom: [
    "<rootDir>/packages/*/src/**/*.{js,ts,tsx,jsx}",
    "!<rootDir>/packages/*/src/**/*.stories.*",
  ],
  moduleNameMapper: {
    "\\.s?css$": "identity-obj-proxy",
  },
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  setupFilesAfterEnv: ["<rootDir>/utils/setupTests.ts"],
};
