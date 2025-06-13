import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Welcome to <span>TrackNest</span></h1>
        <p>Your ultimate productivity and task tracking hub—smart, sleek, and simple.
        Smarter budgeting, expense insights, and financial forecasts
        Effortless tracking AI-driven insights, smarter finances
       </p>
       <p>—all in one place.</p>
        <a href="#features" className="hero-btn">Explore Features</a>

      
      {/* <div className="hero-features">
        <div className="feature-card">💰 Smart Expense Analysis</div>
        <div className="feature-card">📈 AI-Driven Financial Forecasts</div>
        <div className="feature-card">🚀 Automated Savings Insights</div>
        <div className="feature-card">🔍 Real-Time Budget Tracking</div>
        <div className="feature-card">🧠 Personalized Investment Suggestions</div>
        <div className="feature-card">📊 Visual Financial Dashboards</div>
      </div> */}




        <div className="hero-features">
  <div className="feature-card">
    <h3>💰 Smart Expense Analysis</h3>
    <p>Track spending patterns and get AI-driven insights for better budgeting.</p>
  </div>
  <div className="feature-card">
    <h3>📈 AI-Driven Financial Forecasts</h3>
    <p>Predict future financial trends using AI-powered analytics.</p>
  </div>
  <div className="feature-card">
    <h3>🚀 Automated Savings Insights</h3>
    <p>Get personalized savings recommendations to optimize financial goals.</p>
  </div>
  <div className="feature-card">
    <h3>🔍 Real-Time Budget Tracking</h3>
    <p>Monitor expenses and balance budgets effortlessly with live tracking.</p>
  </div>
  <div className="feature-card">
    <h3>🧠 Personalized Investment Suggestions</h3>
    <p>Receive AI-backed investment tips tailored to your financial profile.</p>
  </div>
  <div className="feature-card">
    <h3>📊 Visual Financial Dashboards</h3>
    <p>Get interactive financial charts and reports for easier decision-making.</p>
  </div>
</div>





    </div>
    </section>
  );
};

export default Hero;