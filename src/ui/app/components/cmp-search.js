import React from 'react';
import { DADATA_API_KEY, DADATA_ROOT_API } from '../../../config';
import './search.css';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: null,
      searchString: '',
    };
  }

  handleChangeInput = event => {
    this.setState({ searchString: event.target.value });
  };

  handleFocusInput = () => {
    const { searchString, city } = this.state;
    if (searchString === city) {
      this.setState({ searchString: '' });
    }
  };

  handleBlurInput = () => {
    const { searchString, city } = this.state;
    if (searchString === '') {
      this.setState({ searchString: city });
    }
  };

  handleClickButton = () => {
    const { searchString } = this.state;
    let result = new Set();
    var params = {
      method: 'POST',
      contentType: 'application/json',
      headers: {
        Authorization: 'Token ' + DADATA_API_KEY,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: searchString,
        locations: [{ country: '*' }],
      }),
    };

    this.props.setLocation({ city: this.state.searchString });

    fetch(`${DADATA_ROOT_API}`, params)
      .then(response => {
        return response.json();
      })
      .then(data => {
        return data.suggestions.filter(item => {
          return item.data.city || item.data.settlement;
        });
      })
      .then(data => {
        data.map(item => result.add(item.data.city || item.data.settlement));
        console.log(result);
        return result;
      });
  };

  componentDidUpdate() {
    const { city } = this.props;
    if (this.state.city !== city) {
      this.setState({ city: city, searchString: city });
    }
  }

  render() {
    const { searchString } = this.state;
    return (
      <div className="search">
        <input
          className="search__input"
          value={searchString}
          onChange={this.handleChangeInput}
          onFocus={this.handleFocusInput}
          onBlur={this.handleBlurInput}
        />
        <button className="search__button" onClick={this.handleClickButton}>
          search
        </button>
      </div>
    );
  }
}
