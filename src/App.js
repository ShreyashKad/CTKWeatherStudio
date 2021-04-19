import { useState, useEffect } from "react";
import SearchCity from './components/SearchCityBar';
import './css/App.css';



function App() {

  // const weatherApiKey = process.env.REACT_APP_OPENWEATHERMAPS_API_KEY;
  
  
  let [apiData, setApiData] = useState({});
  let [city, setCity] = useState('');
  let [usrInput, setUsrInput] = useState('');
  
  /* 
  Function to store the user input inserted by user
  Input: city name (text)
  */
  const handleInputChange = (e) => {
    setUsrInput(e.target.value)
  }

  const handleSubmit = () => {
    setCity(usrInput)
  }

  // Function to fetch response of OpenWeatherAPI 
  useEffect(() => {
    const weatherApiKey = process.env.REACT_APP_OPENWEATHERMAPS_API_KEY;
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}`;
    
    fetch(weatherApiUrl)
    .then(res => res.json())
    .then((data) => setApiData(data));
  }, [city]);

  useEffect(() => {
    console.log(apiData)
  }, [apiData])
  


  return (
    <div className="App">

      <input
        type="text"
        id="header-search"
        placeholder="Enter City"
        name="s"
        onChange={handleInputChange}
      />
      <button type="submit" onClick={handleSubmit}>-></button>

      <SearchCity />

    </div>
  );
}

export default App;
