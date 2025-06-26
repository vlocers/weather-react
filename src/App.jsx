import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import axios from "axios";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const fetchWeatherData = async (city_name) => {
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=c68155a9ae374034af3185239252606&q=${city_name}&aqi=no`
      );
      setWeatherData(response.data);
      setError(""); 
    } catch (err) {
      setWeatherData(null); 
      setError("Veri alınırken hata oluştu: " + err.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen transition-all duration-500 ease-in-out bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <div className="px-10 py-5 mt-10 bg-gray-500 rounded-md shadow-lg">
        <h3 className="mb-4 text-3xl font-semibold text-center text-white">Hava Durumu Türkiye</h3>
        <SearchBar fetchWeatherData={fetchWeatherData} />
        {error && <p className="mt-4 text-red-300">{error}</p>}
        <WeatherCard weatherData={weatherData} />
      </div>
    </div>
  );
}

export default App;
