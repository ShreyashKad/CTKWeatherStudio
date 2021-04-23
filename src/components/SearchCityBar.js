import PropTypes from 'prop-types';
import { styled, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';

const SearchBar = withStyles({
  root: {
    width: '30%',
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  },
})(TextField);

const SearchButton = styled(IconButton)({
  // backgroundColor: 'white',
  // '&:hover':{
  //   backgroundColor: '#efefef',
  // },

});


const SearchCityBar = ({submit, change, value, showResult}) => {
    const serachCSS ={
        // marginTop: {showResult ? 10% : '20%'} ,
        
    }
    return (
        <div style={showResult ? {marginTop: '5%', transition: '1.4s'} : {marginTop: '20%', transition: '0.3s 1.4s'}}>
            <SearchBar
                id="outlined-basic"
                type="text"
                label="Enter City"
                name="s"
                value = {value}
                onChange={change}
                variant= "outlined"
            />
            
            <SearchButton
                color="white"
                type="submit"
                onClick={submit}
            >
                <ArrowForwardRoundedIcon />
                
            </SearchButton>

        </div>
    )
}

SearchCityBar.propTypes = {
    submit: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    change: PropTypes.func.isRequired,
    showResult: PropTypes.bool.isRequired,
  };
  

export default SearchCityBar
