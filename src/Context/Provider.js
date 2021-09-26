import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Context from './Context';
import useFirstHook from '../Hooks/useFirstHook';

function Provider({ children }) {
  const [state, setState] = useFirstHook();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [title, setTitle] = useState('');
  const [searchButton, setSearchButton] = useState(false);
  const [mealDetails, setMealDetails] = useState([]);
  const [mealRecomendations, setMealRecomendations] = useState([]);
  const [drinkDetails, setDrinkDetails] = useState([]);
  const [drinkRecomendations, setDrinkRecomendations] = useState([]);
  const [favoriteIcon, setFavoriteIcon] = useState(false);

  const context = {
    state,
    setState,
    user,
    setUser,
    title,
    setTitle,
    searchButton,
    setSearchButton,
    mealDetails,
    setMealDetails,
    mealRecomendations,
    setMealRecomendations,
    drinkDetails,
    setDrinkDetails,
    drinkRecomendations,
    setDrinkRecomendations,
    favoriteIcon,
    setFavoriteIcon,
  };

  return (
    <main>
      <Context.Provider value={ context }>
        {children}
      </Context.Provider>
    </main>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
