import React, { useEffect } from 'react';
import Footer from '../../Components/Footer/index';

function MakingMeals() {
  const meal = [];
  useEffect(() => {
    async function fetchmeal() {
      await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52771')
        .then((result) => result.json())
        .then(({ meals }) => meal.push(meals));
    }
    fetchmeal();
  }, []);

  return (
    <div key={ meal.idMeal }>
      <button
        type="button"
        data-testid="share-btn"
      >
        x
      </button>
      <button
        type="button"
        data-testid="favorite-btn"
      >
        S2
      </button>
      <h1 data-testid="recipe-title">{ meal.strMeal }</h1>
      <img data-testid="recipe-photo" src={ meal.strMealThumb } alt="food" />
      <p data-testid="recipe-category">{meal.strCategory}</p>
      <p data-testid="instructions">{meal.strInstructions}</p>
      <p data-testid={ `${meal.idMeal}-ingredient-step` }>provisório</p>
      <button
        data-testid="finish-recipe-btn"
        type="button"
      >
        terminado
      </button>
      <Footer />
    </div>
  );
}

export default MakingMeals;
