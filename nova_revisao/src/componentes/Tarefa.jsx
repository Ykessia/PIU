import { useState } from 'react';
import './Tarefa.css';

export default function Tarefa({ texto, tema }) {
  const [concluida, setConcluida] = useState(false);

  function toggleConcluida() {
    setConcluida(!concluida);
  }

  return (
    <div className={`tarefa ${tema} ${concluida ? 'concluida' : ''}`}>
      <span>{texto}</span>
      <button onClick={toggleConcluida}>
        {concluida ? 'Desmarcar' : 'Concluir'}
      </button>
    </div>
  );
}
