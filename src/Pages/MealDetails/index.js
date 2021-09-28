import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import MealDetailsCards from '../../Components/MealDetailsCards';
import MealDetailsIngredients from '../../Components/MealDetailsIngredients';
import Context from '../../Context/Context';
import MountMealDetails from '../../Context/customHooks/MountMealDetails';
import NotFavoriteImg from '../../images/whiteHeartIcon.svg';
import FavoriteImg from '../../images/blackHeartIcon.svg';
import ShareImg from '../../images/shareIcon.svg';
import './styles.css';

const copy = require('clipboard-copy');

function MealDetails({ match: { params: { id } }, location: { pathname } }) {
  const { mealDetails, favoriteIcon,
    setFavoriteIcon, continueRecipe } = useContext(Context);

  const ingredientsArray = [];

  // load para aparecer "Link Copiado!"
  const [load, setLoad] = useState(false);
  // const LOAD_TIMER = 1800;
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
  const doneRecipe = localStorage.getItem('doneRecipes');
  const meals = {
    [mealDetails.idMeal]: ingredientsArray,
  };

  MountMealDetails(id);
  console.log(goTo);
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
        src={ favoriteIcon ? FavoriteImg : NotFavoriteImg }
        onClick={ () => {
          setFavoriteIcon(!favoriteIcon);
          const getFavoriteStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));

          if (getFavoriteStorage !== null) {
            const getMeal = getFavoriteStorage
              .some((meal) => meal.id === mealDetails.idMeal);

            if (getMeal === false) {
              localStorage
                .setItem('favoriteRecipes', JSON
                  .stringify([...getFavoriteStorage, mealToLocalStorage]));
            }
          }
        } }
      >
        <img src={ favoriteIcon ? FavoriteImg : NotFavoriteImg } alt="favorite" />
      </button>

      <button
        type="button"
        data-testid="share-btn"
        src={ ShareImg }
        onClick={ () => {
          setLoad(true);
          copy(`http://localhost:3000${pathname}`);
          // setTimeout(() => setLoad(false), LOAD_TIMER);
        } }
      >
        <img src={ ShareImg } alt="share" />
      </button>
      { load && <p>Link copiado!</p>}
      <p data-testid="recipe-category">{ mealDetails.strCategory }</p>

      <MealDetailsIngredients ingredientsArray={ ingredientsArray } />

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
      {
        !doneRecipe
        && (
          <button
            type="button"
            className="btn btn-danger"
            data-testid="start-recipe-btn"
            onClick={ () => {
              goTo.push(`/comidas/${id}/in-progress`);
              const getInProgressStorage = JSON
                .parse(localStorage.getItem('inProgressRecipes'));
              localStorage
                .setItem('inProgressRecipes', JSON
                  .stringify({ ...getInProgressStorage, meals }));
            } }
          >
            {continueRecipe ? 'Continuar Receita' : 'Iniciar Receita'}
          </button>
        )
      }
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
