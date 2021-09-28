import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import Context from '../../Context/Context';

const ARRAY_NUMBER = 32;
const START_ARRAY_NUMBER = 21; // era 17
const START_ARRAY_MEASURE = 15;

function DrinkDetailsIngredients({ ingredientsArray }) {
  const goTo = useHistory();

  const { drinkDetails } = useContext(Context);

  const ingredients = Object.values(drinkDetails);

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
            <p
              key={ index }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              {ingredient}

            </p>
          ))
      }

    </>
  );
}

DrinkDetailsIngredients.propTypes = {
  ingredientsArray: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DrinkDetailsIngredients;
