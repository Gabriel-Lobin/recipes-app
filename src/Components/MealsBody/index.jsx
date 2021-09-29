import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import func from '../../Services';
import Context from '../../Context/Context';
import GLOBAL from '../../Global';

function MealsBody() {
  const { randomMeals, setRandomMeals } = useContext(Context);
  const { state } = useContext(Context);
  const [onOff, setOnOff] = useState([0, 0, 0, 0, 0, 0]);

  const goTo = useHistory();
  useEffect(() => {
    const getRandomMeals = async () => {
      await func.getMeal()
        .then((data) => data.meals)
        .then((meals) => {
          setRandomMeals(func.beTwelve(meals));
        });
    };
    if (randomMeals.length < 1) { getRandomMeals(); }
  }, [randomMeals, setRandomMeals]);

  return (
    <div className="cards">
      <dir>
        {state.mealCategories
          && (
            <button
              type="button"
              data-testid="All-category-filter"
              onClick={ async () => {
                await func.getMeal()
                  .then((data) => data.meals)
                  .then((result) => {
                    setRandomMeals(func.beTwelve(result));
                  });
              } }
            >
              All
            </button>
          )}
        {state.mealCategories ? state.mealCategories.meals
          .slice(0, GLOBAL.FIVE)
          .map(({ strCategory }, index) => (
            <button
              type="button"
              key={ index }
              data-testid={ `${strCategory}-category-filter` }
              onClick={ onOff[index] === 0 ? async () => {
                const newArray = onOff.slice();
                newArray[index] = 1;
                setOnOff(newArray);
                setRandomMeals(await func
                  .filterCategory(GLOBAL
                    .mealsByCategory, strCategory, GLOBAL.meals));
              }
                : (
                  async () => {
                    const newArray = onOff.slice();
                    newArray[index] = 0;
                    setOnOff(newArray);
                    await func.getMeal()
                      .then((data) => data.meals)
                      .then((meals) => {
                        setRandomMeals(func.beTwelve(meals));
                      });
                  }) }
            >
              {strCategory}
            </button>
          ))
          : (
            <div className="spinner-grow text-secondary" role="status">
              <span className="sr-only">Loading...</span>
            </div>)}
      </dir>
      {randomMeals.length ? randomMeals.map((e, index) => (
        <button
          className="button-with-image"
          onClick={ () => goTo.push(`/comidas/${e.idMeal}`) }
          key={ index }
          type="button"
          data-testid={ `${index}-recipe-card` }
        >
          <img
            data-testid={ `${index}-card-img` }
            alt={ e.strMeal }
            key={ e.idMeal }
            src={ e.strMealThumb }
          />
          <p data-testid={ `${index}-card-name` }>{e.strMeal}</p>
        </button>
      ))
        : (
          <div className="spinner-grow text-secondary" role="status">
            <span className="sr-only">Loading...</span>
          </div>)}
    </div>
  );
}

export default MealsBody;
