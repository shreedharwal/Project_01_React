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
        <p>—All in one place.</p>
        <a href="#features" className="hero-btn">Explore Features</a>

        <div className="hero-features">
          <div className="features-heading">
            <h1>Why to Choose <span>TrackNest ?</span></h1>
          </div>
          <div className="features-grid">
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


        <div className="hero-benefit">
          <div className="features-heading-benefit">
            <h1>Who Can<span> Benefit ?</span></h1>
          </div>
          <div className="features-grid-benefit">
            <div className="feature-card-benefit">
              <h3>💼 Working Professionals</h3>
              <p>Optimize your salary, track expenses, and grow wealth.</p>
            </div>
            <div className="feature-card-benefit">
              <h3>🎓 Students</h3>
              <p>Manage pocket money wisely and develop smart financial habits early.</p>
            </div>
            <div className="feature-card-benefit">
              <h3>👨‍👩‍👧‍👦 Families</h3>
              <p>Plan household budgets efficiently with AI insights.</p>
            </div>
          </div>
        </div>















      </div>
    </section>
  );
};

export default Hero;