import { useState, useEffect } from "react";
import SearchCityBar from './components/SearchCityBar';
import WeatherInfo from './components/WeatherInfo';
import ErrorResult from './components/ErrorResult';

import './css/App.css';




function App() {

  let [apiData, setApiData] = useState({});
  let [usrInput, setusrInput] = useState('');
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(false);
  let [dataAvailable, setDataAvailable] = useState(false);

  

  //  API key is stored in .env file (which is not pushed to github) to keep it secrete from users.
  const weatherApiKey = process.env.REACT_APP_OPENWEATHERMAPS_API_KEY;
  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${usrInput}&appid=${weatherApiKey}&units=metric`;
  /* 
  Function to store the user input inserted by user
  Input: city name (text)
  */
  const handleInputChange = (e) => {
    setusrInput(e.target.value)
  }

  /*
  Function to call (current) OpenWeatherMaps API based on input given by user
  */
  const handleSubmit = () => {

    setLoading(true)
    fetch(weatherApiUrl)
      .then(res => res.json())
      .then((data) => {
        // Code 200 is for succesfull fetching of data, rest are error codes
        if (data.cod !== 200) {
          throw new Error()
        }
        setApiData(data)
        setLoading(false)
        setError(false)
        setDataAvailable(true)
      })
      .catch(err => {
        console.log(err.meesage);
        setLoading(false)
        setError(true)
        setDataAvailable(false)
      });

  }

  // Effect hook to see response of API call, invoked when variable apiData is changed. 
  useEffect(() => {
    console.log(apiData)
  }, [apiData])

  return (
    <div className="App">
      <header>
        {/* Sending  */}
        <SearchCityBar
          value={usrInput}
          submit={handleSubmit}
          change={handleInputChange}
          showResult={error || dataAvailable}
        />
      </header>

      { dataAvailable && <WeatherInfo
        // Filtering and sending appropriate information from fetched API response
        weather={
          {
            name: apiData.name,
            country: apiData.sys.country,
            sunset: apiData.sys.sunset,
            sunrise: apiData.sys.sunrise,
            visibility: apiData.visibility,
            feels_like: apiData.main.feels_like,
            humidity: apiData.main.humidity,
            pressure: apiData.main.pressure,
            temp: apiData.main.temp,
            weather_main: apiData.weather[0].main,
            icon: apiData.weather[0].icon,
            wind_speed: apiData.wind.speed,

          }
        }
      />}

      {error && <ErrorResult />}
    </div>
  );
}

export default App;
