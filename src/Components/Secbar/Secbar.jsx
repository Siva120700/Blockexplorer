import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./secbar.scss";
import { FaAngleDown } from "react-icons/fa";
import btc from '../../assests/btc.svg';
import eth from '../../assests/eth.svg';
import ltc from '../../assests/ltc.svg';
import doge from '../../assests/doge.svg';
import bnb from '../../assests/bnb.svg';
import { useTheme } from '../Themecontext/Theme';


const Secbar = ({ CryptoName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();


  const toggleDown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setIsOpen(false);
  };

  return (
    <div className={`secbar-content ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="dropp">
        <span className="blockchain-button"> <span className="light">Blockchain <span className="sim"> /</span> </span> <button className="dropdown" onClick={toggleDown}> {CryptoName}<FaAngleDown className="arrow" />

        </button></span>

        {isOpen && (
          <div className="dropdown-menu active">
            <ul>
              <ul onClick={() => handleItemClick("Bitcoin")}>
              <Link to="/bitcoin" className="icondrop"><img src={btc} className="icondrop1" alt="Bitcoin" />Bitcoin</Link>
              </ul>
              <ul onClick={() => handleItemClick("Ethereum")}>
                <Link to="/eth" className="icondrop"><img src={eth} className="icondrop1" alt="Ethereum" />Ethereum</Link>
              </ul>
              <ul onClick={() => handleItemClick("Binance")}>
                <Link to="/bnb" className="icondrop"><img src={bnb} className="icondrop1" alt="Binance" />Binance</Link>
              </ul>
              <ul onClick={() => handleItemClick("Dogecoin")}>
                <Link to="/doge" className="icondrop"><img src={doge} className="icondrop1" alt="DogeCoin" />Dogecoin</Link>
              </ul>
              <ul onClick={() => handleItemClick("Litecoin")}>
                <Link to="/lite" className="icondrop"><img src={ltc} className="icondrop1" alt="LiteCoin" />Litecoin</Link>
              </ul>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Secbar;
