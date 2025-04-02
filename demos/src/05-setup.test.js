describe('Group 1', () => {
  beforeAll(() => {
    console.log('beforeAll');
  });
  beforeEach(() => {
    console.log('beforeEach');
  });
  afterAll(() => {
    console.log('afterAll');
  });
  afterEach(() => {
    console.log('afterEach');
  });

  test('Case 1', () => {
    console.log('Case 1');
    expect(1).toBe(1);
  });
  test('Case 2', () => {
    console.log('Case 2');
    expect(1).toBe(1);
  });
  describe('Group 2', () => {
    test('Case 3', () => {
      console.log('Case 3');
      expect(1).toBe(1);
    });
    test('Case 4', () => {
      console.log('Case 4');
      expect(1).toBe(1);
    });
  });
});
