import React from 'react';
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
    this.props.setLocation({ city: this.state.searchString });
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
