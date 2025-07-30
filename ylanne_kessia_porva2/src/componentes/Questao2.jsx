import { useState, useEffect } from 'react';

export default function EffectAPI() {
  const [albuns, setAlbuns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const fecthAlbuns = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        const data = await response.json();
        setAlbuns(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      } finally {
        setLoading(false);
      }
    };

    fecthAlbuns();
  }, []);
  
  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h1>Lista de Álbuns</h1>
      <input type="number" placeholder="Digite um ID (1-10)" min="1" max="10" value={userId} onChange={e => setUserId(e.target.value)}/>
      <ul>
        {filtrados.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
