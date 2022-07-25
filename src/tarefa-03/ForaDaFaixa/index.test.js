const ForaDaFaixa = require('.')

describe("ForaDaFaixa Function", () => {
  test("quando o valor estiver dentro da faixa, retorne verdadeiro", () => {
    expect(ForaDaFaixa(10, 20, 15)).toBe(true);
  });
  test("quando o valor estiver fora da faixa, retorne verdadeiro", () => {
    expect(ForaDaFaixa(10, 30, 40)).toBe(false);
  });
});
