import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import Context from '../../Context/Context';
import MountDrinkDetails from '../../Context/customHooks/MountDrinkDetails';
import DrinkDetailsIngredients from '../../Components/DrinkDetailsIngredients';
import './style.css';
import FavAndShareBtn from '../../Components/FavoriteAndShareBtn/FavoriteAndShareBtn';

function MakingDrinks({ match: { params: { id } }, location }) {
  const { drinkDetails } = useContext(Context);

  const goTo = useHistory();

  const ingredientsArray = [];

  const drinkToLocalStorage = {
    id: drinkDetails.idDrink,
    type: 'bebida',
    area: '',
    category: drinkDetails.strCategory,
    alcoholicOrNot: drinkDetails.strAlcoholic,
    name: drinkDetails.strDrink,
    image: drinkDetails.strDrinkThumb,
  };

  MountDrinkDetails(id);

  return (
    <div key={ drinkDetails.idDrink }>
      <img data-testid="recipe-photo" src={ drinkDetails.strDrinkThumb } alt="food" />
      <h1 data-testid="recipe-title">{ drinkDetails.strDrink }</h1>
      <FavAndShareBtn
        ToLocalStorage={ drinkToLocalStorage }
        Details={ drinkDetails }
        location={ location }
      />
      <p data-testid="recipe-category">{drinkDetails.strCategory}</p>
      <DrinkDetailsIngredients
        ingredientsArray={ ingredientsArray }
      />
      <p data-testid="instructions">{drinkDetails.strInstructions}</p>
      <button
        onClick={ () => goTo.push('/receitas-feitas') }
        data-testid="finish-recipe-btn"
        type="button"
      >
        terminado
      </button>
    </div>
  );
}

MakingDrinks.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MakingDrinks;
