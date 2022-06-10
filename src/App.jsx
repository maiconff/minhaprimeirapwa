import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Rotas from './Rotas';
import Sobre from './Sobre';
import NotFound from './NotFound';
import Menu from './Menu';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import Imc from './Imc';

function App() {
  return (
    <Router>
      <Menu/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/rotas" element={<Rotas/>}/>
        <Route exact path="/rotas/:id" element={<Rotas/>}/>
        <Route exact path="/sobre" element={<Sobre/>}/>
        <Route exact path="/imc" element={<Imc/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;