import React from 'react';

const WeatherCard = ({ label, value }) => {
  return (
    <div className="weather-card">
      <h3>{label}</h3>
      <p>{value}</p>
    </div>
  );
};

export default WeatherCard;
