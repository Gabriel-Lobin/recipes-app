import React, { useContext, useEffect } from 'react';
import services from '../../Services';
import Context from '../../Context/Context';

function MealsBody() {
  const { getRandomMeal } = services;
  const { randomMeals, setRandomMeals } = useContext(Context);

  const getRandomMeals = async () => {
    await getRandomMeal()
      .then((data) => data.meals)
      .then((data) => {
        const foodArr = randomMeals.push(data);

        setRandomMeals(foodArr);
      });
  };

  useEffect(() => {
    for (let i = 0; i < 12; i += 1) {
      getRandomMeals();
    }
  }, []);

  useEffect(() => {
    console.log(randomMeals);
  }, [randomMeals]);

  return (
    <div>
      { if(randomMeals.map((crr) => crr.id) }
    </div>);
}

export default MealsBody;
