const InversoDeVerdadeiro = require('.')

describe('InversoDeVerdadeiro Function', () => {
  test('Os valores deverao ser alterados', () => {
    expect(InversoDeVerdadeiro(123)).toBe(321)
  })
})
