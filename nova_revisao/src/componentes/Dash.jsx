import Tarefa from './Tarefa';
import { tarefas } from './dados';
import './Dash.css';

export default function Dash({ tema }) {
  return (
    <div className={tema === 'light' ? 'dashboard light' : 'dashboard dark'}>
      <h2>Minha Lista de Tarefas</h2>

      {tarefas.map((tarefa) => (
        <Tarefa key={tarefa.id} texto={tarefa.titulo} tema={tema} />
      ))}
    </div>
  );
}
