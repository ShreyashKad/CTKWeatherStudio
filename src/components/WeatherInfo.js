import LocationLabel from './LocationLabel';
import WeakWeatherCard from './WeakWeatherCard';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import IconTemp from './IconTemp';
import { useState } from "react";

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
    const [index, setIndex] = useState(0)
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
                            <Grid container justify ="center">
                                <IconTemp 
                                    icon = {weather.icon}
                                    temprature = {weather.temp}
                                    main = {weather.weather_main}
                                />
                            </Grid>
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
                                    <div className="weatherComponentsText">{weather.feels_like}&#176; </div>
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
                <Grid item xs={12} sm={11} xl={8}>
                    <CardHolder variant="outlined">
                        {/* <CardContent> */}
                            
                            <Grid container >
                                <Grid item style={{margin: 'auto'}}>
                                    <IconTemp 
                                        icon = {weather.weekData[index].weather[0].icon}
                                        temprature = { Math.round( (weather.weekData[index].temp.min + weather.weekData[index].temp.max)/2 ) }
                                        main = {weather.weekData[index].weather[0].description}
                                    />
                                </Grid>
                                <Grid item xs={12} md={8} style={{margin: '2% 0 0 auto', paddingLeft:'2%',}}>
                                    <Grid container direction="column">
                                        <Grid item  container direction="row">
                                            {/* Max Temp */}
                                            <Grid item className="weatherWeekComponents">
                                                <AdjustIcon fontSize="large"/>
                                                <div>Max Temprature</div>
                                                <div className="weatherComponentsText">{weather.weekData[index].temp.max}&#176;</div>
                                            </Grid>
                                            {/* Sun Rise */}
                                            <Grid item className="weatherWeekComponents">
                                                <WbSunnyIcon fontSize="large"/>
                                                <div>Sun Rise</div>
                                                <div className="weatherComponentsText">{weather.weekData[index].sunrise}</div>
                                            </Grid>
                                            {/* Pressure */}
                                            <Grid item className="weatherWeekComponents">
                                                <SpeedIcon fontSize="large"/>
                                                <div>Pressure</div>
                                                <div className="weatherComponentsText">{weather.weekData[index].pressure} in</div>
                                            </Grid>
                                            {/* Wind Speed */}
                                            <Grid item className="weatherWeekComponents">
                                                <WavesIcon fontSize="large"/>
                                                <div>Wind</div>
                                                <div className="weatherComponentsText">{weather.weekData[index].wind_speed} km/h</div>
                                            </Grid>
                                        </Grid>
                                        <Grid item container direction="row">
                                            {/* Min temprature */}
                                            <Grid item className="weatherWeekComponents">
                                                <AdjustIcon fontSize="large"/>
                                                <div>Min Temprature</div>
                                                <div className="weatherComponentsText">{weather.weekData[index].temp.min}&#176;</div>
                                            </Grid>
                                            {/* Sun Set */}
                                            <Grid item className="weatherWeekComponents">
                                                <FlareIcon fontSize="large"/>
                                                <div>Sun Set</div>
                                                <div className="weatherComponentsText">{weather.weekData[index].sunset}</div>
                                            </Grid>
                                            {/* Humidity */}
                                            <Grid item className="weatherWeekComponents">
                                                <OpacityIcon fontSize="large"/>
                                                <div>Humidity</div>
                                                <div className="weatherComponentsText">{weather.weekData[index].humidity} %</div>
                                            </Grid>
                                            {/* UVI */}
                                            <Grid item className="weatherWeekComponents">
                                                <Brightness5Icon fontSize="large"/>
                                                <div>UV index</div>
                                                <div className="weatherComponentsText">{weather.weekData[index].uvi}</div>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    {/* {weather.weekData[index].temp.min}  */}
                                </Grid>
                            </Grid>
                            <Grid container >
                                <Grid item className="cardStyle">
                                    <WeakWeatherCard
                                        onClick = {()=>setIndex(0)}
                                        day = {weather.weekData[0].dt}
                                        icon = {weather.weekData[0].weather[0].icon}
                                        minTemp = {weather.weekData[0].temp.min}
                                        maxTemp = {weather.weekData[0].temp.max}
                                    />
                                </Grid>
                                <Grid item className="cardStyle">
                                    <WeakWeatherCard
                                        onClick = {()=>setIndex(1)}
                                        day = {weather.weekData[1].dt}
                                        icon = {weather.weekData[1].weather[0].icon}
                                        minTemp = {weather.weekData[1].temp.min}
                                        maxTemp = {weather.weekData[1].temp.max}
                                    />
                                </Grid>
                                <Grid item className="cardStyle">
                                    <WeakWeatherCard
                                        onClick = {()=>setIndex(2)}
                                        day = {weather.weekData[2].dt}
                                        icon = {weather.weekData[2].weather[0].icon}
                                        minTemp = {weather.weekData[2].temp.min}
                                        maxTemp = {weather.weekData[2].temp.max}
                                    />
                                </Grid>
                                <Grid item className="cardStyle">
                                    <WeakWeatherCard
                                        onClick = {()=>setIndex(3)}
                                        day = {weather.weekData[3].dt}
                                        icon = {weather.weekData[3].weather[0].icon}
                                        minTemp = {weather.weekData[3].temp.min}
                                        maxTemp = {weather.weekData[3].temp.max}
                                    />
                                </Grid>
                                <Grid item className="cardStyle">
                                    <WeakWeatherCard
                                        onClick = {()=>setIndex(4)}
                                        day = {weather.weekData[4].dt}
                                        icon = {weather.weekData[4].weather[0].icon}
                                        minTemp = {weather.weekData[4].temp.min}
                                        maxTemp = {weather.weekData[4].temp.max}
                                    />
                                </Grid>
                                <Grid item className="cardStyle">
                                    <WeakWeatherCard
                                        onClick = {()=>setIndex(5)}
                                        day = {weather.weekData[5].dt}
                                        icon = {weather.weekData[5].weather[0].icon}
                                        minTemp = {weather.weekData[5].temp.min}
                                        maxTemp = {weather.weekData[5].temp.max}
                                    />
                                </Grid>
                            </Grid>

                        {/* </CardContent> */}
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
        weekData: PropTypes.array,
    }).isRequired,
};
export default WeatherInfo