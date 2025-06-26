import React from "react";

function WeatherCard({ weatherData }) {
  if (!weatherData) {
    return null; 
  }

  const { location, current } = weatherData;

  return (
    <div className="p-6 mt-6 text-white shadow-md bg-white/10 backdrop-blur-md rounded-xl">
      <h2 className="text-2xl font-bold text-center">{location.name}, {location.country}</h2>
      <div className="flex items-center justify-center gap-4 mt-4">
        <img src={current.condition.icon} alt={current.condition.text} />
        <div>
          <p className="text-4xl font-semibold">{current.temp_c}°C</p>
          <p className="text-md">{current.condition.text}</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
