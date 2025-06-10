import './Card.css';

export default function Card({ name, image, onClick }) // Declara o componente Card, que recebe as props name, image e onClick. 
{
  return (
    <div className="card" onClick={onClick}> {/*conteiner para escolher o personagem*/}
      <figure> {/*estrutura semântica para imagens com legenda*/}
        <img src={image} alt={name} /> {/* Exibe a imagem do personagem */}
        <figcaption>{name}</figcaption> {/* Exibe o nome abaixo da imagem */}
      </figure>
    </div>
  );
}