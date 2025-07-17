import { useState, useEffect } from 'react'

export default function CountClicks() {
  const [count, setCount] = useState(0)

  //useeffect (configurar, dependencias?)

  function handleColor(){
            const cor = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#835AFD"];
            const randomColor = cor[Math.floor(Math.random() * cor.length)];
            document.body.style.backgroundColor = randomColor;

    }

  useEffect(() => {
    handleColor()
  },)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}


import { useEffect, useState } from "react";

export default function EffectAPI() {
  const [usuarios, setUsuarios] = useState([]);
  const [tabelaAtiva, setTabelaAtiva] = useState(""); // controla qual tabela deve carregar os dados

  useEffect(() => {
    if (tabelaAtiva !== "") {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((dados) => setUsuarios(dados))
        .catch((erro) => console.error("Erro ao buscar dados:", erro));
    }
  }, [tabelaAtiva]);

  return (
    <div style={{ display: "flex", justifyContent: "space-around", marginTop: "2rem", flexWrap: "wrap", gap: "2rem" }}>
      
      {/* Tabela de Nomes */}
      <div style={{ border: "3px solid #FF6B6B", padding: "1rem", borderRadius: "10px", backgroundColor: "#FFF0F0", minWidth: "200px" }}>
        <h2>📛 Nomes</h2>
        <button onClick={() => setTabelaAtiva("name")}>Carregar Nomes</button>
        {tabelaAtiva === "name" && (
          <table>
            <thead>
              <tr><th>Nome</th></tr>
            </thead>
            <tbody>
              {usuarios.map((u) => (
                <tr key={u.id}><td>{u.name}</td></tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Tabela de Usernames */}
      <div style={{ border: "3px dashed #4D96FF", padding: "1rem", borderRadius: "10px", backgroundColor: "#F0F8FF", minWidth: "200px" }}>
        <h2>👤 Usernames</h2>
        <button onClick={() => setTabelaAtiva("username")}>Carregar Usernames</button>
        {tabelaAtiva === "username" && (
          <table>
            <thead>
              <tr><th>Username</th></tr>
            </thead>
            <tbody>
              {usuarios.map((u) => (
                <tr key={u.id}><td>{u.username}</td></tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Tabela de Cidades */}
      <div style={{ border: "3px dotted #6BCB77", padding: "1rem", borderRadius: "10px", backgroundColor: "#F0FFF0", minWidth: "200px" }}>
        <h2>🏙️ Cidades</h2>
        <button onClick={() => setTabelaAtiva("city")}>Carregar Cidades</button>
        {tabelaAtiva === "city" && (
          <table>
            <thead>
              <tr><th>Cidade</th></tr>
            </thead>
            <tbody>
              {usuarios.map((u) => (
                <tr key={u.id}><td>{u.address.city}</td></tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

    </div>
  );
}
