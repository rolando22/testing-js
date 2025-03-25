const { sum, multiply, divide } = require('./02-math');

test('adds 1 + 3 should be 4', () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});

test('multiply 3 * 5 should be 15', () => {
  const result = multiply(3, 5)
  expect(result).toBe(15);
});

test('divide 6 / 3 should be 2', () => {
  const result = divide(6, 3)
  expect(result).toBe(2);
});

test('should divide for zero', () => {
  const result = divide(6, 0)
  expect(result).toBeNull();
});
