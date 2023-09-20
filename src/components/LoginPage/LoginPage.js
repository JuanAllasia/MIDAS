import './LoginPage.css'

const LoginPage = () => {
    return(
        <div className='TodoLogin'>
            <div className='divlogin'>
                <h2 className='titlelogin'>Login</h2>
                <form className='form1'>
                    <label className='nombreform' required>Nombre</label>
                    <input className='inputform' type='text'/>
                </form>
                <form className='form2'>
                    <label className='nombreform' required>Apellido</label>
                    <input className='inputform' type='text'/>
                </form>
                <button className='button'>Ingresar</button>
                <div className='registratediv'>
                <p>¿No tenes cuenta?</p>
                <button type='submit' >Registrarse</button>
                </div>
            </div>
            
            
        </div>
    )
}
export default LoginPage;