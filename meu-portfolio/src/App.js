import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home/Home'
import Sobre from './pages/Sobre/Sobre'
import Projetos from './pages/Projetos/Projetos'
import Contato from './pages/Contato/Contato'
import Navbar from './components/Navbar'

const App = () => {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='home' element={<Home/>}/>
        <Route path='sobre' element={<Sobre/>}/>
        <Route path='projetos' element={<Projetos/>}/>
        <Route path='contato' element={<Contato/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
