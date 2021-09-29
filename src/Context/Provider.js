import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Context from './Context';
import useFirstHook from '../Hooks/useFirstHook';

function Provider({ children }) {
  const [state, setState] = useFirstHook();
  const [user, setUser] = useState({ email: '', password: '' });
  const [title, setTitle] = useState('');
  const [searchButton, setSearchButton] = useState(false);
  const [randomMeals, setRandomMeals] = useState([]);
  const [mealDetails, setMealDetails] = useState([]);
  const [mealRecomendations, setMealRecomendations] = useState([]);
  const [drinkDetails, setDrinkDetails] = useState([]);
  const [drinkRecomendations, setDrinkRecomendations] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [favoriteIcon, setFavoriteIcon] = useState(false);
  const [continueRecipe, setContinueRecipe] = useState(false);
  const [inProgressRecipes, setInProgressRecipe] = useState({ cocktails: {}, meals: {} });
  const [checkArray, setCheckArray] = useState([]);

  const context = {
    checkArray,
    setCheckArray,
    state,
    setState,
    user,
    setUser,
    title,
    setTitle,
    searchButton,
    setSearchButton,
    randomMeals,
    setRandomMeals,
    mealDetails,
    setMealDetails,
    mealRecomendations,
    setMealRecomendations,
    drinkDetails,
    setDrinkDetails,
    drinkRecomendations,
    setDrinkRecomendations,
    ingredients,
    setIngredients,
    favoriteIcon,
    setFavoriteIcon,
    inProgressRecipes,
    setInProgressRecipe,
    continueRecipe,
    setContinueRecipe,
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
