import React from 'react';
import Contracts from '../components/Contracts.js';
import Messaging from '../components/Messaging.js';
import ReviewsRatings from '../components/ReviewsRatings.js';

function BuyerDashboard() {
  return (
    <div>
      <h2>Buyer Dashboard</h2>
      <Contracts />
      <Messaging />
      <ReviewsRatings />
    </div>
  );
}

export default BuyerDashboard;
