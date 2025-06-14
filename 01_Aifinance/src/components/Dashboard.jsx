import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
  <section className="#dashboard" id="dashboard">
    <div className="dashboard">
      <h1 className="title">YOUR AI-POWERED FINANCE DASHBOARD</h1>
      
      <div className="balance-overview">
        <h2>Balance Overview</h2>
        <div className="balance-item">
          <span role="img" aria-label="money">💰</span> Total Balance: $10,450
        </div>
        <div className="balance-item">
          <span role="img" aria-label="income">📈</span> Income: $5,200
        </div>
        <div className="balance-item">
          <span role="img" aria-label="expenses">💸</span> Expenses: $3,800
        </div>
      </div>

      <div className="recent-transactions">
        <h2>Recent Transactions</h2>
        <div className="transaction-item">
          <span role="img" aria-label="shopping">🛒</span> Shopping - $150
        </div>
        <div className="transaction-item">
          <span role="img" aria-label="food">🍔</span> Food - $45
        </div>
        <div className="transaction-item">
          <span role="img" aria-label="fuel">⛽</span> Fuel - $70
        </div>
        <div className="transaction-item">
          <span role="img" aria-label="rent">🏠</span> Rent - $1,200
        </div>
      </div>
    </div>
  </section>  
  );
};

export default Dashboard;