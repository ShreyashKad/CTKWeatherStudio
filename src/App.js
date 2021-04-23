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
  let [lat, setlat] = useState(0.0);
  let [lon, setlon] = useState(0.0);
  let [city, setCity] = useState('');
  let [country, setCountry] = useState('');


  

  //  API key is stored in .env file (which is not pushed to github) to keep it secrete from users.
  const weatherApiKey = process.env.REACT_APP_OPENWEATHERMAPS_API_KEY;
  const geoCodingApiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${usrInput}&limit=1&appid=${weatherApiKey}`;
  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${weatherApiKey}&units=metric`;
  
  /* 
  Function to store the user input inserted by user
  Input: city name (text)
  */
  const handleInputChange = (e) => {
    setusrInput(e.target.value)
  }

  const fetchWeatherData = () => {
    
    console.log(weatherApiUrl)
    // fetching current, hourly, weekly weather data based on lat and lang
    fetch(weatherApiUrl)
    .then(res => res.json())
    .then((data) => {
      // Code 200 is for succesfull fetching of data, rest are error codes
      // if (data.cod !== 200) {
      //   throw new Error()
      // }
      setApiData(data)
      setLoading(false)
      setError(false)
      setDataAvailable(true)
    });
    // .catch(err => {
    //   console.log(err.meesage);
    //   setLoading(false)
    //   setError(true)
    //   setDataAvailable(false)
    // });

  };


  /*
  Function to call (current) OpenWeatherMaps API based on input given by user
  */
  const handleSubmit = () => {

    // let lat = 0.0
    // let lon = 0.0
    setLoading(true)
    // Geocoding user input to obtain lat and lang
    fetch(geoCodingApiUrl)
      .then(res => res.json())
      .then((data) => {
        if (data.length === 0){
          throw new Error()
        }
        setlat(data[0].lat);
        setlon(data[0].lon);
        setCity(data[0].local_names.en);
        setCountry(data[0].country);
        fetchWeatherData();
      })
      .catch(err => {
        console.log(err.meesage);
        setLoading(false);
        setError(true);
        setDataAvailable(false);
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
            name: city,
            country: country,
            sunset: apiData.current.sunset,
            sunrise: apiData.current.sunrise,
            visibility: apiData.current.visibility,
            feels_like: Math.round(apiData.current.feels_like),
            humidity: apiData.current.humidity,
            pressure: apiData.current.pressure,
            temp: Math.round(apiData.current.temp),
            weather_main: apiData.current.weather[0].main,
            icon: apiData.current.weather[0].icon,
            wind_speed: apiData.current.wind_speed,
            uvi: apiData.current.uvi,
          }
        }
      />}

      {error && <ErrorResult />}
    </div>
  );
}

export default App;
