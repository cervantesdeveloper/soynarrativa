import {Link} from 'react-router-dom';
import Btn from '../components/Btn';

const Error = () => {
    return (
        <>
            <main className='error'>
                <h1>404</h1>
                <h2>LO SENTIMOS, NO PODEMOS ENCONTRAR LA PÁGINA QUE ESTÁS BUSCANDO</h2>
                <Link to={"/"}>
                    <Btn text="IR AL INICIO" />
                </Link>
            </main>

            
        </>
        
    )
}

export default Error
