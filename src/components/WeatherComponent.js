import PropTypes from 'prop-types'

const WeatherComponent = ({ attribute, value}) => {

    
    return (
        <>
            <div>
                {attribute}
            </div>
            <div>
                {value}
            </div>
        </>
    );
};  

WeatherComponent.propTypes = {
    attribute: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

export default WeatherComponent
