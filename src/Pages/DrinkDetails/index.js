import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import DrinkDetailsCards from '../../Components/DrinkDetailsCards';
import DrinkDetailsIngredients from '../../Components/DrinkDetailsIngredients';
import Context from '../../Context/Context';
import MountDrinkDetails from '../../Context/customHooks/MountDrinkDetails';
import NotFavoriteImg from '../../images/whiteHeartIcon.svg';
import FavoriteImg from '../../images/blackHeartIcon.svg';
import ShareImg from '../../images/shareIcon.svg';
import './style.css';

const copy = require('clipboard-copy');

function DrinkDetails({ match: { params: { id } }, location: { pathname } }) {
  const { drinkDetails, favoriteIcon,
    setFavoriteIcon, continueRecipe } = useContext(Context);

  const ingredientsArray = [];

  // load para aparecer "Link Copiado!"
  const [load, setLoad] = useState(false);
  // const LOAD_TIMER = 1800;
  const doneRecipe = localStorage.getItem('doneRecipes');
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
    [drinkDetails.idDrink]: ingredientsArray,
  };
  console.log(doneRecipe);
  MountDrinkDetails(id);
  return (
    <div className="meal-body">
      <img
        src={ drinkDetails.strDrinkThumb }
        alt="drink-delicius"
        data-testid="recipe-photo"
      />
      <h1 data-testid="recipe-title">{ drinkDetails.strDrink}</h1>

      <button
        type="button"
        data-testid="favorite-btn"
        src={ favoriteIcon ? FavoriteImg : NotFavoriteImg }
        onClick={ () => {
          setFavoriteIcon(!favoriteIcon);
          const getFavoriteStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));

          if (getFavoriteStorage !== null) {
            const getDrink = getFavoriteStorage
              .some((drink) => drink.id === drinkDetails.idDrink);

            if (getDrink === false) {
              localStorage
                .setItem('favoriteRecipes', JSON
                  .stringify([...getFavoriteStorage, drinkToLocalStorage]));
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
              localStorage
                .setItem('inProgressRecipes', JSON
                  .stringify({ ...getInProgressStorage, cocktails }));
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
