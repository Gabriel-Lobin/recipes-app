const byKey = (param, param2, param3) => ({ ...param, [param2]: param3 });

const toUpdateApi = (param, param2, param3) => ({
  ...param,
  whichApi: param2,
  lookingFor: param3,
  shouldCallApi: true,
});

const byTargetValue = (param, param2, param3) => {
  const [[a]] = Object.entries(param).filter(([, e]) => e === param2);
  return {
    ...param,
    [a]: param3.target.value,
  };
};

const fetchApi = async (param, param2) => {
  const getApi = await fetch(`${param}${param2}`);
  const results = await getApi.json();
  console.log('I am fetchApi function: ', results);
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
  byKey,
  byTargetValue,
  fetchApi,
  profileLocalStorage,
  toUpdateApi,
};

export default services;
