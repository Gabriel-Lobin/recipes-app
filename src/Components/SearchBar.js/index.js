import React from 'react';

function SearchBar() {
  return (
    <div>
      <label htmlFor="searchBar">
        <input type="text" name="searchBar" id="searchBar" data-testid="search-input" />
      </label>
    </div>
  );
}

export default SearchBar;
