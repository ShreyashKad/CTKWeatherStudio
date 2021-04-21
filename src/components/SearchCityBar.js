import PropTypes from 'prop-types';
import { styled } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';

const SearchBar = styled(TextField)({
    width: '20%',
    '& input:valid + fieldset': {
        borderColor: 'white',
        borderWidth: 2,
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '& input:invalid + fieldset': {
        borderColor: 'white',
        borderWidth: 2,
      },
      '& input:valid:focus + fieldset': {
        borderLeftWidth: 6,
        borderColor: 'white',
        padding: '4px !important', // override inline-style
      },
});

const SearchButton = styled(IconButton)({

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
