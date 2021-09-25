import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import MealDetailsCards from '../../Components/MealDetailsCards';
import MealDetailsIngredients from '../../Components/MealDetailsIngredients';
import Context from '../../Context/Context';
import MountMealDetails from '../../Context/customHooks/MountMealDetails';
import ShareImg from '../../images/whiteHeartIcon.svg';
import FavoriteImg from '../../images/shareIcon.svg';
import './styles.css';

function MealDetails({ match: { params: { id } } }) {
  const { mealDetails } = useContext(Context);

  MountMealDetails(id);

  return (
    <div>
      <div className="meal-body">
        <img
          src={ mealDetails.strMealThumb }
          alt="meal-delicius"
          data-testid="recipe-photo"
        />
        <h1 data-testid="recipe-title">{ mealDetails.strMeal}</h1>
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
        <p data-testid="recipe-category">{ mealDetails.strCategory }</p>

        <MealDetailsIngredients />
        <p data-testid="instructions">{ mealDetails.strInstructions }</p>
        <iframe
          src={ mealDetails.strYoutube }
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
        >
          Iniciar Receita
        </button>
      </div>
    </div>
  );
}

MealDetails.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MealDetails;
