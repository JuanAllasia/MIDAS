import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <header className='headerapp'>
        <NavBar/>
      </header>
      <main className='mainapp'>
      <LoginPage/>
      </main>
      <footer className='footerapp'>

      </footer>
    
    </>
  );
}

export default App;
