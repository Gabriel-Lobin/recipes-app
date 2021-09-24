import React, { useContext, useEffect } from 'react';
import func from '../../Services';
import Context from '../../Context/Context';
import globalConsts from '../../Global';

function DrinksBody() {
  const { randomMeals, setRandomMeals } = useContext(Context);
  const { state, setState } = useContext(Context);

  useEffect(() => {
    const getRandomDrinks = async () => {
      setState({
        ...state,
        mealCategories: await func.getMealCategory(globalConsts.mealCategory),
        drinksCategories: await func.getDrinkCategory(globalConsts.drinkCategory),
      });
      await func.getDrink()
        .then((data) => data.drinks)
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
    if (randomMeals.length < 1) { getRandomDrinks(); }
    console.log(state.drinksCategories);
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
        {randomMeals.length === globalConsts.TWELVE ? state.drinksCategories.drinks
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
            alt={ e.strDrink }
            key={ e.idDrink }
            src={ e.strDrinkThumb }
          />
          <p data-testid={ `${index}-card-name` }>{e.strDrink}</p>
        </div>
      ))
        : null}
    </div>
  );
}

export default DrinksBody;
