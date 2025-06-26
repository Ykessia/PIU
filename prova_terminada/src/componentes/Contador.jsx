// Importando o usestate para controlar o estado atual do contador e importando o css feito para os botões
import './Contador.css'
import { useState } from 'react';

// criando e exportando (para que ela possa ser usada em outras paginas) a função contador
export default function Contador() {
    // definindo o valor inicial do contador
    const [contador, setContador] = useState(0);

return (
    <div className="contador-container">
        {/* pega o valor da função criada anteriormente e exibe o seu valor atual */}
        <h2>Contador: {contador}</h2>
        {/* botão com a função onclick que faz com que ao clicar nele seja somado +1 ao valor atual do contador 
        e caso seja maior que 10 o botão incrementar fica maior se não, continua do mesmo jeito*/}
        <button onClick={() => setContador(contador + 1)} className={contador > 10 ? "maior" : "botao incrementar"} >
        somar
        </button>
        {/* botão com a função onclick que faz com que ao clicar nele seja subtraido -1 ao valor atual do contador 
        e caso seja menor que 0 o botão decrementar fica menor se não, continua do mesmo jeito*/}
        <button onClick={() => setContador(contador - 1)} className={contador < 0 ? "menor" : "botao decrementar"}>
        diminuir
        </button>
    </div>
    );
}