import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import Context from '../../Context/Context';
import { MealsIngredients, MealsMeasure } from '../../utils/compare';

function MealDetailsIngredients() {
  const goTo = useHistory();
  const { mealDetails } = useContext(Context);

  const ingredientsArray = [];

  const createArrayIngredients = () => {
    for (let index = 0; index < MealsIngredients.length; index += 1) {
      const positionIngredient = MealsIngredients[index];
      const positionMeasure = MealsMeasure[index];
      const ingredientName = mealDetails[positionIngredient];
      const ingredientMeasure = mealDetails[positionMeasure];
      if (ingredientName !== '' && ingredientName !== null) {
        ingredientsArray.push(`${ingredientName} ${ingredientMeasure}`);
      }
    }
  };

  if (Object.keys(mealDetails).length > 0) {
    createArrayIngredients();
  }

  return (
    <>
      <h2>Ingredients</h2>
      {
        goTo.location.pathname.includes('/in-progress')
          ? (
            <div className="checkbox-inprogress">
              {ingredientsArray.map((ingredient, index) => (
                <label
                  data-testid={ `${index}-ingredient-step` }
                  key={ index }
                  htmlFor={ ingredient }
                >
                  <input
                    type="checkbox"
                    name={ ingredient }
                    id={ ingredient }
                  />
                  {ingredient}
                </label>
              ))}
            </div>
          )
          : ingredientsArray.map((ingredient, index) => (
            <h6
              key={ index }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              {ingredient}

            </h6>
          ))
      }
    </>
  );
}

export default MealDetailsIngredients;
