import { Link } from 'react-router-dom'

function Pelicula(props) {

    let linkName = props.peli.titulo.replaceAll(" ", "-")

    return (
        <div className="card">
            <Link to={`${linkName}`}><h2>{props.peli.titulo}</h2></Link>
            <img src={props.peli.cartel} alt={props.peli.titulo} />
            <p>{props.showSinopsis? props.peli.sinopsis : ''}</p>
        </div>
    )
}

export default Pelicula