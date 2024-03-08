// CryptoProvider.js
import React, { createContext, useState, useEffect } from "react";




export const CryptoContext = createContext({});

export const CryptoProvider = ({ children }) => {
  const [cryptoData, setCryptoData] = useState(null);

  useEffect(() => {
    const getcryptoData = async () => {
      try {
        const data = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`
        ).then((res) => res.json());
        setCryptoData(data);
      } catch (error) {
        console.log(error);
      }
    };

    getcryptoData();
  }, []);

  return (
    <CryptoContext.Provider value={{ cryptoData }}>
      {children}
    </CryptoContext.Provider>
  );
};
