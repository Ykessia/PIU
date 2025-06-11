// import { useState } from 'react';
// import Tema from './componentes/Tema';
// import Dash from './componentes/Dash';
// import { tarefas as tarefasIniciais } from './componentes/tarefas';

// export default function App() {
//   const [lista, setLista] = useState(tarefasIniciais);

//   const alternarTarefa = (id) => {
//     const novaLista = lista.map((tarefa) => {
//       if (tarefa.id === id) {
//         return {
//           id: tarefa.id,
//           titulo: tarefa.titulo,
//           concluida: !tarefa.concluida
//         };
//       }
//       return tarefa;
//     });

//     setLista(novaLista);
//   };

//   return (
//     <Tema>
//       <Dash tarefas={lista} onToggle={alternarTarefa} />
//     </Tema>
//   );
// }