import React from 'react';
import './transaction.scss'; // Import your SCSS file
import { useTheme } from '../Themecontext/Theme';


function BlockTable({ transactionData }) {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={`block-table-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <h4 className='hed'>Latest Blocks</h4>
      <table>
        <thead>
          <tr>
            <th>Hash</th>
            <th>Height</th>
            <th>Transactions Count</th>
            <th>Block Size</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {transactionData && transactionData.data && transactionData.data.item ? (
            <tr>
              <td>{transactionData.data.item.hash}</td>
              <td>{transactionData.data.item.height}</td>
              <td>{transactionData.data.item.transactionsCount}</td>
              <td>{transactionData.data.item.blockchainSpecific && transactionData.data.item.blockchainSpecific.size}</td>
              <td>{transactionData.data.item.timestamp ? new Date(transactionData.data.item.timestamp * 1000).toLocaleString() : 'N/A'}</td>
            </tr>
          ) : (
            <tr>
              <td colSpan="5">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default BlockTable;
