import React from 'react';
import debounce from 'lodash.debounce';
import getCities from '../../utils/getCities';

import './search.scss';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showInput: false,
      searchString: '',
      displayedCities: [],
    };
  }

  focusInput = component => {
    if (component) {
      component.focus();
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const { city: prevCity } = prevProps;
    const { city } = this.props;

    if (prevCity === city) {
      return;
    }

    this.setState({
      searchString: city,
    });
  }

  handleLoupeClick = () => {
    this.setState({ showInput: true });
  };

  handleArrowClick = () => {
    this.setState({ showInput: false });
  };

  handleCloseClick = () => {
    this.setState({ searchString: '' });
  };

  search = city => {
    const { setLocation, getForecast } = this.props;

    this.setState({
      showInput: false,
      displayedCities: [],
    });

    setLocation({
      city: city,
    });

    getForecast();
  };

  /* Input's event */
  handleKeyDown = event => {
    if (event.key === 'Enter') {
      this.search(this.state.searchString);
    }
  };

  handleChange = event => {
    const { value } = event.currentTarget;

    this.setState({ searchString: value }, () => {
      this.debouncedGetSuggestions(value);
    });
  };

  handleFocus = () => {
    this.setState({
      searchString: '',
    });
  };

  handleBlur = () => {
    const { city } = this.props;

    this.setState({
      showInput: false,
      searchString: city,
      displayedCities: [],
    });
  };

  getSuggestions = query => {
    getCities(query).then(cities => {
      this.setState({
        displayedCities: cities.suggestions || [],
      });
    });
  };

  debouncedGetSuggestions = debounce(this.getSuggestions, 300);

  renderSuggestions() {
    const { displayedCities } = this.state;

    return displayedCities.map(suggestion => {
      const { locationId, label, address } = suggestion;

      return (
        <button
          className="search__suggestion"
          key={locationId}
          onMouseDown={event => {
            if (event.button !== 0) {
              return;
            }
            this.search(address.city);
          }}
        >
          {label}
        </button>
      );
    });
  }

  render() {
    const { searchString, displayedCities, showInput } = this.state;

    return (
      <div className="search">
        {!showInput && (
          <div className="search__inner">
            <div className="search__value">{searchString}</div>
            <button
              className="search__button search__button-loupe"
              onClick={this.handleLoupeClick}
            />
          </div>
        )}
        {showInput && (
          <div className="search__inner">
            <div className="search__container">
              <button
                className="search__button search__button-arrow"
                onClick={this.handleArrowClick}
              />
              <input
                ref={this.focusInput}
                className="search__control"
                value={searchString}
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                onKeyDown={this.handleKeyDown}
                placeholder="Enter city"
              />
              {searchString && (
                <button
                  className="search__button search__button-close"
                  src={require('./icon-close.svg')}
                  onClick={this.handleCloseClick}
                />
              )}
            </div>
            {!!displayedCities.length ? (
              <div className="search__suggestions">
                {this.renderSuggestions()}
              </div>
            ) : null}
          </div>
        )}
      </div>
    );
  }
}

export default Search;
