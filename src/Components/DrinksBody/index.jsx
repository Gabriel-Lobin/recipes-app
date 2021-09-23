import React, { useContext, useEffect } from 'react';
import services from '../../Services';
import Context from '../../Context/Context';
import globalConsts from '../../Global';

function DrinksBody() {
  const { getRandomDrink } = services;
  const { randomMeals, setRandomMeals } = useContext(Context);

  const getRandomDrinks = async () => {
    console.log('oi');
    await getRandomDrink()
      .then((data) => data.drinks)
      .then((meals) => {
        setRandomMeals((prevState) => [...prevState, meals]);
      });
  };

  useEffect(() => {
    for (let i = 0; i < globalConsts.TWELVE; i += 1) {
      getRandomDrinks();
    }
  }, []);

  useEffect(() => {
    console.log(randomMeals);
  }, [randomMeals]);

  return (
    <div className="cards">
      {randomMeals.length === globalConsts.TWELVE ? randomMeals.map(([e], index) => (
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
