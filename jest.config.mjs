// ESM-compatible Jest config file
export default {
  transform: {
    '^.+\\.ts$': ['ts-jest', {
      tsconfig: 'tsconfig.custom.json',
      useESM: true
    }],
    '^.+\\.svelte$': ['svelte-jester', { preprocess: true }]
  },
  extensionsToTreatAsEsm: ['.ts', '.svelte'],
  moduleFileExtensions: ['js', 'ts', 'svelte'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.mjs'],
  testPathIgnorePatterns: ['/node_modules/', '/build/', '/.svelte-kit/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,svelte}'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  transformIgnorePatterns: [
    'node_modules/(?!(string-width|strip-ansi|wrap-ansi)/)'
  ],
  // Workaround for ESM issues
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },
  // Very important when running in CI
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons'],
  }
}; 