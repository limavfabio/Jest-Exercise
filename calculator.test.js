const calculator = require("./calculator");

describe('Add method', () => {
  test('3 and 5 should return 8', () => {
    expect(calculator.add(3, 5)).toBe(8);
  });

  test('15796 and 112356 should return 128152', () => {
    expect(calculator.add(15796, 112356)).toBe(128152);
  });

  test('-40 and 5 should return -35', () => {
    expect(calculator.add(-40, 5)).toBe(-35);
  });
});

describe('Subtract method', () => {
  test('80 and 50 should return 8', () => {
    expect(calculator.subtract(80, 50)).toBe(30);
  });

  test('190 and -800 should return 990', () => {
    expect(calculator.subtract(190, -800)).toBe(990);
  });

  test('-40 and 5 should return -45', () => {
    expect(calculator.subtract(-40, 5)).toBe(-45);
  });
});

describe('Mutiply method', () => {
  test('3 and 5 should return 15', () => {
    expect(calculator.multiply(3, 5)).toBe(15);
  });

  test('150 and 1990 should return 298500', () => {
    expect(calculator.multiply(150, 1990)).toBe(298500);
  });

  test('-40 and 5 should return -200', () => {
    expect(calculator.multiply(-40, 5)).toBe(-200);
  });
});

describe('Divide method', () => {
  test('150 and 5 should return 30', () => {
    expect(calculator.divide(150, 5)).toBe(30);
  });

  test('3 and 2 should return 1.5', () => {
    expect(calculator.divide(3, 2)).toBe(1.5);
  });

  test('-40 and 5 should return -8', () => {
    expect(calculator.divide(-40, 5)).toBe(-8);
  });
});