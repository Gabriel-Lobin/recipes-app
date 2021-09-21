import React from 'react';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';

function Header() {
  return (
    <header>
      <button
        src="../../images/profileIcon.svg"
        type="button"
        data-testid="profile-top-btn"
      >
        <img src={ profileIcon } alt="profile icon" />
      </button>
      <h1 data-testid="page-title">Comidas</h1>
      <button
        src="../../images/searchIcon.svg"
        type="button"
        data-testid="search-top-btn"
      >
        <img src={ searchIcon } alt="search icon" />
      </button>
    </header>
  );
}

export default Header;
