// Import jest-dom for extended assertions
import '@testing-library/jest-dom';

// Set up any global mocks or variables needed for tests
global.process.env = {
  ...process.env,
  NODE_ENV: 'test',
}; 