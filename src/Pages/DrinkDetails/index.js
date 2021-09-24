import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import DrinkDetailsCards from '../../Components/DrinkDetailsCards';
import DrinkDetailsIngredients from '../../Components/DrinkDetailsIngredients';
import Context from '../../Context/Context';
import MountDrinkDetails from '../../Context/customHooks/MountDrinkDetails';

function DrinkDetails({ match: { params: { id } } }) {
  const { drinkDetails } = useContext(Context);
  // const drinkPath = pathname.includes('/bebidas/');
  // console.log(mealPath);

  // RANDOM API https://www.thecocktaildb.com/api/json/v1/1/random.php
  //
  // console.log('ID:', id);
  // console.log(pathname);

  MountDrinkDetails(id);
  // console.log('alo', mealDetails);
  // console.log('alo2', mealRecomendations);

  return (
    <div>
      Drink DETAILS
      <img
        src={ drinkDetails.strDrinkThumb }
        alt="drink-delicius"
        data-testid="recipe-photo"
      />
      <h1 data-testid="recipe-title">{ drinkDetails.strDrink}</h1>
      <button type="button" data-testid="share-btn">Compartilhar</button>
      <button type="button" data-testid="favorite-btn">Favoritar</button>
      <p data-testid="recipe-category">
        {`${drinkDetails.strCategory} ${drinkDetails.strAlcoholic}`}
      </p>

      <DrinkDetailsIngredients />
      <p data-testid="instructions">{ drinkDetails.strInstructions }</p>
      <DrinkDetailsCards />
      <button type="button" data-testid="start-recipe-btn">Iniciar Receita</button>
    </div>
  );
}

DrinkDetails.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default DrinkDetails;
