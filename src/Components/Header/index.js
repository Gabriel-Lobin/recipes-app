import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import Context from '../../Context/Context';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import { Titulos, ButtonsHidden } from '../../utils/compare';
import './header.css';

function Header() {
  const { title, setSearchButton, searchButton } = useContext(Context);
  const goTo = useHistory();
  return (
    <header className="header">
      <button
        onClick={ () => goTo.push('/perfil') }
        src="../../images/profileIcon.svg"
        type="button"
        data-testid="profile-top-btn"
      >
        <img src={ profileIcon } alt="profile icon" />
      </button>
      <h1 data-testid="page-title">
        {
          Titulos[title]
            ? Titulos[title]
            : title
        }
      </h1>
      {
        ButtonsHidden[title]
          ? null
          : (
            <button
              src="../../images/searchIcon.svg"
              type="button"
              data-testid="search-top-btn"
              onClick={ () => setSearchButton(!searchButton) }
            >
              <img src={ searchIcon } alt="search icon" />
            </button>
          )
      }
    </header>
  );
}

export default Header;
