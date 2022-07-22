const StringToRgb = require('.')

describe("StringToRgb Function", () => {
  test("quando a cor for vermelha, retorne o rgb correspondente", () => {
    expect(StringToRgb("red")).toBe("rgb(255,0,0)");
  });
  test("quando a cor for azul, retorne o rgb correspondente", () => {
    expect(StringToRgb("blue")).toBe("rgb(0,0,255)");
  });
  test("quando a cor for amarela, retorne o rgb correspondente", () => {
    expect(StringToRgb("yellow")).toBe("rgb(255,255,0)");
  });
  test("quando a cor for verde, retorne o rgb correspondente", () => {
    expect(StringToRgb("green")).toBe("rgb(0,128,0)");
  });
  test("quando não for informada ou inválida, retorne o rgb correspondente", () => {
    expect(StringToRgb("outra cor")).toBe("rgb(255,165,0)");
  });
});
