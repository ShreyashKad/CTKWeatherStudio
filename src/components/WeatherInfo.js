import LocationLabel from './LocationLabel';
import WeatherComponent from './WeatherComponent';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import IconTemp from './IconTemp';

import AdjustIcon from '@material-ui/icons/Adjust';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import FlareIcon from '@material-ui/icons/Flare';
import WavesIcon from '@material-ui/icons/Waves';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import VisibilityIcon from '@material-ui/icons/Visibility';
import SpeedIcon from '@material-ui/icons/Speed';
import OpacityIcon from '@material-ui/icons/Opacity';

import {styled} from '@material-ui/core/styles';

const CardHolder = styled(Card)({
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: '100%',
    padding: 0,
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
                <Grid item xs={11} md={12} lg={8} xl={2} >
                    <CardHolder variant="outlined" >
                        <CardContent style={{padding:0,}}>
                            <IconTemp 
                                icon = {weather.icon}
                                temprature = {weather.temp}
                                main = {weather.weather_main}
                            />
                            {/* {weather.wind_speed} */}
                            
                            <Grid container>
                                {/* Wind Speed */}
                                <Grid item className="weatherComponents">
                                    <WavesIcon fontSize="large"/>
                                    <div>Wind</div>
                                    <div className="weatherComponentsText">{weather.wind_speed} km/h</div>
                                </Grid>
                                {/* Feels like temprature */}
                                <Grid item className="weatherComponents">
                                    <AdjustIcon fontSize="large"/>
                                    <div>Feels Like</div>
                                    <div className="weatherComponentsText">{weather.feels_like} km/h</div>
                                </Grid>
                            </Grid>
                            <Grid container >
                                {/* UVI */}
                                <Grid item className="weatherComponents">
                                    <Brightness5Icon fontSize="large"/>
                                    <div>UV Index</div>
                                    <div className="weatherComponentsText">{weather.uvi}</div>
                                </Grid>
                                {/* Visibility */}
                                <Grid item className="weatherComponents">
                                    <VisibilityIcon fontSize="large"/>
                                    <div>Visibility</div>
                                    <div className="weatherComponentsText">{weather.visibility}</div>
                                </Grid>
                            </Grid>
                            <Grid container  >
                                {/* Sun rise */}
                                <Grid item className="weatherComponents">
                                    <WbSunnyIcon fontSize="large"/>
                                    <div>Sun Rise</div>
                                    <div className="weatherComponentsText">{weather.sunrise}</div>
                                </Grid>
                                {/* Sun set */}
                                <Grid item className="weatherComponents">
                                    <FlareIcon fontSize="large"/>
                                    <div>Sun Set</div>
                                    <div className="weatherComponentsText">{weather.sunset}</div>
                                </Grid>
                            </Grid>
                            <Grid container  >
                                {/* Pressure */}
                                <Grid item className="weatherComponents">
                                    <SpeedIcon fontSize="large"/>
                                    <div>Pressure</div>
                                    <div className="weatherComponentsText">{weather.pressure} in</div>
                                </Grid>
                                {/* Humidity */}
                                <Grid item className="weatherComponents">
                                    <OpacityIcon fontSize="large"/>
                                    <div>Humidity</div>
                                    <div className="weatherComponentsText">{weather.humidity} %</div>
                                </Grid>
                            </Grid>
                            
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