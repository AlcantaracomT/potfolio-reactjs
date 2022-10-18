import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home/Home'
import Sobre from './pages/Sobre/Sobre'
import Habilidades from './pages/Habilidades/Habilidades'
import Contato from './pages/Contato/Contato'
import Navbar from './components/Navbar'
import BtnTheme from './Ul/Buttons/Theme'

const App = () => {

  return (
    <BrowserRouter>
      <Navbar/>
      <BtnTheme/>
      <Routes>
        <Route path='home' element={<Home/>}/>
        <Route path='sobre' element={<Sobre/>}/>
        <Route path='habilidades' element={<Habilidades/>}/>
        <Route path='contato' element={<Contato/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
