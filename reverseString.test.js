const reverseString = require('./reverseString.js');

test('cat returns tac', () => {
    expect(reverseString('cat')).toBe('tac');
});

test('empty string should return empty string', () => {
    expect(reverseString('')).toBe('');
});

test('A fox jumps over the lazy dog should return its reverse', () => {
    expect(reverseString('A fox jumps over the lazy dog')).toBe('god yzal eht revo spmuj xof A');
});