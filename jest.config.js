module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: [
    '<rootDir>/',
  ],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
  ],
  moduleDirectories: ['node_modules', 'src'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    '!**/tests/**.{js,ts}',
    '!**/*.{d.ts}',
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/src/types.d.ts',
  ],
  automock: false,
  // setupFiles: [
  //   './setupJest.js',
  // ],
  // "coverageThreshold": {
  //   "global": {
  //     "branches": 100,
  //     "functions": 100,
  //     "lines": 100,
  //     "statements": 100
  //   }
  // }
};
