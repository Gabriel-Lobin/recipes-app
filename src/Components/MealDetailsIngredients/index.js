import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import Context from '../../Context/Context';
import { MealsIngredients, MealsMeasure } from '../../utils/compare';
import func from '../../utils';

function MealDetailsIngredients({ ingredientsArray }) {
  const goTo = useHistory();
  const itemId = goTo.location.pathname.split('/');

  const { mealDetails, checkArray, setCheckArray } = useContext(Context);

  const createArrayIngredients = () => {
    for (let index = 0; index < MealsIngredients.length; index += 1) {
      const positionIngredient = MealsIngredients[index];
      const positionMeasure = MealsMeasure[index];
      const ingredientName = mealDetails[positionIngredient];
      const ingredientMeasure = mealDetails[positionMeasure];
      if (ingredientMeasure === null && ingredientName !== null) {
        ingredientsArray.push(ingredientName);
      } else if (ingredientName !== '' && ingredientName !== null) {
        ingredientsArray.push(`${ingredientName} ${ingredientMeasure}`);
      }
    }
  };

  if (Object.keys(mealDetails).length > 0) {
    createArrayIngredients();
  }

  const checkedArray = [];
  ingredientsArray.forEach((e, i) => {
    const checked = JSON.parse(localStorage.getItem(`${e}`))
      ? JSON.parse(localStorage.getItem(`${e}`)) : false;
    checkedArray.push(checked);
    if (checkArray.length < 1 && i + 1 === ingredientsArray.length) {
      setCheckArray([...checkedArray]);
    }
  });

  const block = {
    checkedArray, setCheckArray, itemId,
  };

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
                  {func.inputCheckerDrinks(ingredient, index, block)}
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
