import { NumeroMaior } from "./";

describe("NumeroMaior Function", () => {
  test("dados dois numeros, o maior sera retornado", () => {
    expect(NumeroMaior(10, 20)).toBe(20);
    expect(NumeroMaior(30, 10)).toBe(30);
    expect(NumeroMaior(10, 5)).toBe(10);
  });
});
