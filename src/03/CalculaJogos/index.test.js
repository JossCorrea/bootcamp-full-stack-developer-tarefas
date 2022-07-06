const CalculaJogos = require('.');

describe('CalculaJogos Function', () => {
  test('quando a quantidade for 5, seu valor será de 15', () => {
    expect(CalculaJogos(5)).toBe(15);
  });
  test('quando a quantidade for 3, seu valor será de 6', () => {
    expect(CalculaJogos(3)).toBe(6);
  });
});
