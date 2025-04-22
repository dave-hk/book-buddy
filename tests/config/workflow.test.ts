describe('GitHub Actions Workflows', () => {
  let previewConfig: any;
  let productionConfig: any;
  
  beforeAll(async () => {
    // Read the workflow YAML files
    const fs = require('fs');
    const yaml = require('js-yaml');
    
    const previewYaml = fs.readFileSync('./.github/workflows/preview.yaml', 'utf8');
    const productionYaml = fs.readFileSync('./.github/workflows/production.yaml', 'utf8');
    
    previewConfig = yaml.load(previewYaml);
    productionConfig = yaml.load(productionYaml);
  });
  
  describe('Preview Workflow', () => {
    test('should have correct name', () => {
      expect(previewConfig.name).toBe('Vercel Preview Deployment');
    });
    
    test('should have required environment variables', () => {
      expect(previewConfig.env).toHaveProperty('VERCEL_ORG_ID');
      expect(previewConfig.env).toHaveProperty('VERCEL_PROJECT_ID');
    });
    
    test('should run on branches other than main', () => {
      expect(previewConfig.on.push['branches-ignore']).toContain('main');
    });
    
    test('should include test step before build', () => {
      const steps = previewConfig.jobs['Deploy-Preview'].steps;
      const testStep = steps.find((step: any) => step.name === 'Run Tests');
      const testStepIndex = steps.findIndex((step: any) => step.name === 'Run Tests');
      const buildStepIndex = steps.findIndex((step: any) => step.name === 'Build Project Artifacts');
      
      expect(testStep).toBeDefined();
      expect(testStepIndex).toBeLessThan(buildStepIndex);
    });
  });
  
  describe('Production Workflow', () => {
    test('should have correct name', () => {
      expect(productionConfig.name).toBe('Vercel Production Deployment');
    });
    
    test('should have required environment variables', () => {
      expect(productionConfig.env).toHaveProperty('VERCEL_ORG_ID');
      expect(productionConfig.env).toHaveProperty('VERCEL_PROJECT_ID');
    });
    
    test('should run only on main branch', () => {
      expect(productionConfig.on.push.branches).toContain('main');
    });
    
    test('should include test step before build', () => {
      const steps = productionConfig.jobs['Deploy-Production'].steps;
      const testStep = steps.find((step: any) => step.name === 'Run Tests');
      const testStepIndex = steps.findIndex((step: any) => step.name === 'Run Tests');
      const buildStepIndex = steps.findIndex((step: any) => step.name === 'Build Project Artifacts');
      
      expect(testStep).toBeDefined();
      expect(testStepIndex).toBeLessThan(buildStepIndex);
    });
  });
}); 