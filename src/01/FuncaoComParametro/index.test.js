const FuncaoComParametro = require('.')

describe("FuncaoComParametro Function", () => {
  test("quando o parametro for informado, retorne a mensagem", () => {
    expect(FuncaoComParametro("Saulo")).toBe("Olá, Saulo!");
  });
});
