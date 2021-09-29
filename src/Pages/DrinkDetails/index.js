import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import DrinkDetailsCards from '../../Components/DrinkDetailsCards';
import DrinkDetailsIngredients from '../../Components/DrinkDetailsIngredients';
import Context from '../../Context/Context';
import MountDrinkDetails from '../../Context/customHooks/MountDrinkDetails';
import FavAndShareBtn from '../../Components/FavoriteAndShareBtn/FavoriteAndShareBtn';
import './style.css';

function DrinkDetails({ match: { params: { id } }, location }) {
  const { drinkDetails, continueRecipe } = useContext(Context);

  const doneRecipe = localStorage.getItem('doneRecipes');

  const ingredientsArray = [];

  const goTo = useHistory();

  const drinkToLocalStorage = {
    id: drinkDetails.idDrink,
    type: 'bebida',
    area: '',
    category: drinkDetails.strCategory,
    alcoholicOrNot: drinkDetails.strAlcoholic,
    name: drinkDetails.strDrink,
    image: drinkDetails.strDrinkThumb,
  };

  const cocktails = {
    [drinkDetails.idDrink]: [],
  };

  MountDrinkDetails(id);

  return (
    <div className="meal-body">
      <img
        src={ drinkDetails.strDrinkThumb }
        alt="drink-delicius"
        data-testid="recipe-photo"
      />
      <h1 data-testid="recipe-title">{ drinkDetails.strDrink}</h1>
      <FavAndShareBtn
        ToLocalStorage={ drinkToLocalStorage }
        Details={ drinkDetails }
        location={ location }
      />
      <p data-testid="recipe-category">
        {`${drinkDetails.strCategory} ${drinkDetails.strAlcoholic}`}
      </p>

      <DrinkDetailsIngredients ingredientsArray={ ingredientsArray } />
      <p data-testid="instructions">{ drinkDetails.strInstructions }</p>
      <DrinkDetailsCards />
      {
        !doneRecipe
        && (
          <button
            type="button"
            className="btn btn-danger"
            id="start-recipe"
            data-testid="start-recipe-btn"
            onClick={ () => {
              goTo.push(`/bebidas/${id}/in-progress`);
              const getInProgressStorage = JSON
                .parse(localStorage.getItem('inProgressRecipes'));
              if (!getInProgressStorage.cocktails[cocktails]) {
                localStorage
                  .setItem('inProgressRecipes', JSON
                    .stringify({
                      ...getInProgressStorage,
                      cocktails: {
                        ...getInProgressStorage.cocktails,
                        ...cocktails,
                      },
                    }));
              }
            } }
          >
            {continueRecipe ? 'Continuar Receita' : 'Iniciar Receita'}
          </button>
        )
      }
    </div>
  );
}

DrinkDetails.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default DrinkDetails;
