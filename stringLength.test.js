const stringLength = require('./stringLength.js');

test('dog return 3 and true', () => {
    expect(stringLength('dog')).toBe(3, true);
});

test('empty string return 0 and false', () => {
    expect(stringLength('')).toBe(0, false);
});

test('Instruction return 11 and false', () => {
    expect(stringLength('Instruction')).toBe(11, false);
});

test('012345 return 6 and true', () => {
    expect(stringLength('012345')).toBe(6, true);
});