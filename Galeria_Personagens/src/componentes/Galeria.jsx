import Card from "./Card";
import Detalhes from "./Detalhes";
import { useState } from 'react';
import './Galeria.css'

export default function Galeria({ characters }) {
    
  const [selectedCharacter, setSelectedCharacter] = useState(null); // Cria um estado para guardar o personagem selecionado.

  const handleSelectCharacter = (character) => {
    setSelectedCharacter(character); // Atualiza personagem ao clicar no card
  };

  return (
    <div className="galeria">
      {characters.map((char) => //Faz um .map sobre os personagens e renderiza um Card para cada um.
      (
        <Card // Passa os dados e a função de clique para o componente Card.
          key={char.id}
          name={char.name}
          image={char.image}
          onClick={() => handleSelectCharacter(char)}
        />
      ))}
      <Detalhes character={selectedCharacter} /> {/* Mostra o componente Detalhes, passando o personagem selecionado como prop. */}
    </div>
  );
}