import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RANDOM_MEAL = 'www.themealdb.com/api/json/v1/1/random.php';

function Comidas() {
  const [meal, setMeal] = useState([]);
  useEffect(() => {
    async function fetMeal() {
      const results = await fetch(RANDOM_MEAL);
      const getMeal = results.json();
      setMeal(getMeal);
      // console.log(`asdas${results}`);
    }
    // console.log(comida);
    fetMeal();
  }, []);
  return (
    <div>
      <Link to="/explorar/comidas/ingredientes">
        <button type="button" data-testid="explore-by-ingredient">
          Por Ingredientes
        </button>
      </Link>
      <Link to="/explorar/comidas/area">
        <button type="button" data-testid="explore-by-area">
          Por Local de Origem
        </button>
      </Link>
      <Link to="detalhes/comida">
        <button type="button" data-testid="explore-surprise">
          Me Surpreenda!
        </button>
      </Link>
    </div>
  );
}

export default Comidas;
