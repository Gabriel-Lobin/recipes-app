import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../../Context/Context';
import ShareImg from '../../images/whiteHeartIcon.svg';
import FavoriteImg from '../../images/shareIcon.svg';
import MountDrinkDetails from '../../Context/customHooks/MountDrinkDetails';
import DrinkDetailsIngredients from '../../Components/DrinkDetailsIngredients';
import './style.css';

function MakingDrinks({ match: { params: { id } } }) {
  const { drinkDetails } = useContext(Context);
  MountDrinkDetails(id);
  return (
    <div key={ drinkDetails.idDrink }>
      <img data-testid="recipe-photo" src={ drinkDetails.strDrinkThumb } alt="food" />
      <h1 data-testid="recipe-title">{ drinkDetails.strDrink }</h1>
      <button
        type="button"
        data-testid="favorite-btn"
        src={ FavoriteImg }
      >
        <img src={ FavoriteImg } alt="share" />
      </button>

      <button
        type="button"
        data-testid="share-btn"
        src={ ShareImg }
      >
        <img src={ ShareImg } alt="share" />
      </button>
      <p data-testid="recipe-category">{drinkDetails.strCategory}</p>
      <DrinkDetailsIngredients />
      <p data-testid="instructions">{drinkDetails.strInstructions}</p>
      <button
        data-testid="finish-recipe-btn"
        type="button"
      >
        terminado
      </button>
    </div>
  );
}

MakingDrinks.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MakingDrinks;
