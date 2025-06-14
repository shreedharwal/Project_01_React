import React from 'react';
import './Features.css';

const Features = () => {
    return (
        <section className="#features" id="features">

            <div className="feature-section">
                <h1>UNLOCK THE POWER OF AI FOR YOUR FINANCES</h1>
                <p>Smart insights, seamless tracking, and AI-driven wealth growth.</p>
                <div className="features">
                    <div className="feature-box">
                        <h2>💰 AI-Powered Budgeting</h2>
                        <p>Get real-time financial analysis and AI-driven budget optimization.</p>
                    </div>
                    <div className="feature-box">
                        <h2>📊 Expense Tracking</h2>
                        <p>Automatically categorize and analyze your spending patterns.</p>
                    </div>
                    <div className="feature-box">
                        <h2>📈 Smart Investment Suggestions</h2>
                        <p>AI-driven stock and crypto insights to grow your wealth.</p>
                    </div>
                    <div className="feature-box">
                        <h2>🚀 Automated Savings</h2>
                        <p>AI allocates a portion of your income to savings goals effortlessly.</p>
                    </div>
                    <div className="feature-box">
                        <h2>🎯 Financial Goal Setting</h2>
                        <p>Set goals and track progress with predictive AI modeling.</p>
                    </div>
                    <div className="feature-box">
                        <h2>🔍 Bill & Subscription Management</h2>
                        <p>AI detects subscriptions and helps you manage payments efficiently.</p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Features;