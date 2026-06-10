const saudaacao = require('./saudacao');

describe('Testes para a função de saudação', () => {
  test('deve retornar "Olá, João!" quando o nome for "João"', () => {
    const olaJoao = saudaacao('João');
    expect(saudaacao('João')).toBe('Olá, João!');
    expect(false).toBeFalsy();
    expect(olaJoao).toContain('Olá');
  });
});
module.exports = saudaacao;