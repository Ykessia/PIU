// importando os dados dos carros do arquivo js
import { carros } from './dados_carros';
import './ListaCarros.css'

// criando e exportando (para que ela possa ser usada em outras paginas) a função ListaCarros
export default function ListaCarros() {
// exibe lista completa dos carros
    return (
        <div className="lista-carros">
            <h2>Todos os Carros</h2>
            {/* Listando todos os carros com modelo e cores */}
            <ul>
            {/* Usei a função map para percorrer cada item da lista de carros */}
            {carros.map((carro) => (
                /* pegando o ID de cada carro na lista para exibir o seu modelo e cor*/
                <li key={carro.id}>
                Modelo: {carro.modelo}, Cor: {carro.cor}
                </li>
            ))}
            </ul>

            <h2>Modelos com ano superior a 2019</h2>
            <ul>
            {/*usando a função filter para selecionar apenas os carros cujo ano seja maior que 2019.
  Depois de filtrar, usei map para percorrer esse novo array e exibir os modelos e anos,*/}
            {carros
            .filter((carro) => carro.ano > 2019)
            .map((carro, index) => (
                <li key={index}>
                Modelo: {carro.modelo} - Ano: {carro.ano}
                </li>
            ))}
            </ul>

        </div>
    
)}
