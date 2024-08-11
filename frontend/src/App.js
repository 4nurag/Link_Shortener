import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import MyLinks from './pages/MyLinks';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import RedirectPage from './pages/RedirectPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/mylinks/" element={<MyLinks />} />
          <Route path="/login/" element={<LoginPage />} />
          <Route path="/register/" element={<RegisterPage />} />
          <Route path="/link/:hash" element={<RedirectPage />} />
        </Routes>


        <Footer />
      </div>
    </Router>
  );
}

export default App;
