// Archivo: components/Card.jsx
import React, { useState } from 'react';
import '../src/styles/imagescards';

function Card({ title, description, link, imageUrl }) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div 
      className={`card ${flipped ? 'flipped' : ''}`} 
      onClick={handleClick}
    >
      <div className="bg" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="blob"></div>
      <div className="blob2"></div>
      <div className="card-content">
        <div
          className="card-front"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="card-back">
          <h3>{title}</h3>
          <p>{description}</p>
          <a href={link} target="_blank" rel="noopener noreferrer">Ver más</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
