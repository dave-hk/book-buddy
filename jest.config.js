/** @type {import('jest').Config} */
export default {
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.svelte$': ['svelte-jester', { preprocess: true }]
  },
  extensionsToTreatAsEsm: ['.ts', '.svelte'],
  moduleFileExtensions: ['js', 'ts', 'svelte'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.js'],
  testPathIgnorePatterns: ['/node_modules/', '/build/', '/.svelte-kit/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,svelte}'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  // Handle ESM modules with experimental flag
  transformIgnorePatterns: [
    'node_modules/(?!(string-width|strip-ansi|wrap-ansi)/)'
  ],
  // Workaround for ESM issues
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  }
}; 