describe('Environment Variables', () => {
  let dotEnvVars: Record<string, string> = {};
  
  beforeAll(async () => {
    // Read the .env file
    const fs = require('fs');
    try {
      const envContent = fs.readFileSync('./.env', 'utf8');
      
      // Parse the .env content
      envContent.split('\n').forEach((line: string) => {
        const match = line.match(/^([^=]+)=(.*)$/);
        if (match) {
          const [, key, value] = match;
          dotEnvVars[key.trim()] = value.trim();
        }
      });
    } catch (error) {
      console.warn('No .env file found or unable to read it');
    }
  });
  
  test('required Vercel environment variables are defined in workflow files', () => {
    // We don't test the actual values since they're secrets
    // but we confirm the variables are referenced
    const fs = require('fs');
    const previewYaml = fs.readFileSync('./.github/workflows/preview.yaml', 'utf8');
    const productionYaml = fs.readFileSync('./.github/workflows/production.yaml', 'utf8');
    
    const requiredVars = [
      'VERCEL_ORG_ID',
      'VERCEL_PROJECT_ID',
      'VERCEL_TOKEN'
    ];
    
    for (const variable of requiredVars) {
      expect(previewYaml).toContain(variable);
      expect(productionYaml).toContain(variable);
    }
  });
  
  test('app environment variables are defined in .env file', () => {
    // These are the app-specific variables needed
    const requiredAppVars = [
      'VITE_PROJECT_ID',
      'VITE_AGENT_ID'
    ];
    
    for (const variable of requiredAppVars) {
      expect(Object.keys(dotEnvVars)).toContain(variable);
    }
  });
}); 