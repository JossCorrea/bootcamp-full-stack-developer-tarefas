const HelloWorld = require('.')

describe("HelloWorld Function", () => {
  test("retorne uma string", () => {
    expect(HelloWorld()).toBe("Olá, Mundo!");
  });
});
