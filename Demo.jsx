import React from "react";
import "./Demo.css"

const Demo = () => {
  return (
    <div className="corner-box">
      <span></span>
      <h2>Hello with Corner Borders</h2>
      <p>This box has all four corners styled using ::before and ::after.</p>
    </div>
  );
};

export default Demo;
