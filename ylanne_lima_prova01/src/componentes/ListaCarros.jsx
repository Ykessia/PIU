// importando os dados dos carros do arquivo js
import { carros } from './dados_carros';

// criando e exportando (para que ela possa ser usada em outras paginas) a função ListaCarros
export default function ListaCarros() {
// exibe lista completa dos carros
    return (
        <div className="lista-carros">
            <h2>Todos os Carros</h2>

            {/* Listando todos os carros com modelo e cores */}
            <ul>
            {carros.map((carro) => (
                <li key={carro.id}>
                Modelo: {carro.modelo}, Cor: {carro.cor}
                </li>
            ))}
            </ul>
        </div>
)}
