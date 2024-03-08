// Dogecoin.js
import React, { useEffect, useState } from "react";
import fetchData from "../Crypto/Api";
import Table from "../Table/Table";
import './bnb.scss'
import bnb from '../../assests/bnb.svg';
import Secbar from "../Secbar/Secbar";
import { MdCurrencyRupee } from "react-icons/md";
import binanceData from '../../assests/binanceData.json';
import ChartComponent from "../Charts/Charts";
import BlockTable from "../Trans/Transcation";
import bnbTrans from '../Trans/binanceData.json'
import { useTheme } from '../Themecontext/Theme';



const Binancecoin = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [low, setLow] = useState();
  const [high, setHigh] = useState();
  const [marketcap, setMarketcap] = useState();
  const [marketrank, setMarketrank] = useState();
  const [volume, setVolume] = useState();
  const [mcp, setMcp] = useState();
  const [coinId, setCoinId] = useState("binancecoin");
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
    const BinancecoinData = cryptoData.find(item => item.id === coinId);
    if (BinancecoinData) {
      setLow(BinancecoinData.low_24h);
      setHigh(BinancecoinData.high_24h);
      setMarketcap(BinancecoinData.market_cap);
      setMarketrank(BinancecoinData.market_cap_rank);
      setVolume(BinancecoinData.total_volume);
      setMcp(BinancecoinData.market_cap_change_percentage_24h);
      setCoinId(BinancecoinData.id);
      setcoinName(BinancecoinData.name);
      setcuurprice(BinancecoinData.current_price);


    }
  };

  return (
    <div className={`full ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>

      <div className="secbar">
      <Secbar CryptoName={coinName}/>

      </div>
      <div className={`maincontentbn ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <div className="part">
          <h1><img src={bnb} className="iconnew" alt="Dogecoin" /> BinanceCoin <span className="short">Bnb</span></h1>
          <div className="cp">
          <MdCurrencyRupee />{currprice}
          </div>
        </div>
        <div className="part">
          <div>Low: {low}</div>
          <div>High: {high}</div>
          <div>Total Volume: {volume}</div>
        </div>
        <div className="marketcap">
          <div> Marketcap: {marketcap}</div>
          <div> Marketrank: {marketrank}</div>
          <div>Market Change % : {mcp}</div>
        </div>
      </div>
      <div className="tablecontent">
        <Table cryptoData={cryptoData} coinId={coinId}/>
      </div>
      <div className="graphcomp">
        <h3>Chart of {coinName}</h3>
        <div className="graphc">
        
           <ChartComponent jsonData={binanceData}/>
        </div>
      </div>
      <div className="transtable">
        {bnbTrans ? (
          <BlockTable transactionData={bnbTrans} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export default Binancecoin;
