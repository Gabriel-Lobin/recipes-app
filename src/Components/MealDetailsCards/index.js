import React, { useContext } from 'react';
import Context from '../../Context/Context';

function MealDetailsCards() {
  const { mealRecomendations } = useContext(Context);
  const MAX_LENGTH = 6;

  return (
    <>
      <h2>Recomended Drinks</h2>
      {
        mealRecomendations.map((drink, index) => {
          if (index < MAX_LENGTH) {
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
