// src/components/Cards.js
import React from 'react';
import './Cards.css'; // Import the CSS file

const Cards = ({ cards }) => {
  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <p className="params" key={index}>
          {card.name}: <span className="value">{card.value}</span>
        </p>
      ))}
    </div>
  );
};

export default Cards;


