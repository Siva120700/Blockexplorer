// Bitcoin.js
import React, { useEffect, useState } from "react";
import fetchData from "../Crypto/Api";
import Table from "../Table/Table";
import './bitcoin.scss'
import btc from '../../assests/btc.svg';
import Secbar from "../Secbar/Secbar";
import { MdCurrencyRupee } from "react-icons/md";
import ChartComponent from "../Charts/Charts";
import BlockTable from "../Trans/Transcation";
import bitcoinData from '../../assests/bitcoindata.json';
import BitData from '../Trans/Transcationbitcoin.json';
import { useTheme } from '../Themecontext/Theme';



const Bitcoin = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const [cryptoData, setCryptoData] = useState([]);
  const [low, setLow] = useState();
  const [high, setHigh] = useState();
  const[marketcap,setmarketcap]=useState();
  const[marketrank,setmarketrank]=useState();
  const[volume,setvolume]=useState();
  const[mcp,setmcp]=useState();
  const [coinId, setCoinId] = useState("bitcoin");
  const[coinName, setcoinName]=useState("");
  const[currprice,setcuurprice]=useState();
  

  

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
    const bitcoinData = cryptoData.find(item => item.id === coinId);
    if (bitcoinData) {
      setLow(bitcoinData.low_24h);
      setHigh(bitcoinData.high_24h);
      setmarketcap(bitcoinData.market_cap);
      setmarketrank(bitcoinData.market_cap_rank);
      setvolume(bitcoinData.total_volume);
      setmcp(bitcoinData.market_cap_change_percentage_24h);
      setCoinId(bitcoinData.id);
      setcoinName(bitcoinData.name);
      setcuurprice(bitcoinData.current_price);


    }
  };
  return (
    <div className={`full ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="secbar">
        <Secbar CryptoName={coinName}/>
      </div>
      <div className="maincontentb">
        <div className="part">
          <h1><img src={btc} className="iconnew" alt="Bitcoin" /> Bitcoin <span className="short">BTC</span></h1>
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
        
           <ChartComponent jsonData={bitcoinData}/>
        </div>
      </div>
      
      <div className="transtable">
        {BitData ? (
          <BlockTable transactionData={BitData} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export default Bitcoin;
