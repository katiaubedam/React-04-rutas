import Pelicula from "./Pelicula"

function Catalogo(props) {

    let arrPelis = props.pelis.map((peli, index) => {
        return (<Pelicula key={index} peli={peli} showSinopsis={false} />)
    })

    return (
        <>
            {arrPelis}
        </>
    )
}

export default Catalogo