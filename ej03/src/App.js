import juegos from './juegos';
import Videojuego from './Videojuego';
import { useState } from 'react';
import './App.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {

  const [videojuegos] = useState(juegos)

  return (
    <div>
      <BrowserRouter>
      <Routes>
        {videojuegos.map((juego) => {
          return (
            <Route 
              path={"/" + juego.nombre.replaceAll(" ", "-")} 
              element={<Videojuego juego={juego} />} 
            />
          )
        })}

        <Route path={"/"} element={
        <>
          <h2>Mis juegos favoritos</h2>
          <ul>{videojuegos.map((juego) => {
            return (
              <li><Link to={"/" + juego.nombre.replaceAll(" ", "-")}>{juego.nombre}</Link></li>
            )})}
          </ul>
        </>} 
        />

      </Routes>

      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
