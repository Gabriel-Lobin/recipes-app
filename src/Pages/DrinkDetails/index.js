import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import DrinkDetailsCards from '../../Components/DrinkDetailsCards';
import DrinkDetailsIngredients from '../../Components/DrinkDetailsIngredients';
import Context from '../../Context/Context';
import MountDrinkDetails from '../../Context/customHooks/MountDrinkDetails';
import ShareImg from '../../images/whiteHeartIcon.svg';
import FavoriteImg from '../../images/shareIcon.svg';
import './style.css';

function DrinkDetails({ match: { params: { id } } }) {
  const { drinkDetails } = useContext(Context);
  const goTo = useHistory();

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

      <p data-testid="recipe-category">
        {`${drinkDetails.strCategory} ${drinkDetails.strAlcoholic}`}
      </p>

      <DrinkDetailsIngredients />
      <p data-testid="instructions">{ drinkDetails.strInstructions }</p>
      <DrinkDetailsCards />
      <button
        type="button"
        className="btn btn-danger"
        id="start-recipe"
        data-testid="start-recipe-btn"
        onClick={ () => goTo.push(`/bebidas/${id}/in-progress`) }
      >
        Iniciar Receita
      </button>
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
