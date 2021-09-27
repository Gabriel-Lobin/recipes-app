// import { useEffect, useState } from 'react';

// const RANDOM_MEAL = 'https://www.themealdb.com/api/json/v1/1/random.php';

// function useEplore() {
//   const [meal, setMeal] = useState([]);
//   useEffect(() => {
//     async function fetMeal() {
//       const results = await fetch(RANDOM_MEAL);
//       const getMeal = await results.json();
//       setMeal([...getMeal.meals]);
//     }

//     fetMeal();
//   }, []);
// }

// export default useEplore;
