import React, { useContext } from 'react';
import Context from '../../Context/Context';

const ARRAY_NUMBER = 29;
const START_ARRAY_NUMBER = 9;
const START_ARRAY_MEASURE = 20;

function MealDetailsIngredients() {
  const { mealDetails } = useContext(Context);
  // const ingredients = [mealDetails];
  // console.log(ingredients);
  const ingredients = Object.values(mealDetails);
  const ingredientsArray = [];
  // console.log(ingredientsArray);
  const createArrayIngredients = () => {
    for (let index = START_ARRAY_NUMBER; index < ARRAY_NUMBER; index += 1) {
      const position = index + START_ARRAY_MEASURE;
      const ingredientName = ingredients[index];
      const ingredientMeasure = ingredients[position];

      if (ingredientName !== '' && ingredientName !== null) {
        ingredientsArray.push(`${ingredientName} ${ingredientMeasure}`);
      }
    }
  };

  function callIngredientsArray() {
    if (ingredients.length > 0) {
      createArrayIngredients();
    }
  }
  callIngredientsArray();

  return (
    <>
      <h2>Ingredients</h2>

      {
        ingredientsArray.map((ingredient, index) => (
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
