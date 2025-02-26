import { useState } from 'react';
import './styles/OptionItem.css';

function OptionItem({ title, description, image, isExpanded, toggleExpand }) {
  return (
    <div className={`option-item ${isExpanded ? 'expanded' : ''}`}>
      <div className="option-header" onClick={toggleExpand}>
        <h3>{title}</h3>
        <span className="toggle-icon">{isExpanded ? '↑' : '↓'}</span>
      </div>
      
      {isExpanded && (
        <div className="option-content">
          {image && (
            <div className="option-image">
              <img src={image} alt={title} />
            </div>
          )}
          <div className="option-description">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href="#" className="learn-more">Learn more</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default OptionItem;