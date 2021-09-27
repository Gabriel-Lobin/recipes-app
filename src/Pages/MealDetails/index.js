import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import MealDetailsCards from '../../Components/MealDetailsCards';
import MealDetailsIngredients from '../../Components/MealDetailsIngredients';
import Context from '../../Context/Context';
import FavAndShareBtn from '../../Components/FavoriteAndShareBtn/FavoriteAndShareBtn';
import MountMealDetails from '../../Context/customHooks/MountMealDetails';
import './styles.css';

function MealDetails({ match: { params: { id } }, location }) {
  const { mealDetails } = useContext(Context);

  const goTo = useHistory();

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
    <div className="meal-body">
      <img
        src={ mealDetails.strMealThumb }
        alt="meal-delicius"
        data-testid="recipe-photo"
      />
      <h1 data-testid="recipe-title">{ mealDetails.strMeal}</h1>
      <FavAndShareBtn
        ToLocalStorage={ mealToLocalStorage }
        Details={ mealDetails }
        location={ location }
      />
      <p data-testid="recipe-category">{ mealDetails.strCategory }</p>

      <MealDetailsIngredients />
      <p data-testid="instructions">{ mealDetails.strInstructions }</p>
      <iframe
        src={ mealDetails.strYoutube
          ? mealDetails.strYoutube.replace('watch?v=', 'embed/')
          : mealDetails.strYoutube }
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
        data-testid="video"
      />

      <MealDetailsCards />
      <button
        type="button"
        className="btn btn-danger"
        data-testid="start-recipe-btn"
        onClick={ () => goTo.push(`/comidas/${id}/in-progress`) }
      >
        Iniciar Receita
      </button>
    </div>
  );
}

MealDetails.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MealDetails;
