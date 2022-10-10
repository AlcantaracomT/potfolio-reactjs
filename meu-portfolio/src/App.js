import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home'
import Sobre from './components/pages/Sobre'
import Habilidades from './components/pages/Habilidades'
import Contato from './components/pages/Contato'

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Sobre</Link>
        </li>
        <li>
          <Link to="/habilidades">Habildades</Link>
        </li>
        <li>
          <Link to="/contato">contato</Link>
        </li>
      </ul>
      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route exact path="/sobre" element={<Sobre />}>
        </Route>  
        <Route exact path="/habilidades" element={<Habilidades />}>
        </Route>
        <Route exact path="/contato" element={<Contato />}>
        </Route>
      </Routes>
    </Router>  
  )
}

export default App;
