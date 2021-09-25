import React, { useContext } from 'react';
import Context from '../../Context/Context';

const MAX_MEALS = 6;
function MealDetailsCards() {
  const { mealRecomendations } = useContext(Context);

  return (
    <>
      <h2>Recomended Drinks</h2>
      {
        mealRecomendations.map((drink, index) => {
          if (index < MAX_MEALS) {
            return (
              <div key={ index } data-testid={ `${index}-recomendation-card` }>
                <h4 data-testid={ `${index}-recomendation-title` }>
                  {drink.strDrink}
                </h4>
                <img
                  width="70px"
                  height="70px"
                  src={ drink.strDrinkThumb }
                  alt="meal-delicius"
                />
              </div>
            );
          } return false;
        })
      }
    </>
  );
}

export default MealDetailsCards;
