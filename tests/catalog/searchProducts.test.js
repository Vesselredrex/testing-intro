const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

describe('searchProducts', () => {
  test("'Наушники' возвращает товар с ID 1", () => {
    const result = searchProducts(products, 'Наушники');
    const ids = result.map((product) => product.id);

    expect(ids).toEqual([1]);
  });
  test("'Чистый код' возвращает товар с ID 6", () => {
    const result = searchProducts(products, 'Чистый код');
    const ids = result.map((product) => product.id);

    expect(ids).toEqual([6]);
  });
  test("'Настольная лампа' возвращает товар с ID 4", () => {
    const result = searchProducts(products, 'Настольная лампа');
    const ids = result.map((product) => product.id);

    expect(ids).toEqual([4]);
  });
});
