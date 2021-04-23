import LocationLabel from './LocationLabel';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import IconTemp from './IconTemp';
import { styled, withStyles } from '@material-ui/core/styles';

const CardHolder = styled(Card)({
    backgroundColor: 'rgba(0,0,0,0.3)',
});

const WeatherInfo = ({ weather }) => {
    return (
        <div>
            <div>
                <LocationLabel 
                    city = {weather.name}
                    country = {weather.country}
                />
            </div>
            <Grid container justify="center" spacing={2}>
                <Grid item sm={11} md={12} lg={8} xl={3}>
                    <CardHolder variant="outlined">
                        <CardContent>
                            <IconTemp 
                                icon = {weather.icon}
                                temprature = {weather.temp}
                                main = {weather.weather_main}
                            />
                            {weather.wind_speed}
                            
                        </CardContent>
                    </CardHolder>
                </Grid>
                <Grid item sm={11} xl={8}>
                    <CardHolder variant="outlined">
                        <CardContent>
                            Hello
                        </CardContent>
                    </CardHolder>
                </Grid>
            </Grid>
            {/* 
                    
                        
                            
                            
                            
                            
                <Grid item md={6} justify="center">
                    
                </Grid>
            </Grid> */}
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
        uvi: PropTypes.number,
    }).isRequired,
};
export default WeatherInfo