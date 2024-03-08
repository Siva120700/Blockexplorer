// Dogecoin.js
import React, { useEffect, useState } from "react";
import fetchData from "../Crypto/Api";
import Table from "../Table/Table";
import './doge.scss'
import doge from '../../assests/doge.svg';
import Secbar from "../Secbar/Secbar";
import { MdCurrencyRupee } from "react-icons/md";
import ChartComponent from "../Charts/Charts";
import dogeData from '../../assests/dogeData.json'
import Dogetrans from '../Trans/dogeData.json'
import { useTheme } from '../Themecontext/Theme';
import BlockTable from "../Trans/Transcation";

const Dogecoin = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [low, setLow] = useState();
  const [high, setHigh] = useState();
  const [marketcap, setMarketcap] = useState();
  const [marketrank, setMarketrank] = useState();
  const [volume, setVolume] = useState();
  const [mcp, setMcp] = useState();
  const [coinId, setCoinId] = useState("");
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
    const DogecoinData = cryptoData.find(item => item.id === 'dogecoin');
    if (DogecoinData) {
      setLow(DogecoinData.low_24h);
      setHigh(DogecoinData.high_24h);
      setMarketcap(DogecoinData.market_cap);
      setMarketrank(DogecoinData.market_cap_rank);
      setVolume(DogecoinData.total_volume);
      setMcp(DogecoinData.market_cap_change_percentage_24h);
      setCoinId(DogecoinData.id);
      setcoinName(DogecoinData.name);
      setcuurprice(DogecoinData.current_price);


    }
  };

  return (
    <div className={`full ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>

      <div className="secbar">
      <Secbar CryptoName={coinName}/>

      </div>
      <div className={`maincontentd ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <div className="part">
          <h1><img src={doge} className="iconnew" alt="Dogecoin" /> DogeCoin <span className="short">doge</span></h1>
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
        
           <ChartComponent jsonData={dogeData}/>
        </div>
      </div>
      <div className="transtable">
        {Dogetrans ? (
          <BlockTable transactionData={Dogetrans} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export default Dogecoin;
