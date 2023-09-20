import './NavBar.css'
import logorojo from '../../assets/logorojoblanco1.png'
import Carrito from '../Carrito/Carrito';

const NavBar = () => {
    return(    
        <div className="todonav">
            <div className="nav">
                <div className='botones'>
                <img className='logo' src={logorojo}/>
                <button className='buttons'>INICIO</button>
                <button className='buttons'>PRODUCTOS</button>
                <button className='buttons'>CONTACTANOS</button>
                </div>
                <Carrito />
            </div>
        </div>
    
    )
}
export default NavBar;