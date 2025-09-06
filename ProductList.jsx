import React from "react";
import "./ProductList.css";

const ProductList = () => {
  return (
    <div className="wallet-container">
      {/* Header */}
     <div className="wallet-container">
  {/* Top Row */}
  <div className="wallet-header">
    {/* Left side */}
    <div className="wallet-left">
      <div
        className="wallet-title"
        style={{ color: "#00d4aa", fontSize: "14px", fontWeight: "100" }}
      >
        Digital Wallet Plus 1
      </div>

      <div className="wallet-id">
        <span style={{ color: "#94a3b8", fontSize: "12px" }}>ID: </span>
        <span
          className="wallet-id-highlight"
          style={{ color: "#00d4aa", fontSize: "12px", fontWeight: "400" }}
        >
          PROD-001
        </span>
      </div>
    </div>

    {/* Right side (Active badge) */}
    <span className="wallet-badge">
      <div className="badge-inner">Active</div>
    </span>
  </div>

  {/* Tags Row */}
  <div className="status">
    <span className="badge badge-open">Open</span>
    <span className="badge badge-high">High</span>
    <span className="badge badge-compliant">Compliant</span>
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

      {/* Product Features */}
      <h3>Product Features</h3>
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
      <h3>Validity Settings</h3>
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
      <h3>KYC & Compliance</h3>
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
      <h3>Transaction Limits</h3>
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
      <h3>Channels & Access</h3>
      <div className="section">
        <div className="field">
          <label>Allowed Channels</label>
          <p>ECOM, POS, QR</p>
        </div>
        <div className="field">
          <label>Top-up Methods</label>
          <p>PAYMENTGATEWAY, REGISTEREDBANKACCOUNT</p>
        </div>
      </div>

      {/* Additional Settings */}
      <h3>Additional Settings</h3>
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
      <h3>Features</h3>
      <div className="features">
        <span>Multi-currency support</span>
        <span>API integration</span>
        <span>Real-time processing</span>
        <span>Advanced security</span>
      </div>

      {/* Description */}
      <div className="description">
        <p>
          Comprehensive digital wallet plus solution with advanced features and compliance
        </p>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>Created 2024-02-02 by Product Team</p>
        <p>Submitted 1 days ago</p>
      </div>
    </div>
  );
};

export default ProductList;
