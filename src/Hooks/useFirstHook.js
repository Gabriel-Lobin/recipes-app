import { useState, useEffect } from 'react';
import func from '../Services';
import variables from '../Global';

const useFirstHook = () => {
  const globalState = {
    shouldCallApi: true,
    whichApi: variables.drinkByName,
    lookingFor: 'soup',
    api: false,
  };
  const [state, setState] = useState(globalState);

  useEffect(() => {
    const apiFetch = async () => {
      setState({
        ...state,
        api: await func.fetchApi(state.whichApi, state.lookingFor),
        shouldCallApi: false,
      });
    };
    if (state.shouldCallApi) {
      apiFetch();
    }
  });

  return [state, setState];
};

export default useFirstHook;
