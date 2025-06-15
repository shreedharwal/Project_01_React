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


        <div className="spending-analytics">
          <h2>Spending Analytics</h2>
          <div className="spending-charts">
            <span role="img" aria-label="Spendings Chart">📈</span> Spendings Chart
          </div>
        </div>




        <div className="Budget-Tracker">
          <h2>Budget Tracker</h2>
          <div className="budget-tracker">
            <span role="img" aria-label="Budget Tracker">🛤️</span> Monthly Budget: $4,000
          </div>
          <div className="budget-tracker">
            <span role="img" aria-label="Budget Tracker">💲</span> Spent: $3200
          </div>
          <div className="budget-tracker">
            <span role="img" aria-label="Budget Tracker">💸</span> Remaining: $800
          </div>
        </div>



        <div className="Investment-Insights">
          <h2>Investment Insights</h2>
          <div className="investment-insights">
            <span role="img" >💹</span> Stocks: +8% this month
          </div>
          <div className="investment-insights">
            <span role="img" >₿ </span> Crypto: -3% this week
          </div>
        </div>

        <div className="AI-Recommendations">
          <h2>AI Recommendations</h2>
          <div className="ai-recommendations">
            <span role="img">💡</span>Reduce dining out to save $200/month
          </div>
          <div className="investment-insights">
            <span role="img">💡</span>Consider investing in S&P 500 ETFs
          </div>
        </div>












      </div>
    </section>
  );
};

export default Dashboard;