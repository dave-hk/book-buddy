import { render } from '@testing-library/svelte';
import { JSDOM } from 'jsdom';

// Since we're testing HTML directly, we need to parse it
describe('Meta Tags', () => {
  let dom: JSDOM;
  
  beforeAll(async () => {
    // Read app.html directly for testing meta tags
    const fs = require('fs');
    const htmlContent = fs.readFileSync('./src/app.html', 'utf8');
    dom = new JSDOM(htmlContent);
  });

  test('should have correct meta description', () => {
    const metaDescription = dom.window.document.querySelector('meta[name="description"]');
    expect(metaDescription).not.toBeNull();
    expect(metaDescription?.getAttribute('content')).toBe('Your AI-powered book recommendation companion');
  });

  test('should have correct title', () => {
    const title = dom.window.document.querySelector('title');
    expect(title?.textContent).toBe('Book Buddy | Find your next favorite book');
  });
}); 