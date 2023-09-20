import './Carrito.css'
import carro from '../../assets/carro.png'

const Carrito = () => {
    return(
        <div className='todocarrito'>
            <img className='imgcarro' src={carro}/>
            0
        </div>
    )
}
export default Carrito;