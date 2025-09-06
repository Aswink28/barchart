import React from "react";
import Product from "./Product";
import "./App.css";

const products = [1, 2, 3, 4, 5, 6, 7]; // Example products

const App = () => {
  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Sidebar</h2>
        <ul>
          <li>Dashboard</li>
          <li>Products</li>
          <li>Settings</li>
          <li>Profile</li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="main-content">
        <div className="product-grid">
          {products.map((p, i) => (
            <Product key={i} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
