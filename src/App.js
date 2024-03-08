import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.css';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import Bitcoin from './Components/Bitcoin/Bitcoin';
import Eth from './Components/ETH/Eth';
import Ltc from './Components/Litecoin/Litecoin';
import Doge from './Components/Doge/Doge';
import Bnb from './Components/BNB/Bnb';
import { ThemeProvider } from '../src/Components/Themecontext/Theme';


const App = () => {
  
  return (
    <Router>
      <ThemeProvider> 
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/bitcoin" element={<Bitcoin />} />
          <Route path="/eth" element={<Eth />} />
          <Route path="/lite" element={<Ltc />} />
          <Route path="/doge" element={<Doge />} />
          <Route path="/bnb" element={<Bnb />} />

        </Routes>
        <Footer className="footer-container" />
      </div>
    </ThemeProvider>
    </Router>
  );
}

export default App;
