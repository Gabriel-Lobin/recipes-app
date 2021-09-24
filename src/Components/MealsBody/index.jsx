import React, { useContext, useEffect } from 'react';
import func from '../../Services';
import Context from '../../Context/Context';
import globalConsts from '../../Global';

function MealsBody() {
  const { randomMeals, setRandomMeals } = useContext(Context);
  const { state, setState } = useContext(Context);

  useEffect(() => {
    const getRandomMeals = async () => {
      setState({
        ...state,
      });
      await func.getMeal()
        .then((data) => data.meals)
        .then((meals) => {
          const beTwelve = meals.reduce((acc, e, i) => {
            if (i < globalConsts.TWELVE) {
              acc.push(e);
            }
            return acc;
          }, []);
          setRandomMeals(beTwelve);
        });
    };
    if (randomMeals.length < 1) { getRandomMeals(); }
    console.log(state.mealCategories);
  }, [randomMeals, setRandomMeals, setState, state]);

  return (
    <div className="cards">
      <dir>
        {randomMeals.length === globalConsts.TWELVE
          && (
            <button
              type="button"
            >
              All
            </button>
          )}
        {state.mealCategories ? state.mealCategories.meals
          .slice(0, globalConsts.FIVE)
          .map(({ strCategory }, index) => (
            <button
              type="button"
              key={ index }
              data-testid={ `${strCategory}-category-filter` }
            >
              {strCategory}
            </button>
          ))
          : null}
      </dir>
      {randomMeals.length === globalConsts.TWELVE ? randomMeals.map((e, index) => (
        <div
          key={ index }
          data-testid={ `${index}-recipe-card` }
        >
          <img
            data-testid={ `${index}-card-img` }
            alt={ e.strMeal }
            key={ e.idMeal }
            src={ e.strMealThumb }
          />
          <p data-testid={ `${index}-card-name` }>{e.strMeal}</p>
        </div>
      ))
        : null}
    </div>
  );
}

export default MealsBody;
