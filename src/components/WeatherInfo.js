import LocationLabel from './LocationLabel';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import IconTemp from './IconTemp';

const WeatherInfo = ({ weather }) => {
    return (
        <div>
            <div>
                <LocationLabel 
                    city = {weather.name}
                    country = {weather.country}
                />
            </div>
            <Grid container justify="center" spacing={5}>
                <Card variant="outlined">
                    <CardContent>
                        <Grid item md={5} justify="center">
                            
                            <IconTemp 
                                icon = {weather.icon}
                                temprature = {weather.temp}
                                main = {weather.main}
                                feels_like = {weather.feels_like}
                            />
                            
                            <Grid container>
                                
                                <Grid container>
                                    <Grid item sm = {3}>
                                        {weather.wind_speed}
                                    </Grid>
                                    <Grid item sm = {3}>
                                        {weather.wind_speed}
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item sm = {3}>
                                            {weather.wind_speed}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
                <Grid item md={6} justify="center">
                    <Card variant="outlined">
                        <CardContent>
                            Hello
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
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