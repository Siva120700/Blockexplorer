// Main.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './main.scss';
import Searchbar from '../SearchBar/Searchbar';
import btc from '../../assests/btc.svg';
import eth from '../../assests/eth.svg';
import ltc from '../../assests/ltc.svg';
import doge from '../../assests/doge.svg';
import bnb from '../../assests/bnb.svg';
import { useTheme } from '../Themecontext/Theme'; // Import the useTheme hook from your ThemeContext

function Main() {
  const { isDarkMode } = useTheme(); // Get the current theme mode from the context

  return (
    <div className={`fullm ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className={`containerm ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <h2 className="maintext">Search for block, transaction, address...</h2>
        <div className="searchbarm">
          <Searchbar />
        </div>
        <div className="blockchains-holder">
          <Link to="/bitcoin" className="box">
            <img src={btc} className="icon" alt="Bitcoin" />
          </Link>
          <Link to="/eth" className="box">
            <img src={eth} className="icon" alt="Ethereum" />
          </Link>
          <Link to="/lite" className="box">
            <img src={ltc} className="icon" alt="Litecoin" />
          </Link>
          <Link to="/doge" className="box">
            <img src={doge} className="icon" alt="Dogecoin" />
          </Link>
          <Link to="/bnb" className="box">
            <img src={bnb} className="icon" alt="Binance Coin" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Main;
