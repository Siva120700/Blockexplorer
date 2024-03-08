// Litecoin.js
import React, { useEffect, useState } from "react";
import fetchData from "../Crypto/Api";
import Table from "../Table/Table";
import './litecoin.scss'
import ltc from '../../assests/ltc.svg';
import Secbar from "../Secbar/Secbar";
import { MdCurrencyRupee } from "react-icons/md";
import ChartComponent from "../Charts/Charts";
import liteData from '../../assests/liteData.json'
import BlockTable from "../Trans/Transcation";
import { useTheme } from '../Themecontext/Theme';
import litedata from '../Trans/litetrans.json'



const Litecoin = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [low, setLow] = useState();
  const [high, setHigh] = useState();
  const[marketcap,setmarketcap]=useState();
  const[marketrank,setmarketrank]=useState();
  const[volume,setvolume]=useState();
  const[mcp,setmcp]=useState();
  const [coinId, setCoinId] = useState("litecoin");
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
    const LitecoinData = cryptoData.find(item => item.id === 'litecoin');
    if (LitecoinData) {
      setLow(LitecoinData.low_24h);
      setHigh(LitecoinData.high_24h);
      setmarketcap(LitecoinData.market_cap);
      setmarketrank(LitecoinData.market_cap_rank);
      setvolume(LitecoinData.total_volume);
      setmcp(LitecoinData.market_cap_change_percentage_24h);
      setCoinId(LitecoinData.id);
      setcoinName(LitecoinData.name);
      setcuurprice(LitecoinData.current_price);

      

    }
  };

  return (
    <div className={`full ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>

      <div className="secbar">
      <Secbar CryptoName={coinName}/>

      </div>
      <div className={`maincontentl ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <div className="part">
          <h1><img src={ltc} className="iconnew" alt="Litecoin" /> Litecoin <span className="short">ltc</span></h1>
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
        
           <ChartComponent jsonData={liteData}/>
        </div>
      </div>
      <div className="transtable">
        {litedata ? (
          <BlockTable transactionData={litedata} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export default Litecoin;
