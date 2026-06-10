import { useState } from "react";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [tarefaTemp, setTarefaTemp] = useState('');

  const cadastroTarefa = (e) => {
    e.preventDefault();
    if (tarefaTemp.trim() !== '') {
      setTarefas([...tarefas, tarefaTemp]);
      setTarefaTemp('');
    }
  };

  return (
    <div className="App">
      <input data-testid="input-tarefa" type="text" value={tarefaTemp} onChange={(e) => setTarefaTemp(e.target.value)} />
      <button data-testid="btn-cadastrar" type="button" onClick={cadastroTarefa}>
        Enviar
      </button>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
