import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import MealDetailsCards from '../../Components/MealDetailsCards';
import MealDetailsIngredients from '../../Components/MealDetailsIngredients';
import Context from '../../Context/Context';
import MountMealDetails from '../../Context/customHooks/MountMealDetails';

function MealDetails({ match: { params: { id } } }) {
  const { mealDetails } = useContext(Context);
  // const mealPath = pathname.includes('/comidas/');
  // console.log(mealPath);

  // RANDOM API https://www.thecocktaildb.com/api/json/v1/1/random.php
  //
  // console.log('ID:', id);
  // console.log(pathname);

  MountMealDetails(id);
  // console.log('alo', mealDetails);
  // console.log('alo2', mealRecomendations);

  return (
    <div>
      Meal DETAILS
      <img
        src={ mealDetails.strMealThumb }
        alt="meal-delicius"
        data-testid="recipe-photo"
      />
      <h1 data-testid="recipe-title">{ mealDetails.strMeal}</h1>
      <button type="button" data-testid="share-btn">Compartilhar</button>
      <button type="button" data-testid="favorite-btn">Favoritar</button>
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
      <button type="button" data-testid="start-recipe-btn">Iniciar Receita</button>
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
