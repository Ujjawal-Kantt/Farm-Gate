import React from 'react';


function Contracts() {
  return (
    <div className="contracts">
      <h3>Contracts</h3>
      {/* List of contracts */}
      <div className="contract-list">
        <div className="contract-item">
          <p>Contract 1: Wheat - 100 Tons</p>
          <button>View Details</button>
        </div>
        {/* More contracts */}
      </div>
    </div>
  );
}

export default Contracts;
