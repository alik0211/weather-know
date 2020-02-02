import React from 'react';
import debounce from '../../../utils/debounce';

import {
  DADATA_API_KEY,
  DADATA_ROOT_API,
  HERE_API_KEY,
  HERE_ROOT_API,
} from '../../../config';
import './search.css';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: null,
      searchString: '',
      autoComplete: null,
    };

    this.autoComplete = debounce(this.autoComplete.bind(this), 500);
  }

  handleChangeInput = event => {
    const searchstring = event.target.value;
    if (searchstring.length > 3) {
      this.autoComplete(searchstring);
    }
    this.setState({ searchString: searchstring });
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
    this.props.setLocation({ city: searchString });
    this.props.getForecast();
    this.setState({ autoComplete: null });
  };

  autoComplete(searchString) {
    fetch(`${HERE_ROOT_API}?apiKey=${HERE_API_KEY}&query=${searchString}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        return data.suggestions.filter(item => {
          return item.address.city || item.address.district;
        });
      })
      .then(data => {
        return data.filter(item => {
          return (
            (item.address.city &&
              item.address.city
                .toLowerCase()
                .includes(searchString.toLowerCase())) ||
            (item.address.district &&
              item.address.district
                .toLowerCase()
                .includes(searchString.toLowerCase()))
          );
        });
      })
      .then(data => {
        this.setState({ autoComplete: data });
      });
  }

  // autoComplete(searchString) {// dadata
  //   var params = {
  //     method: 'POST',
  //     contentType: 'application/json',
  //     headers: {
  //       Authorization: 'Token ' + DADATA_API_KEY,
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json',
  //     },
  //     body: JSON.stringify({
  //       query: searchString,
  //       locations: [{ country: '*' }],
  //     }),
  //   };
  //   fetch(`${DADATA_ROOT_API}`, params)
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(data => {
  //       return data.suggestions.filter(item => {
  //         return item.data.city || item.data.settlement;
  //       });
  //     })
  //     .then(data => {
  //       return data.filter(item => {
  //         return (
  //           (item.data.city &&
  //             item.data.city
  //               .toLowerCase()
  //               .includes(searchString.toLowerCase())) ||
  //           (item.data.settlement &&
  //             item.data.settlement
  //               .toLowerCase()
  //               .includes(searchString.toLowerCase()))
  //         );
  //       });
  //     })
  //     .then(data => {
  //       this.setState({ autoComplete: data });
  //     });
  // }

  handleAutoComplete = searchString => {
    this.setState({
      searchString: searchString,
      autoComplete: null,
    });
  };

  componentDidUpdate() {
    const { city } = this.props;
    if (this.state.city !== city) {
      this.setState({ city: city, searchString: city });
    }
  }

  render() {
    const { searchString, autoComplete } = this.state;
    return (
      <div>
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
        {autoComplete &&
          autoComplete.map(item => {
            return (
              <div
                key={item.label}
                className="search__list"
                onClick={() =>
                  this.handleAutoComplete(
                    item.address.city || item.address.district
                  )
                }
              >
                {item.label}
              </div>
            );
          })}
      </div>
    );
  }
}
