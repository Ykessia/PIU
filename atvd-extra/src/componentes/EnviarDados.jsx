import { useState, useEffect } from "react";

export default function EnviarDados() {
  const [formData, setFormData] = useState({
    nome: ""
  });

  const API_URL = "http://127.0.0.1:8000/usuarios";

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({...prev,[name]: value}));
  }


  useEffect(() => {
    const enviarDados = async () => {
      try {
        const response = await fetch({API_URL}, { //aqui deve ser inserido o endereço da API
          method: 'POST',
          headers: {
            'Content-Type': 'application/json' // informa que os dados estão em JSON
          },
          body: JSON.stringify(formData) // converte o objeto JS em JSON
        });
  
        const data = await response.json();
        console.log("Resposta da API:", data);
      } catch (error) {
        console.error("Erro ao enviar dados:", error);
      } finally {
        setLoading(false);
      }
    }
  
    enviarDados();
  }, enviarDados);

  return (
    <div >
      <h2>Formulário de Envio de Dados</h2>
      <form onSubmit={enviarDados}>
        <label>
          Nome:
          <input type="text" name="nome" value={formData.nome} onChange={handleChange} required style={{ width: "100%", marginBottom: "10px" }}/>
        </label>
        <br />
        <label>
          Username:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: "100%", marginBottom: "10px" }}/>
        </label>
        <br />
        <label>
          Senha:
          <input type="text" name="cidade" value={formData.cidade} onChange={handleChange} required style={{ width: "50%", marginBottom: "10px" }}/>
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>

    </div>
  );
}
