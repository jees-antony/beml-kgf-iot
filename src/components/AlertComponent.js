// src/components/AlertComponent.js
import React from 'react';
import './AlertComponent.css';

const AlertComponent = ({ alerts }) => {
  return (
    <div className="alert-container">
      {alerts.map((alert, index) => (
        <div key={index} className={`alert ${alert.type}`}>
          <strong>{alert.title}</strong>
          <p>{alert.message}</p>
        </div>
      ))}
    </div>
  );
};

export default AlertComponent;
