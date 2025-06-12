import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Contador from './componentes/Contador.jsx'
import ListaCarros from './componentes/ListaCarros.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Contador />
    <ListaCarros />
  </StrictMode>,
)
