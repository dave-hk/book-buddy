describe('Basic Test Suite', () => {
  test('true should be true', () => {
    expect(true).toBe(true);
  });
  
  test('string concatenation works', () => {
    expect('hello ' + 'world').toBe('hello world');
  });
}); 