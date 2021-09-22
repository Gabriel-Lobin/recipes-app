import variable from '../Global';

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
  // console.clear();
  // console.log(target.value === '');
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
    // console.clear();
    // console.log('on ', filter);
    // console.log('on ', column, comparison, value);
    return {
      ...param,
      api: filter,
      columnSelector: removeColumn,
    };
  }
  // console.clear();
  // console.log('off ', column, comparison, value, param);
  return {
    ...param,
  };
};

const onChangeValues = (param, { target }) => {
  const { filters: { filterByName, filterByNumericValues: values } } = param;
  // console.clear();
  // console.log(target.value);
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

const fetchApi = async () => {
  const getApi = await fetch(variable.apiUrl);
  const { results } = await getApi.json();
  // console.log('I am fetchApi function: ', results);
  return results;
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
};

export default services;
