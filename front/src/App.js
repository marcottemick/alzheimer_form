import './App.css';
import { useEffect, useState } from 'react';
import { fetchGetConnexion } from './hooks/endpoints';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Formulaires from './components/Formulaires/Formulaires';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const [connexionFail, setConnexionFail] = useState(false);

  useEffect(() => {
    fetchGetConnexion()
      .then(response => {
        response.response ? setConnexionFail(false) : setConnexionFail(true);
      })
  }, [])

  const renderApp = () => {
    return (
      <div className='h-screen'>
        <Router>
          <header>
            <Header />
          </header>
          <main className="bg-[url('/public/cartographer.png')] bg-repeat">
            <Routes>
              <Route exact path='/' element={<Formulaires />} />
            </Routes>
          </main>
          <footer>
            <Footer />
          </footer>
        </Router>
      </div>
    );
  }

  if (connexionFail) {
    return <p>erreur</p>
  }
  else {
    return renderApp();
  }

}

export default App;
