function Dias () {

    let dias = {
        primero: "lunes",
        segundo: "martes",
        tercero: "miércoles",
        cuarto: "jueves",
        quinto: "viernes",
        sexto: "sábado",
        septimo: "domingo"
    }

    let diasLi = []

    for (const i in dias) {
        diasLi.push(dias[i])
    }

    return (
        <ul>
            {diasLi.map((dia) => <li>{dia}</li> )}
        </ul>
    )
}

export default Dias