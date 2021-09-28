import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import Context from '../../Context/Context';

const ARRAY_NUMBER = 29;
const START_ARRAY_NUMBER = 9;
const START_ARRAY_MEASURE = 20;

function MealDetailsIngredients({ ingredientsArray }) {
  const goTo = useHistory();

  const { mealDetails } = useContext(Context);

  const ingredients = Object.values(mealDetails);

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
        goTo.location.pathname.includes('/in-progress')
          ? (
            <div className="checkbox-inprogress">
              {ingredientsArray.map((ingredient, index) => (
                <label
                  data-testid={ `${index}-ingredient-step` }
                  key={ index }
                  htmlFor={ ingredients }
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

MealDetailsIngredients.propTypes = {
  ingredientsArray: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MealDetailsIngredients;
