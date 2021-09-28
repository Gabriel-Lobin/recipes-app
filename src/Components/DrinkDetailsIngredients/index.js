import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import Context from '../../Context/Context';
import { DrinksIngredients, DrinksMeasures } from '../../utils/compare';

function DrinkDetailsIngredients() {
  const goTo = useHistory();
  const { drinkDetails } = useContext(Context);

  const ingredientsArray2 = [];

  const createArrayIngredients = () => {
    for (let index = 0; index < DrinksIngredients.length; index += 1) {
      const positionIngredient = DrinksIngredients[index];
      const positionMeasure = DrinksMeasures[index];
      const ingredientName = drinkDetails[positionIngredient];
      const ingredientMeasure = drinkDetails[positionMeasure];
      if (ingredientName !== '' && ingredientName !== null) {
        ingredientsArray2.push(`${ingredientName} ${ingredientMeasure}`);
      }
    }
  };

  if (Object.keys(drinkDetails).length > 0) {
    createArrayIngredients();
  }

  return (
    <>
      <h2>Ingredients</h2>
      {
        goTo.location.pathname.includes('/in-progress')
          ? (
            <div className="checkbox-inprogress">
              {ingredientsArray2.map((ingredient, index) => (
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
          : ingredientsArray2.map((ingredient, index) => (
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

export default DrinkDetailsIngredients;
