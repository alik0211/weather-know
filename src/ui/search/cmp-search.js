import React from 'react';
import debounce from 'lodash.debounce';
import getCities from '../../utils/getCities';

import './search.css';

class Search extends React.Component {
  state = {
    searchString: '',
    displayedCities: [],
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

  handleChange = event => {
    const { value } = event.currentTarget;

    this.setState(
      {
        searchString: value,
      },
      () => {
        this.debouncedGetSuggestions(value);
      }
    );
  };

  handleFocus = () => {
    this.setState({
      searchString: '',
    });
  };

  handleBlur = () => {
    const { city } = this.props;

    this.setState({
      searchString: city,
      displayedCities: [],
    });
  };

  getSuggestions = query => {
    getCities(query).then(cities => {
      this.setState({
        displayedCities: cities.suggestions,
      });
    });
  };

  debouncedGetSuggestions = debounce(this.getSuggestions, 300);

  renderSuggestions() {
    const { displayedCities } = this.state;
    const { setLocation, getForecast } = this.props;

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

            setLocation({
              city: address.city,
            });

            getForecast();
          }}
        >
          {label}
        </button>
      );
    });
  }

  render() {
    const { searchString, displayedCities } = this.state;

    return (
      <div className="search">
        <div className="search__inner">
          <input
            className="search__control"
            value={searchString}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            placeholder="London"
          />
          {!!displayedCities.length ? (
            <div className="search__suggestions">
              {this.renderSuggestions()}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Search;
