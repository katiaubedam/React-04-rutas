import { useState } from 'react';
import videoclub from './peliculas'
import './App.css';
import Catalogo from './Catalogo';
import Pelicula from './Pelicula';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  const [catalogo] = useState(videoclub)

  return (
    <div className="container">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Catalogo pelis={catalogo.peliculas} />} />
        {catalogo.peliculas.map((pelicula, index) => {
          return <Route path={"/" + pelicula.titulo.replaceAll(" ", "-")} element={<Pelicula peli={pelicula} showSinopsis={true} />} />
        })}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
