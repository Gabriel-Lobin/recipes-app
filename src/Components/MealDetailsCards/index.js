import React, { useContext } from 'react';
import Context from '../../Context/Context';

function MealDetailsCards() {
  const { mealRecomendations } = useContext(Context);

  return (
    <>
      <h2>Recomended Drinks</h2>
      {
        mealRecomendations.map((drink, index) => (
          <div key={ index }>
            <h4 data-testid={ `${index}-recomendation-card` }>
              {drink.strDrink}
            </h4>
            <img
              width="70px"
              height="70px"
              src={ drink.strDrinkThumb }
              alt="meal-delicius"
            />
          </div>
        ))
      }
    </>
  );
}

export default MealDetailsCards;
