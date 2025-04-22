// Import jest-dom for extended assertions
import '@testing-library/jest-dom';

// Mock globals if needed for your tests
global.process.env = {
  ...process.env,
  // Add any environment variables needed for tests
  NODE_ENV: 'test',
}; 