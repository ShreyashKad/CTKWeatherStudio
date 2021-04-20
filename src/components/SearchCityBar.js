import PropTypes from 'prop-types';
import { styled } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';

const SearchBar = styled(TextField)({

});

const SearchButton = styled(IconButton)({

});


const SearchCityBar = ({submit, change, value}) => {
    return (
        <div>
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
    // showResult: PropTypes.bool.isRequired,
  };
  

export default SearchCityBar
