import React from 'react';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';

function Meals() {
  console.log('hello');
  return (
    <header>
      <button type="button" data-testid="profile-top-btn">
        <img src={ profileIcon } />
      </button>
      <h1 data-testid="page-title">Comidas</h1>
      <button type="button" data-testid="search-top-btn">
        <img src={ searchIcon } />
      </button>
    </header>
  );
}

export default Meals;
