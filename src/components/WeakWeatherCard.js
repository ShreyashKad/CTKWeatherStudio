import PropTypes from 'prop-types'

// const cardStyle ={
//     color: 'red',
//     with: '20% !important',
//     padding: '10%',
    
// };
const WeakWeatherCard = ({ onClick, day, icon, maxTemp, minTemp}) => {

    
    return (
        <div onClick={onClick} style={{textAlign:"center"}}>
            <div>
                {day}
            </div>
            <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="weather status icon" width='50%' height='50%' style={{margin: '0 auto', minHeight: '30px',}}></img>
            <div>
                {minTemp}&#176;
            </div>
            <div>
                {maxTemp}&#176;
            </div>
        </div>
    );
};  

WeakWeatherCard.propTypes = {
    onClick: PropTypes.func,
    day: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    maxTemp: PropTypes.number.isRequired,
    minTemp: PropTypes.number.isRequired,
};

export default WeakWeatherCard
