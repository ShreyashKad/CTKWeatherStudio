import PropTypes from 'prop-types';

const SearchCityBar = ({submit, change, value}) => {
    return (
        <div>
            <input
                type="text"
                id="header-search"
                placeholder="Enter City"
                name="s"
                value = {value}
                onChange={change}
            />
            <button type="submit" onClick={submit}>-></button>

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
