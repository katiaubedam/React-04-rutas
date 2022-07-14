import { Link } from 'react-router-dom'

function Videojuego (props) {
    return (
        <>
            <h1>{props.juego.nombre}</h1>
            <p>{props.juego.sinopsis}</p>
            <p><Link to={"/"}>Volver a inicio</Link></p>
        </>
    )
}

export default Videojuego;