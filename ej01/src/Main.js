import {Link} from 'react-router-dom'

function Main () {
    return (
        <>
        <header>
            <h1>Una cabecera cualquiera</h1>
        </header>
        <nav>
            <div><Link to ="./meses">Ver neses</Link></div>
            <div><Link to ="./dias">Ver días de la semana</Link></div>
        </nav>
        </>
    )
}

export default Main