const CallProp = require('.')

describe('CallProp Function', () => {
  test('Os valores deverao ser impressos', () => {
    expect(CallProp('ituring_repo', 4)).toBe(
      'Olá, meu perfil no GitHub é ituring_repo e tenho 4 repositórios criados.'
    )
  })
})
