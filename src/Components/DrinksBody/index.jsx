import React, { useContext, useEffect } from 'react';
import services from '../../Services';
import Context from '../../Context/Context';
import globalConsts from '../../Global';

function DrinksBody() {
  const { getRandomDrink } = services;
  const { randomMeals, setRandomMeals } = useContext(Context);

  useEffect(() => {
    const getRandomDrinks = async () => {
      await getRandomDrink()
        .then((data) => data.drinks)
        .then((meals) => {
          const beTwelve = meals.reduce((acc, e, i) => {
            if (i < '123456'.length * 2) {
              acc.push(e);
            }
            return acc;
          }, []);
          setRandomMeals(beTwelve);
        });
    };
    if (randomMeals.length < 1) { getRandomDrinks(); }
    console.log(randomMeals);
  }, [randomMeals, setRandomMeals, getRandomDrink]);

  return (
    <div className="cards">
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
