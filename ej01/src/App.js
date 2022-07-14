import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './Main.js'
import Dias from './Dias.js'
import Meses from './Meses.js'

function App() {
  return (
    <BrowserRouter>
      <Main />
      <Routes>
        <Route path="/meses" element={<Meses />} />
        <Route path="/dias" element={<Dias />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
