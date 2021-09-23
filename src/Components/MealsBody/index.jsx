import React, { useContext, useEffect } from 'react';
import services from '../../Services';
import Context from '../../Context/Context';
import globalConsts from '../../Global';

function MealsBody() {
  const { getRandomMeal } = services;
  const { randomMeals, setRandomMeals } = useContext(Context);

  const getRandomMeals = async () => {
    await getRandomMeal()
      .then((data) => data.meals)
      .then((meals) => {
        const beTwelve = meals.reduce((acc, e, i) => {
          if (i < '123456'.length * 2) {
            acc.push(e);
          }
          return acc;
        }, []);
        console.log(beTwelve);
        setRandomMeals(beTwelve);
      });
  };

  useEffect(() => {
    getRandomMeals();
  }, []);

  useEffect(() => {
    console.log(randomMeals);
  }, [randomMeals]);

  return (
    <div className="cards">
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
