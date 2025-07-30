import { useState, useEffect } from 'react';

export default function Entradas() {
    const [email, setEmail] = useState('');
    const [numero, setNumero] = useState('');

    useEffect(() => {
        const num = Number(numero);
        if (num === '1') {
            document.body.style.backgroundColor = 'pink';
        } else if (num === '2') {
            document.body.style.backgroundColor = 'red';
        } else {
            document.body.style.backgroundColor = 'black';
        }
        }, [num]);

return (
    <div>
        <input type="number" placeholder="Digite 1 (rosa) ou 2 (azul)" min="1" max="2" value={numero} onChange={e => setNumero(e.target.value)}/>

        <button onClick={() => setAtualizar(atualizar + 1)}>Acessar API</button>
    </div>
    );
}