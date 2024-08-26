import React, { useState, useEffect } from 'react';
import axios from 'axios';


function MarketInfo() {
  const [marketData, setMarketData] = useState([]);

  useEffect(() => {
    // Fetch market data from backend
    axios.get('/api/market-info').then(response => {
      setMarketData(response.data);
    });
  }, []);

  return (
    <div className="market-info">
      <h3>Market Information</h3>
      {marketData.map((info, index) => (
        <div className="market-item" key={index}>
          <p>{info.crop}: {info.price} per ton</p>
        </div>
      ))}
    </div>
  );
}

export default MarketInfo;
