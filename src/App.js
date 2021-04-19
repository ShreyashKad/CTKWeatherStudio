import { useState, useEffect } from "react";
import SearchCityBar from './components/SearchCityBar';
import WeatherInfo from './components/WeatherInfo';
import './css/App.css';



function App() {

  // const weatherApiKey = process.env.REACT_APP_OPENWEATHERMAPS_API_KEY;
  
  
  let [apiData, setApiData] = useState(null);
  let [usrInput, setusrInput] = useState('');
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(false);
  
  const weatherApiKey = process.env.REACT_APP_OPENWEATHERMAPS_API_KEY;
  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${usrInput}&appid=${weatherApiKey}&units=metric`;
  /* 
  Function to store the user input inserted by user
  Input: city name (text)
  */
  const handleInputChange = (e) => {
    setusrInput(e.target.value)
  }

  const handleSubmit = () => {
    
    setLoading(true)
    fetch(weatherApiUrl)
    .then(res => res.json())
    .then((data) => {
      if (data.cod !== 200){
        throw new Error()
      }
      setApiData(data)
      setLoading(false)
      setError(false)
    })
    .catch(err => {
      console.log(err.meesage);
      setLoading(false)
    });

  }

  // Function to fetch response of OpenWeatherAPI 

  useEffect(() => {
    console.log(apiData)
  }, [apiData])

  return (
    <div className="App">

      
      <SearchCityBar
        value = {usrInput}
        submit = {handleSubmit}
        change = {handleInputChange}
      />

      {/* {error && <WeatherInfo />} */}
    </div>
  );
}

export default App;
