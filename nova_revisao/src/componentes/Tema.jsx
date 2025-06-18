import { useState } from 'react';
import Dash from './Dash';
import './Tema.css';

export default function Tema() {
  const [tema, setTema] = useState('light');

  const alternarTema = () => {
    setTema((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={{tema}}>
      <button onClick={alternarTema}>
        Alternar Tema ({tema === 'light' ? 'Claro' : 'Escuro'})
      </button>
      <Dash tema={tema} />
    </div>
  );
} 
