"use client";
import React, { useState } from "react";
import "./styling.css"; // We'll create this CSS file for animations

// Define the props type
interface URLListProps {
  urls: string[];
}

const URLListIcon: React.FC<URLListProps> = ({ urls }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle between expanded and collapsed state
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`url-icon-container ${isExpanded ? "expanded" : "collapsed"}`}
    >
      {/* Icon */}
      <div onClick={toggleExpand} className="icon">
        &#9776;{" "}
        {/* Icon (hamburger menu icon), you can replace this with an image or other icon */}
      </div>

      {/* Expanded List */}
      {isExpanded && (
        <div className="url-list">
          <ul>
            {urls.map((url, index) => (
              <li key={index}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {url}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default URLListIcon;
