import { useState, useEffect } from 'react';

export default function EffectAPI() {
  const [usuarios, setUsuarios] = useState([]);
  const [mostrarNome, setMostrarNome] = useState(false);
  const [mostrarUsername, setMostrarUsername] = useState(false);
  const [mostrarCidade, setMostrarCidade] = useState(false);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsuarios(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    };

    fetchUsuarios();
  }, []);


  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '2rem', flexWrap: 'wrap', gap: '2rem' }}>
      
      <div style={{backgroundColor: 'red' }}>
        <h2>Nomes</h2>
        <button onClick={() => setMostrarNome(!mostrarNome)}>
          {mostrarNome ? 'Ocultar' : 'Mostrar'} Nomes
        </button>
        {mostrarNome && (
          <table>
            <thead>
              <tr><th>Nome</th></tr>
            </thead>
            <tbody>
              {usuarios.map(usuario => (
                <tr key={usuario.id}>
                  <td>{usuario.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div style={{backgroundColor: 'green'}}>
        <h2>Usernames</h2>
        <button onClick={() => setMostrarUsername(!mostrarUsername)}>
          {mostrarUsername ? 'Ocultar' : 'Mostrar'} Usernames
        </button>
        {mostrarUsername && (
          <table>
            <thead>
              <tr><th>Username</th></tr>
            </thead>
            <tbody>
              {usuarios.map(usuario => (
                <tr key={usuario.id}>
                  <td>{usuario.username}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div style={{backgroundColor: 'black' }}>
        <h2>Cidades</h2>
        <button onClick={() => setMostrarCidade(!mostrarCidade)}>
          {mostrarCidade ? 'Ocultar' : 'Mostrar'} Cidades
        </button>
        {mostrarCidade && (
          <table>
            <thead>
              <tr><th>Cidade</th></tr>
            </thead>
            <tbody>
              {usuarios.map(usuario => (
                <tr key={usuario.id}>
                  <td>{usuario.address.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

    </div>
  );
}
