import React from "react";
import "./Product.css";

const Product = () => {
  return (
    <div className="Main-container">
      <div className="wallet-header">
        {/* Top Row */}
        <div className="wallet-top">
          {/* Left side */}
          <div className="wallet-left">
            <div className="wallet-title">Digital Wallet Plus 1</div>

            <div className="wallet-id">
              <span className="wallet-id-label">ID: </span>
              <span className="wallet-id-highlight">PROD-001</span>
            </div>
          </div>

          {/* Right side */}
          <span className="wallet-badge">
            <div>
              <span className="wallet-status">Active</span>
            </div>
          </span>
        </div>

        {/* Bottom row (Tags) */}
        <div className="tags-row">
          <div className="tags">
            <span className="badge badge-open">Open</span>
            <span className="badge badge-high">High</span>
            <span className="badge badge-compliant">Compliant</span>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="section">
        <div className="field">
          <label>Sub Category</label>
          <p>Consumer</p>
        </div>
        <div className="field">
          <label>Currency</label>
          <p>Multi-Currency</p>
        </div>
        <div className="field">
          <label>Card Type</label>
          <p>Physical</p>
        </div>
        <div className="field">
          <label>Risk Profile</label>
          <p>Low</p>
        </div>
      </div>

       <h3 className="Heading-function">Product Features</h3>
      <div className="section">
        <div className="field">
          <label>Reloadable</label>
          <p>Yes</p>
        </div>
        <div className="field">
          <label>Transferable</label>
          <p>Yes</p>
        </div>
      </div>


      
      {/* Validity Settings */}
      <h3 className="Heading-function">Validity Settings</h3>
      <div className="section">
        <div className="field">
          <label>Min Validity</label>
          <p>90 days</p>
        </div>
        <div className="field">
          <label>Max Validity</label>
          <p>1095 days</p>
        </div>
        <div className="field">
          <label>Expiry Warning</label>
          <p>60 days</p>
        </div>
        <div className="field">
          <label>Dormant Period</label>
          <p>180 days</p>
        </div>
      </div>


        {/* KYC & Compliance */}
      <h3 className="Heading-function">KYC & Compliance</h3>
      <div className="section">
        <div className="field">
          <label>KYC Level</label>
          <p>Full</p>
        </div>
        <div className="field">
          <label>Partial KYC</label>
          <p>No</p>
        </div>
        <div className="field">
          <label>Aadhaar Required</label>
          <p>No</p>
        </div>
        <div className="field">
          <label>PAN Required</label>
          <p>Yes</p>
        </div>
      </div>

      {/* Transaction Limits */}
      <h3 className="Heading-function">Transaction Limits</h3>
      <div className="section">
        <div className="field">
          <label>Balance Range</label>
          <p>₹1000 - ₹500000</p>
        </div>
        <div className="field">
          <label>Max Load</label>
          <p>₹1000000</p>
        </div>
        <div className="field">
          <label>Daily Spend</label>
          <p>₹50000</p>
        </div>
        <div className="field">
          <label>Monthly Spend</label>
          <p>₹500000</p>
        </div>
      </div>

      {/* Channels & Access */}
      <h3 className="Heading-function">Channels & Access</h3>
      <div className="second-section">
        <div className="field">
          <label>Allowed Channels</label>
          <p>ECOM, POS, QR</p>
        </div>
        <div className="field">
          <label>Top-up Methods</label>
          <p>PAYMENTGATEWAY, REGISTEREDBANKACCOUNT</p>
        </div>
      </div>

      <h3  className="Heading-function">Additional Settings</h3>
      <div className="section">
        <div className="field">
          <label>Age Range</label>
          <p>21-70 years</p>
        </div>
        <div className="field">
          <label>Cross Border</label>
          <p>Yes</p>
        </div>
      </div>

      {/* Features */}
      <h3  className="Heading-function">Features</h3>
      <div className="features">
        <span>Multi-currency support</span>
        <span>API integration</span>
        <span>Real-time processing</span>
        <span>Advanced security</span>
      </div>

      {/* Description */}
      <h3  className="Heading-function">Description</h3>
      <div className="description">
        <p>
          Comprehensive digital wallet plus solution with advanced features and compliance
        </p>
      </div>

      {/* Footer */}
      
      <div className="footer">
  <div>
    <p className="footer-title">Created 2024-02-02</p>
    <p className="footer-sub">by Product Team</p>
  </div>
  <div>
    <p className="footer-title">Submitted</p>
    <p className="footer-sub">1 day ago</p>
  </div>
</div>

    </div>
  );
};

export default Product;
