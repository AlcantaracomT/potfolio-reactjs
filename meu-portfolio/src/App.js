import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Sobre from './components/pages/Sobre'
import Habilidades from './components/pages/Habilidades'
import Contato from './components/pages/Contato'
import Hamburguer from './components/icons/Hamburgue'

import Container from './components/layout/Container'
import NavbarLeft from './components/layout/NavbarLeft'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <NavbarLeft />
        <Container customClass="min-height">
          <Routes>
           <Route exact path="/" element={<Home />}></Route>
           <Route exact path="/sobre" element={<Sobre />}></Route>  
           <Route exact path="/habilidades" element={<Habilidades />}></Route>
           <Route exact path="/contato" element={<Contato />}></Route>
         </Routes>
       </Container>
      <Footer /> 
    </Router>  
  )
}

export default App;
