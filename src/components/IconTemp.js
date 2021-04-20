import PropTypes from 'prop-types';


const IconTemp = ({icon, temprature, feels_like,main}) =>{
    return (
        
        <>
            <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="weather status icon" ></img>
            {temprature} <br />
            Feels Like: {feels_like} <br />
            {main}
        </>
    );
};

IconTemp.propTypes = {
    icon: PropTypes.string.isRequired,
    temprature: PropTypes.number.isRequired,
    main: PropTypes.string.isRequired,
    feels_like: PropTypes.string.isRequired,
};

export default IconTemp;