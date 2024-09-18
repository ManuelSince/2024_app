"use client";
import { useState } from "react";
import "./AddressToggle.css";

const AddressToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`container ${isOpen ? "open" : ""}`}>
      <div className="toggle-icon" onClick={toggleList}>
        <i className="icon">&#x1F4CD;</i> {/* Map pin icon */}
      </div>
      <ul className="address-list">
        <li>123 Main St, New York, NY</li>
        <li>456 Elm St, San Francisco, CA</li>
        <li>789 Maple St, Chicago, IL</li>
        <li>101 Pine St, Miami, FL</li>
      </ul>
    </div>
  );
};

export default AddressToggle;
