import React , {useState} from "react";

function SearchBar({fetchWeatherData}) {
  const [city, setCity] = useState("");
  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <select onChange={(e)=>setCity(e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg shadow-sm outline-none cursor-pointer">
        <option>Şehir Seçin</option>
        <option value="Istanbul">İstanbul</option>
        <option value="Ankara">Ankara</option>
        <option value="Izmir">İzmir</option>
        <option value="Bursa">Bursa</option>
        <option value="Antalya">Antalya</option>
      </select>
      <button className="px-4 py-2 text-white transition bg-black border border-black rounded-md outline-none hover:bg-gray-800" onClick={()=>fetchWeatherData(city)}>Hava Durumunu Getir</button>
    </div>
  );
}

export default SearchBar;
