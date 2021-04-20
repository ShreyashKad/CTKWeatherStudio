import PropTypes from 'prop-types';

const LocationLabel = ({city, country}) => {
    return (
        <div>
            {city}, {country}
        </div>
    );
};
LocationLabel.propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
};

export default LocationLabel
