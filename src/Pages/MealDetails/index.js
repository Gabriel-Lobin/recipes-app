import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import MealDetailsCards from '../../Components/MealDetailsCards';
import MealDetailsIngredients from '../../Components/MealDetailsIngredients';
import Context from '../../Context/Context';
import MountMealDetails from '../../Context/customHooks/MountMealDetails';
import FavoriteImg from '../../images/whiteHeartIcon.svg';
import ShareImg from '../../images/shareIcon.svg';
import './styles.css';

const copy = require('clipboard-copy');

function MealDetails({ match: { params: { id } }, location: { pathname } }) {
  const { mealDetails } = useContext(Context);
  const [load, setLoad] = useState(false);
  const LOAD_TIMER = 1800;

  const goTo = useHistory();

  MountMealDetails(id);
  return (
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
        <img src={ FavoriteImg } alt="favorite" />
      </button>

      <button
        type="button"
        data-testid="share-btn"
        src={ ShareImg }
        onClick={ () => {
          setLoad(true);
          copy(`http://localhost:3000${pathname}`);
          setTimeout(() => setLoad(false), LOAD_TIMER);
        } }
      >
        <img src={ ShareImg } alt="share" />
      </button>
      { load && <p>Link copiado!</p>}
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
