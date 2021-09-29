import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import func from '../../Services';
import Context from '../../Context/Context';
import GLOBAL from '../../Global';

function DrinksBody() {
  const { randomMeals, setRandomMeals } = useContext(Context);
  const { state } = useContext(Context);
  const [onOff, setOnOff] = useState([0, 0, 0, 0, 0, 0]);
  const goTo = useHistory();

  useEffect(() => {
    const getRandomDrinks = async () => {
      await func.getDrink()
        .then((data) => data.drinks)
        .then((meals) => {
          setRandomMeals(func.beTwelve(meals));
        });
    };
    if (randomMeals.length < 1) { getRandomDrinks(); }
  }, [randomMeals, setRandomMeals]);
  console.log(randomMeals);

  return (
    <div className="cards">
      <dir>
        {state.drinksCategories
          && (
            <button
              type="button"
              data-testid="All-category-filter"
              onClick={ async () => {
                await func.getDrink()
                  .then((data) => data.drinks)
                  .then((result) => {
                    setRandomMeals(func.beTwelve(result));
                  });
              } }
            >
              All
            </button>
          )}
        {state.drinksCategories ? state.drinksCategories.drinks
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
                    .drinksByCategory, strCategory, GLOBAL.drinks));
              }
                : (
                  async () => {
                    const newArray = onOff.slice();
                    newArray[index] = 0;
                    setOnOff(newArray);
                    await func.getDrink()
                      .then((data) => data.drinks)
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
          onClick={ () => goTo.push(`/bebidas/${e.idDrink}`) }
          key={ index }
          type="button"
          data-testid={ `${index}-recipe-card` }
        >
          <img
            data-testid={ `${index}-card-img` }
            alt={ e.strDrink }
            key={ e.idDrink }
            src={ e.strDrinkThumb }

          />
          <p data-testid={ `${index}-card-name` }>{e.strDrink}</p>
        </button>
      ))
        : (
          <div className="spinner-grow text-secondary" role="status">
            <span className="sr-only">Loading...</span>
          </div>)}
    </div>
  );
}

export default DrinksBody;
