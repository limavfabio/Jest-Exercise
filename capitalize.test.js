const capitalize = require("./capitalize");

test('booksHelf should return Bookshelf (capitalize)', () => {
  expect(capitalize('booksHelf')).toBe('Bookshelf');
});