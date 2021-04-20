import PropTypes from 'prop-types';
const WeatherInfo = ( {weather} ) => {
    return (
        <div>
            {weather.name}, {weather.country} <br/>
            {weather.temp}
        </div>
    );
};

WeatherInfo.propTypes = {
    weather: PropTypes.shape({
        name: PropTypes.string,
        country: PropTypes.string,
        sunset: PropTypes.number,
        sunrise: PropTypes.number,
        visibility: PropTypes.number,
        feels_like: PropTypes.number,
        humidity: PropTypes.number,
        pressure: PropTypes.number,
        temp: PropTypes.number,
        weather_main: PropTypes.string,
        icon: PropTypes.string,
        wind_speed: PropTypes.number,
      }).isRequired,
};
export default WeatherInfo