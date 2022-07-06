const ImparOuPar = require('.')

describe('ImparOuPar Function', () => {
  test('should return par', () => {
    expect(ImparOuPar(10)).toBe('Par')
  })
  test('should return impar', () => {
    expect(ImparOuPar(11)).toBe('Ímpar')
  })
})
