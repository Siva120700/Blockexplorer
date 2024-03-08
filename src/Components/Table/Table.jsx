import React from "react";
import './table.scss';
import { useTheme } from '../Themecontext/Theme';


const Table = ({ cryptoData,coinId }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  // Filter the cryptoData to only include items with the ID 'bitcoin'
  const bitcoinData = cryptoData.filter(item => item.id === coinId);

  // Render the table only if there is bitcoinData
  if (bitcoinData.length === 0) {
    return null; // If no bitcoinData, return null to render nothing
  }

  return (
    <div className={`container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <table className='table-layout'>
        <thead className='table-head'>
          <tr className='title'>
            <th>Asset</th>
            <th>Name</th>
            <th>Price</th>
            <th>Total Volume</th>
            <th>Market Cap Change (%)</th>
            <th>1H Change (%)</th>
            <th>24H Change (%)</th>
            <th>7D Change (%)</th>
          </tr>
        </thead>
        <tbody>
          {bitcoinData.map((item, index) => (
            <tr key={index} className='rows'> 
              <td>{item.symbol.toUpperCase()}</td>
              <td>{item.name}</td>
              <td>{item.current_price}</td>
              <td>{item.total_volume}</td>
              <td>{item.market_cap_change_percentage_24h}</td>
              <td>{item.price_change_percentage_1h_in_currency}</td>
              <td>{item.price_change_percentage_24h_in_currency}</td>
              <td>{item.price_change_percentage_7d_in_currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
