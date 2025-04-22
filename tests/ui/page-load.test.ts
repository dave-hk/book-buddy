import { JSDOM } from 'jsdom';

describe('Page Load Transition', () => {
  let dom: JSDOM;
  
  beforeAll(async () => {
    // Read app.html directly for testing page load transitions
    const fs = require('fs');
    const htmlContent = fs.readFileSync('./src/app.html', 'utf8');
    dom = new JSDOM(htmlContent);
  });

  test('body should have correct transition CSS', () => {
    // Get style element content
    const styleElement = dom.window.document.querySelector('style');
    const styleContent = styleElement?.textContent || '';
    
    // Verify it contains opacity transition
    expect(styleContent).toContain('opacity: 0');
    expect(styleContent).toContain('transition: opacity');
    expect(styleContent).toContain('opacity: 1');
  });

  test('script should add loaded class to body after DOMContentLoaded', () => {
    // Get script element content
    const scripts = Array.from(dom.window.document.querySelectorAll('script'));
    
    // Find the inline script (not the imported one)
    const inlineScript = scripts.find(script => 
      !script.hasAttribute('src') && script.textContent?.includes('DOMContentLoaded')
    );
    
    // Verify script adds the loaded class
    expect(inlineScript).not.toBeNull();
    expect(inlineScript?.textContent).toContain('document.body.classList.add(\'loaded\')');
  });
}); 