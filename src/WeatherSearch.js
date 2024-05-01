import React, { useState } from 'react';
import WeatherCard from './WeatherCard'; // Import the WeatherCard component

const WeatherSearch = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = '885f986ec8b548e4bfe110430240403'; 
  
  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`);
      const data = await response.json();
      setWeatherData(data);
      setLoading(false);
      if (data.error) {
        alert('Failed to fetch weather data');
      }
    } catch (error) {
      setLoading(false);
      alert('Failed to fetch weather data');
    }
  };

  return (
    <div>
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city name" />
      <button onClick={handleSearch}>Search</button>
      {loading && <p>Loading data...</p>}
      {weatherData && weatherData.current && (
        <div className="weather-cards">
          <WeatherCard label="Temperature" value={weatherData.current.temp_c} />
          <WeatherCard label="Humidity" value={`${weatherData.current.humidity}%`} />
          <WeatherCard label="Condition" value={weatherData.current.condition.text} />
          <WeatherCard label="Wind Speed" value={`${weatherData.current.wind_kph} km/h`} />
        </div>
      )}
    </div>
  );
};

export default WeatherSearch;
