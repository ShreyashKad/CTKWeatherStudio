import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types'

const WeatherComponent = ({ day, icon, maxTemp, minTemp}) => {

    
    return (
        <Grid container>
            <Grid item>
                {attribute}
            </Grid>
            <Grid>
                {value}
            </Grid>
        </Grid>
    );
};  

WeatherComponent.propTypes = {
    day: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    maxTemp: PropTypes.string.isRequired,
    minTemp: PropTypes.number.isRequired,
};

export default WeatherComponent
