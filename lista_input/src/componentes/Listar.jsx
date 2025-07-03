import { useState } from 'react';
import './Listar.css';

export default function ListaDeTarefas() {
    const [tarefa, setTarefa] = useState('');
    const [prioridade, setPrioridade] = useState('media'); // Prioridade padrão
    const [categoria, setCategoria] = useState(''); // Categoria padrão
    const [lista, setLista] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLista([...lista, { texto: tarefa, status: 'pendente', prioridade, categoria }]);
        setTarefa('');
        setPrioridade('media');
        setCategoria('');
    };

    const mudarStatus = (i, status) => {
        const novaLista = [...lista];
        novaLista[i].status = status;
        setLista(novaLista);
    };

    const organizarTarefas = (i, lugar) => {
        const novaLista = [...lista];
        const novaPosicao = i + lugar;

        if (novaPosicao < 0 || novaPosicao >= lista.length) return;

        const auxiliar = novaLista[novaPosicao];
        novaLista[novaPosicao] = novaLista[i];
        novaLista[i] = auxiliar;

        setLista(novaLista);
    };

    return (
        <div className="lista">
            <h2>Lista de Tarefas</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        name="tarefa"
                        value={tarefa}
                        onChange={(e) => setTarefa(e.target.value)}
                        placeholder="Digite uma nova tarefa"
                        required
                    />
                </label>
                <label>
                    <select value={prioridade} onChange={(e) => setPrioridade(e.target.value)}>
                        <option value="baixa">Baixa</option>
                        <option value="media">Média</option>
                        <option value="alta">Alta</option>
                    </select>
                </label>
                <label>
                    <input
                        type="text"
                        name="categoria"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                        placeholder="Categoria (opcional)"
                    />
                </label>
                <input type="submit" value="Adicionar" />
            </form>

            <ul>
                {lista.map((item, i) => (
                    <li key={i} className={item.status === 'realizada' ? 'concluida' : item.status === 'nao-realizada' ? 'nao-realizada' : 'pendente'}>
                        <div>
                            <span>{item.texto} - {item.categoria} - Prioridade: {item.prioridade}</span>
                            <div className="botoes-status">
                                <button type="button" className={item.status === 'realizada' ? 'realizada' : ''} onClick={() => mudarStatus(i, 'realizada')}>Realizada</button>
                                <button type="button" className={item.status === 'nao-realizada' ? 'nao-realizada' : ''} onClick={() => mudarStatus(i, 'nao-realizada')}>Não realizada</button>
                                <button type="button" className={item.status === 'pendente' ? 'pendente' : ''} onClick={() => mudarStatus(i, 'pendente')}>Pendente</button>
                                <button id='bt-posicao' onClick={() => organizarTarefas(i, -1)}>p/ cima</button>
                                <button id='bt-posicao' onClick={() => organizarTarefas(i, +1)}>p/ baixo</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
