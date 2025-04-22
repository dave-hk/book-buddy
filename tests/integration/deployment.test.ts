describe('Deployment Integration', () => {
  test('package.json has correct build scripts', () => {
    const fs = require('fs');
    const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
    
    // Check for essential scripts
    expect(packageJson.scripts).toHaveProperty('build');
    expect(packageJson.scripts).toHaveProperty('dev');
    expect(packageJson.scripts).toHaveProperty('preview');
    expect(packageJson.scripts).toHaveProperty('test');
  });
  
  test('project contains required config files for deployment', () => {
    const fs = require('fs');
    const path = require('path');
    
    // Check for config files essential for deployment
    const requiredFiles = [
      '.github/workflows/preview.yaml',
      '.github/workflows/production.yaml',
      'vite.config.ts',
      'svelte.config.js',
      'tsconfig.json'
    ];
    
    for (const file of requiredFiles) {
      expect(fs.existsSync(path.join('.', file))).toBe(true);
    }
  });
  
  test('dependencies include required packages for Vercel deployment', () => {
    const fs = require('fs');
    const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
    
    // Check for important dependencies
    const allDependencies = {
      ...packageJson.dependencies || {},
      ...packageJson.devDependencies || {}
    };
    
    const requiredPackages = [
      '@sveltejs/adapter-static',  // For static file generation
      '@sveltejs/kit',             // SvelteKit is required
      'typescript'                 // TypeScript support
    ];
    
    for (const pkg of requiredPackages) {
      expect(Object.keys(allDependencies)).toContain(pkg);
    }
  });
}); 