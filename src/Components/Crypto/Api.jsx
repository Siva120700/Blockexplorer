// // api.js
// const fetchData = async () => {
//     try {
//       const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&ids=bitcoin%2Cethereum%2Clitecoin%2Cdogecoin%2Cbinancecoin&order=market_cap_desc&per_page=5&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`);
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       throw error;
//     }
//   };
  
//   export default fetchData;
  
import cryptocurrencyData from '../../assests/cryptocurrency_data.json';

// Function to return the data
const fetchData = async () => {
    try {
      // Return the data from the local JSON file
      return cryptocurrencyData;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  
export default fetchData;