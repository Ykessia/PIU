import { useState, useEffect } from 'react';

export default function MudarFundoCor() {
  const [email, setEmail] = useState('');
  const [numero, setNumero] = useState(0);
  const num = Number(numero)
  useEffect(() => {
    if (numero == '0') {
      document.body.style.backgroundColor = 'black';
    } else if (numero == '1') {
      document.body.style.backgroundColor = 'red';
    } else if (numero == '2') {
        document.body.style.backgroundColor = 'pink';
    } else {
      document.body.style.backgroundColor = 'black';
    }
  }, [numero]);

  return (
    <div style={{ padding: '20px' }}>
      <input type="text" placeholder="Digite 1 'verde' ou 2 'vermelho'" value={numero} onChange={(e) => setNumero(e.target.value)}
        style={{ padding: '8px', fontSize: '16px', border: '1px solid black', borderRadius: '4px', backgroundColor: 'white', color: 'black',
        }}
      />
      <button onClick={() => setNumero(numero)}>enviar</button>
    </div>
  );
}
