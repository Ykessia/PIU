import './Detalhes.css'

export default function Detalhes({ character }) {
  if (!character) return null; // Se nenhum personagem estiver selecionado, não renderiza nada

  return (
    <div className='detalhes'>
      <h2>Detalhes do Personagem</h2>
      <img src={character.image} />
      <h3>{character.name}</h3>
      <p>{character.description}</p>
    </div>
  );
}