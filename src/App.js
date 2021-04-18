import { useState } from "react";
import SearchCity from './components/SearchCityBar';
import './css/App.css';



function App() {

  const weatherApiKey = process.env.REACT_APP_OPENWEATHERMAPS_API_KEY;
  
  
  let [apiData, setApiData] = useState({});
  let [city, setCity] = useState('');
  
  // Function to store the city inserted by user
  const handleInputChange = (value) => {
    setCity(value.target.value)
  }

  // Function to fetch response of OpenWeatherAPI 
  const getForcast = () => {
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}`;
    fetch(weatherApiUrl)
    .then(res => res.json())
    .then((data) => setApiData(data));

    console.log(apiData)
  }
  
  return (
    <div className="App">

      <input
        type="text"
        id="header-search"
        placeholder="Enter City"
        name="s"
        onChange={handleInputChange}
      />
      <button type="submit" onClick={getForcast}>-></button>

      <SearchCity />

    </div>
  );
}

export default App;
