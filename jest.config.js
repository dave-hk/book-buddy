/** @type {import('jest').Config} */
module.exports = {
  transform: {
    '^.+\\.ts$': ['ts-jest', {
      tsconfig: 'tsconfig.custom.json'
    }],
    '^.+\\.svelte$': ['svelte-jester', { preprocess: true }]
  },
  moduleFileExtensions: ['js', 'ts', 'svelte'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest-setup.js'],
  testPathIgnorePatterns: ['/node_modules/', '/build/', '/.svelte-kit/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,svelte}'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  transformIgnorePatterns: [
    'node_modules/(?!(string-width|strip-ansi|wrap-ansi)/)'
  ],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons'],
  }
}; 