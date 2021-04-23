import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';


const IconTemp = ({icon, temprature, feels_like,main}) =>{
    return (
        
        <Grid container direction="row">
            <Grid container justify ="center">
                {/* <Grid item> */}
                <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="weather status icon" width='100vm' height='100vm'></img>
                <p className="temp">{temprature}&#176; <div className="weatherMain">{main}</div> </p>
                {/* </Grid> */}
                <Grid item container direction="column">
                    <Grid item>
                        {temprature}
                    </Grid>
                    <Grid item>
                        Feels Like: {feels_like}
                    </Grid>
                </Grid>
            </Grid>
            {main}
        </Grid>
    );
};

IconTemp.propTypes = {
    icon: PropTypes.string.isRequired,
    temprature: PropTypes.number.isRequired,
    main: PropTypes.string.isRequired,
};

export default IconTemp;