const { StatusPost, DESCRICAO } = require('.');

describe('StatusPost Function', () => {
  test('quando o status for publicado, retorne seu próprio conteúdo', () => {
    expect(StatusPost('publicado')).toBe(DESCRICAO);
  });
  test('quando a cor for azul, retorne o rgb correspondente', () => {
    expect(StatusPost('rascunho')).toBe('draft Essa é uma pequena descrição.');
  });
  test('quando a cor for amarela, retorne o rgb correspondente', () => {
    expect(StatusPost('')).toBe('');
  });
});
