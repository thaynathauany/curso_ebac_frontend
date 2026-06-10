const calculadora = require('./calculadora');

describe('Testes para a calculadora', () => {
  test('somar 1 + 2 deve ser igual a 3', () => {
    expect(calculadora.soma(1, 2)).toBe(3);
  });

  test('subtrair 5 - 3 deve ser igual a 2', () => {
    expect(calculadora.subtracao(5, 3)).toBe(2);
  });

  test('multiplicar 4 * 6 deve ser igual a 24', () => {
    expect(calculadora.multiplicacao(4, 6)).toBe(24);
  });

  test('dividir 10 / 2 deve ser igual a 5', () => {
    expect(calculadora.divisao(10, 2)).toBe(5);
  });
});
