import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home/Home'
import Sobre from './pages/Sobre/Sobre'
import Habilidades from './pages/Habilidades/Habilidades'
import Contato from './pages/Contato/Contato'
import Navbar from './components/Navbar'

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Sobre />
      <Habilidades />
      <Contato />
    </BrowserRouter>
  )
}

export default App;
