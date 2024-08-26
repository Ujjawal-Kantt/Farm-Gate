import React from 'react';
import Contracts from '../components/Contracts.js';
import MarketInfo from '../components/MarketInfo.js';
import Messaging from '../components/Messaging.js';
import PaymentHistory from '../components/PaymentHistory.js';

function FarmerDashboard() {
  return (
    <div>
      <h2>Farmer Dashboard</h2>
      <Contracts />
      <MarketInfo />
      <Messaging />
      <PaymentHistory />
    </div>
  );
}

export default FarmerDashboard;
