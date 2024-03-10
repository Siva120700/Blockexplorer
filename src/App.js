import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.css';
import Navbar from '../src/Components/Navbar/Navbar';
import Main from '../src/Components/Main/Main';
import Footer from '../src/Components/Footer/Footer';
import Bitcoin from '../src/Components/Bitcoin/Bitcoin';
import Eth from '../src/Components/ETH/Eth';
import Ltc from '../src/Components/Litecoin/Litecoin';
import Doge from '../src/Components/Doge/Doge';
import Bnb from '../src/Components/BNB/Bnb';
import { ThemeProvider } from '../src/Components/Themecontext/Theme';


const App = () => {
  
  return (
    <div>
    <Router basename='/Blockexplorer'>
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
    </div>
  );
}

export default App;
