import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import MealDetailsIngredients from '../../Components/MealDetailsIngredients';
import Context from '../../Context/Context';
import './style.css';
import MountMealDetails from '../../Context/customHooks/MountMealDetails';
import FavAndShareBtn from '../../Components/FavoriteAndShareBtn/FavoriteAndShareBtn';

function MakingMeals({ match: { params: { id } }, location }) {
  const { mealDetails } = useContext(Context);

  const goTo = useHistory();

  const ingredientsArray = [];

  const mealToLocalStorage = {
    id: mealDetails.idMeal,
    type: 'comida',
    area: mealDetails.strArea,
    category: mealDetails.strCategory,
    alcoholicOrNot: '',
    name: mealDetails.strMeal,
    image: mealDetails.strMealThumb,
  };

  MountMealDetails(id);

  return (
    <div key={ mealDetails.idMeal }>
      <img data-testid="recipe-photo" src={ mealDetails.strMealThumb } alt="food" />
      <h1 data-testid="recipe-title">{ mealDetails.strMeal }</h1>
      <FavAndShareBtn
        ToLocalStorage={ mealToLocalStorage }
        Details={ mealDetails }
        location={ location }
      />
      <p data-testid="recipe-category">{mealDetails.strCategory}</p>
      <MealDetailsIngredients
        ingredientsArray={ ingredientsArray }
      />
      <p data-testid="instructions">{mealDetails.strInstructions}</p>
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

MakingMeals.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MakingMeals;
