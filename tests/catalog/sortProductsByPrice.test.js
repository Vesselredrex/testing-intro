const products = require("../../src/data/products");
const { sortProductsByPrice } = require("../../src/catalog");

describe("sortProductsByPrice", () => {
  test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
    const result = sortProductsByPrice(products, "asc");
    const ids = result.map((product) => product.id);

    expect(ids).toEqual([3, 6, 5, 4, 2, 1]);
  });
  test("все товары без направления сортируются как [3, 6, 5, 4, 2, 1]", () => {
    const result = sortProductsByPrice(products);
    const ids = result.map((product) => product.id);

    expect(ids).toEqual([3, 6, 5, 4, 2, 1]);
  });
  test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]", () => {
    const result = sortProductsByPrice(
      [products[0], products[2], products[3]],
      "asc",
    );
    const ids = result.map((product) => product.id);

    expect(ids).toEqual([3, 4, 1]);
  });
  test("товары [5, 2, 6] c 'asc' сортируются как [6, 5, 2]", () => {
    const result = sortProductsByPrice(
      [products[4], products[1], products[5]],
      "asc",
    );
    const ids = result.map((product) => product.id);

    expect(ids).toEqual([6, 5, 2]);
  });
  test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
    const result = sortProductsByPrice(products, "desc");
    const ids = result.map((product) => product.id);

    expect(ids).toEqual([1, 2, 4, 5, 6, 3]);
  });
  test("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]", () => {
    const result = sortProductsByPrice(
      [products[2], products[0], products[3]],
      "desc",
    );
    const ids = result.map((product) => product.id);

    expect(ids).toEqual([1, 4, 3]);
  });
  test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]", () => {
    const result = sortProductsByPrice(
      [products[4], products[1], products[5]],
      "desc",
    );
    const ids = result.map((product) => product.id);

    expect(ids).toEqual([2, 5, 6]);
  });
  test("'asc' не меняет исходный массив [1, 3, 4]", () => {
    const catalog = [products[0], products[2], products[3]];
    const original = [...catalog];

    const result = sortProductsByPrice(catalog, "asc");

    expect(catalog).toEqual(original);
    expect(result).not.toBe(catalog);
  });
  test("'desc' не меняет исходный массив [1, 3, 4]", () => {
    const catalog = [products[0], products[2], products[3]];
    const original = [...catalog];

    const result = sortProductsByPrice(catalog, "desc");

    expect(catalog).toEqual(original);
    expect(result).not.toBe(catalog);
  });
  test("направление по умолчанию не меняет исходный массив всех товаров", () => {
    const original = [...products];

    const result = sortProductsByPrice(products);

    expect(products).toEqual(original);
    expect(result).not.toBe(products);
  });
});
