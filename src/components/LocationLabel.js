import PropTypes from 'prop-types';

const LocationLabel = ({city, country}) => {
    return (
        <div>
            <h1>{city}, {country}</h1>
        </div>
    );
};
LocationLabel.propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
};

export default LocationLabel
