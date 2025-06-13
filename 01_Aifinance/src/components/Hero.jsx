import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Welcome to <span>TrackNest</span></h1>
        <p>Your ultimate productivity and task tracking hub—smart, sleek, and simple.
        Smarter budgeting, expense insights, and financial forecasts—all in one place.
        </p>
        <a href="#features" className="hero-btn">Explore Features</a>

      </div>

      <div className="hero-features">
        <div className="feature-card">💰 Smart Expense Analysis</div>
        <div className="feature-card">📈 AI-Driven Financial Forecasts</div>
        <div className="feature-card">🚀 Automated Savings Insights</div>
        <div className="feature-card">🔍 Real-Time Budget Tracking</div>
        <div className="feature-card">🧠 Personalized Investment Suggestions</div>
        <div className="feature-card">📊 Visual Financial Dashboards</div>
      </div>

    </section>
  );
};

export default Hero;