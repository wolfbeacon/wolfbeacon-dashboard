import React, { Component } from 'react';

import '../css/bulma.css';

import feather from 'feather-icons';

class Search extends Component {

  componentDidMount(){
    feather.replace();
  }

  render() {
    return (

      <div class="search-parent">
        <div class="field is-grouped search-field">
            <p class="control is-expanded">
              <input class="input is-large search-is-bold" name="query" type="text" required/>
            </p>
            <p class="control">
              <button type="submit" class="button is-success is-large bd-rainbow">
              <span class="icon">
                <i class="search-icon-2" data-feather="search"></i>
              </span>
              </button>
            </p>
        </div>
      </div>

    )
  }
}

export default Search;