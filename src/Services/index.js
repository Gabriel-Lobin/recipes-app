import variable from '../Global';

const fetchApi = async () => {
  const getApi = await fetch(variable.apiUrl);
  const { results } = await getApi.json();
  return results;
};

const getRandomMeal = async () => {
  const randomMealAPI = 'https://www.themealdb.com/api/json/v1/1/random.php';
  const getApi = await fetch(randomMealAPI);
  const results = await getApi.json();
  return results;
};

const byKey = (param, param2, param3) => ({ ...param, [param2]: param3 });

const byTargetValue = (param, param2, param3) => {
  const [[a]] = Object.entries(param).filter(([, e]) => e === param2);
  return {
    ...param,
    [a]: param3.target.value,
  };
};

const eraseFilters = (param) => ({
  ...param,
  api: param.fullApi,
});

const filterByPlanetName = (param, param2, { target }) => {
  const [[a]] = Object.entries(param).filter(([, e]) => e === param2);
  const filter = param2.filter(({ name }) => name.toLowerCase()
    .includes(target.value.toLowerCase()));
  return {
    ...param,
    [a]: target.value === '' ? null : filter,
    filters:
    {
      filterByName: { name: target.value === '' ? null : target.value },
      ...param.filters,
    },
  };
};

const filterByNumericValues = (param) => {
  const { filterByNumericValues: [{ column, comparison, value }] } = param.filters;
  const removeColumn = param.columnSelector.reduce((acc, e) => {
    if (e !== column) {
      acc.push(e);
    }
    return acc;
  }, []);
  const comparing = (element, toCompare, thisValue) => {
    switch (toCompare) {
    case 'maior que':
      return Number(element) > thisValue;
    case 'menor que':
      return Number(element) < thisValue;
    case 'igual a':
      return element === thisValue;
    default:
      return null;
    }
  };
  if (column && comparison && value) {
    const filter = param.fullApi
      .filter((e) => comparing(e[column], comparison, value));
    return {
      ...param,
      api: filter,
      columnSelector: removeColumn,
    };
  }
  return {
    ...param,
  };
};

const onChangeValues = (param, { target }) => {
  const { filters: { filterByName, filterByNumericValues: values } } = param;
  return {
    ...param,
    filters:
    {
      filterByName: {
        name: filterByName.name,
      },
      filterByNumericValues: [
        {
          ...values[0],
          [target.name]: target.value,
        },
      ],
    },
  };
};

const profileLocalStorage = (param) => {
  if (param === 'make') {
    localStorage.setItem('user', '{ "email": "email@mail.com" }');
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    localStorage.setItem('doneRecipes', '[]');
    localStorage.setItem('favoriteRecipes', '[]');
    localStorage.setItem('inProgressRecipes', '{}');
  }
  if (param === 'erase') {
    localStorage.removeItem('user');
    localStorage.removeItem('mealsToken');
    localStorage.removeItem('cocktailsToken');
    localStorage.removeItem('doneRecipes');
    localStorage.removeItem('favoriteRecipes');
    localStorage.removeItem('inProgressRecipes');
  }
};

const services = {
  eraseFilters,
  byKey,
  byTargetValue,
  fetchApi,
  filterByPlanetName,
  filterByNumericValues,
  onChangeValues,
  profileLocalStorage,
  getRandomMeal,

};

export default services;
