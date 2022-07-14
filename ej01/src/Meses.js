function Meses () {

    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

    return (
        <ul>
            {meses.map((mes) => <li>{mes}</li>)}
        </ul>
    )
}

export default Meses