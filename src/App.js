import { useState } from "react";
import SearchCity from './components/SearchCityBar';
import './css/App.css';



function App() {
  let [city, setCity] = useState('');
  const handleInputChange = (value) => {
    setCity(value.target.value)
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
      <button type="submit" onClick={handleInputChange}>-></button>
       {city}

      <SearchCity />

    </div>
  );
}

export default App;
