import './App.css';
import { useEffect, useState } from 'react';
import { fetchGetConnexion } from './hooks/endpoints';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Formulaires from './components/Formulaires/Formulaires';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Antecedents from './components/Antecedents/Antecedents';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // stocke la valeur de la connexion avec le back
  const [connexionFail, setConnexionFail] = useState(false);

  // surveille si une connection existe avec le back
  useEffect(() => {
    fetchGetConnexion()
      .then(response => {
        response.response ? setConnexionFail(false) : setConnexionFail(true);
      });
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
              <Route path='/antecedents' element={<Antecedents />} />
            </Routes>
          </main>
          <footer>
            <Footer />
          </footer>
        </Router>
        <ToastContainer />
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
