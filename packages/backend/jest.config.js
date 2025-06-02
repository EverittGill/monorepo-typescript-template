// packages/backend/jest.config.js
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/src'], // Look for tests within the src directory
    testMatch: [ // Patterns Jest uses to detect test files
      '**/__tests__/**/*.+(ts|tsx|js)',
      '**/?(*.)+(spec|test).+(ts|tsx|js)',
    ],
    transform: {
      '^.+\\.(ts|tsx)$': ['ts-jest', {
        // ts-jest configuration options go here
        // For example, if your tsconfig.json is not at the root:
        // tsconfig: 'tsconfig.json',
      }],
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    collectCoverage: true, // Enable coverage collection
    coverageDirectory: "coverage", // Where to store coverage reports
    coverageProvider: "v8", // or "babel"
    // Automatically clear mock calls, instances, contexts and results before every test
    clearMocks: true,
  };