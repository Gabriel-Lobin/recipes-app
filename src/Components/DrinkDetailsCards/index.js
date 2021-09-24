import React, { useContext } from 'react';
import Context from '../../Context/Context';

function DrinkDetailsCards() {
  const { drinkRecomendations } = useContext(Context);

  return (
    <>
      <h2>Recomended Meals</h2>
      {
        drinkRecomendations.map((meal, index) => {
          if (index < 6) {
            return (
              <div key={ index } data-testid={ `${index}-recomendation-card` }>
                <h4 data-testid={ `${index}-recomendation-title` }>
                  {meal.strMeal}
                </h4>
                <img
                  width="70px"
                  height="70px"
                  src={ meal.strMealThumb }
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

export default DrinkDetailsCards;
