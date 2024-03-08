// Ethereum.js
import React, { useEffect, useState } from "react";
import fetchData from "../Crypto/Api";
import Table from "../Table/Table";
import './eth.scss'
import eth from '../../assests/eth.svg';
import Secbar from "../Secbar/Secbar";
import { MdCurrencyRupee } from "react-icons/md";
import ChartComponent from "../Charts/Charts";
import { useTheme } from '../Themecontext/Theme';
import ethData from '../../assests/ethereumData.json'

const Ethereum = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [low, setLow] = useState();
  const [high, setHigh] = useState();
  const[marketcap,setmarketcap]=useState();
  const[marketrank,setmarketrank]=useState();
  const[volume,setvolume]=useState();
  const[mcp,setmcp]=useState();
  const [coinId, setCoinId] = useState("ethereum");
  const[coinName, setcoinName]=useState("");
  const[currprice,setcuurprice]=useState();
  const { isDarkMode, toggleTheme } = useTheme();





  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData();
        setCryptoData(data);
        // Call the function to get low and high values
        getLowHigh(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    getData();
  }, []);

  // Function to get low and high values
  const getLowHigh = (cryptoData) => {
    const EthereumData = cryptoData.find(item => item.id === coinId);
    if (EthereumData) {
      setLow(EthereumData.low_24h);
      setHigh(EthereumData.high_24h);
      setmarketcap(EthereumData.market_cap);
      setmarketrank(EthereumData.market_cap_rank);
      setvolume(EthereumData.total_volume);
      setmcp(EthereumData.market_cap_change_percentage_24h);
      setCoinId(EthereumData.id);
      setcoinName(EthereumData.name);
      setcuurprice(EthereumData.current_price);




    }
  };

  return (
    <div className={`full ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>

      <div className="secbar">
      <Secbar CryptoName={coinName}/>

      </div>
      <div className={`maincontente ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <div className="part">
          <h1><img src={eth} className="iconnew" alt="Ethereum" /> Ethereum <span className="short">ETH</span></h1>
          <div className="cp">
          <MdCurrencyRupee />{currprice}
          </div>
        </div>
        <div className="part">
          <div>Low: {low}</div>
          <div>High: {high}</div>
          <div>Total Volume:{volume}</div>
        </div>
        <div className="marketcap">
          <div> Marketcap: {marketcap}</div>
          <div> Marketrank: {marketrank}</div>
          <div>Market Change % : {mcp}</div>

        </div>
      </div>
      <div className="tablecontent">
        <Table cryptoData={cryptoData} coinId ={coinId}/>
      </div>
      <div className="graphcomp">
        <h3>Chart of {coinName}</h3>
        <div className="graphc">
        
           <ChartComponent jsonData={ethData}/>
        </div>
      </div>
    </div>
  );
}

export default Ethereum;
