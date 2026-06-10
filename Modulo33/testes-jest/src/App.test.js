import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Testes para o componente principal', () => {
  test('deve renderizar corretamente', () => {
    render(<App />);
    expect(screen.getByText('Enviar')).toBeInTheDocument();
  });

  test('deve adicionar "estudar react" na lista de tarefas', () => {
    const {debug } = render(<App />);
    fireEvent.change(screen.getByTestId('input-tarefa'),
      {
        target: {
          value: 'estudar react'
        }
      });
    fireEvent.click(screen.getByTestId('btn-cadastrar'));
    debug();
    expect(screen.getByText('estudar react')).toBeInTheDocument();
  });
});

export default App;