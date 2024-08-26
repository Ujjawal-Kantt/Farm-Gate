import React, { useState, useEffect } from 'react';
import axios from 'axios';


function PaymentHistory() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch transaction history from backend
    axios.get('/api/transactions').then(response => {
      setTransactions(response.data);
    });
  }, []);

  return (
    <div className="payment-history">
      <h3>Payment History</h3>
      {transactions.map((transaction, index) => (
        <div className="transaction-item" key={index}>
          <p>{transaction.details}: {transaction.amount}</p>
        </div>
      ))}
    </div>
  );
}

export default PaymentHistory;
