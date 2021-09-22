import PropTypes from 'prop-types';
import React from 'react';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import './header.css';

const Titulos = {
  Explore: 'Explorar',
  ExploreMeals: 'Explorar Comidas',
  ExploreDrinks: 'Explorar Bebidas',
  ExploreIngredients: 'Explorar Ingredientes',
  ExploreOrigin: 'Explorar Origem',
  Profile: 'Perfil',
  DoneRecipes: 'Receitas Feitas',
  FavoriteRecipes: 'Receitas Favoritas',
};

const ButtonsHidden = {
  Explore: 'Explorar',
  ExploreMeals: 'Explorar Comidas',
  ExploreDrinks: 'Explorar Bebidas',
  ExploreIngredients: 'Explorar Ingredientes',
  Profile: 'Perfil',
  DoneRecipes: 'Receitas Feitas',
  FavoriteRecipes: 'Receitas Favoritas',
};

function Header({ h1 }) {
  return (
    <header className="header">
      <button
        src="../../images/profileIcon.svg"
        type="button"
        data-testid="profile-top-btn"
      >
        <img src={ profileIcon } alt="profile icon" />
      </button>
      <h1 data-testid="page-title">
        {
          Titulos[h1]
            ? Titulos[h1]
            : h1
        }
      </h1>
      {
        ButtonsHidden[h1]
          ? null
          : (
            <button
              src="../../images/searchIcon.svg"
              type="button"
              data-testid="search-top-btn"
            >
              <img src={ searchIcon } alt="search icon" />
            </button>)
      }
    </header>
  );
}

Header.propTypes = {
  h1: PropTypes.string.isRequired,
};

export default Header;
