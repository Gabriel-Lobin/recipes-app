import React, { useContext } from 'react';
import { useHistory } from 'react-router';
// import Footer from '../../Components/Footer/index';
import MealDetailsIngredients from '../../Components/MealDetailsIngredients';
import Context from '../../Context/Context';
import ShareImg from '../../images/whiteHeartIcon.svg';
import FavoriteImg from '../../images/shareIcon.svg';
import './style.css';
import MountMealDetails from '../../Context/customHooks/MountMealDetails';

function MakingMeals() {
  const { mealDetails } = useContext(Context);
  const { location: { pathname } } = useHistory();
  MountMealDetails(
    pathname.split('').filter((number) => (Number(number) || number === 0)).join(''),
  );
  return (
    <div key={ mealDetails.idMeal }>
      <img data-testid="recipe-photo" src={ mealDetails.strMealThumb } alt="food" />
      <h1 data-testid="recipe-title">{ mealDetails.strMeal }</h1>
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
      <p data-testid="recipe-category">{mealDetails.strCategory}</p>
      <MealDetailsIngredients />
      <p data-testid="instructions">{mealDetails.strInstructions}</p>
      <button
        data-testid="finish-recipe-btn"
        type="button"
      >
        terminado
      </button>
      {/* <Footer /> */}
    </div>
  );
}

export default MakingMeals;
