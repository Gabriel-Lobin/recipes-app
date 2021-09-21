import { useState, useEffect } from 'react';
import func from '../Services';

const useFirstHook = () => {
  const globalState = {};
  const [state, setState] = useState(globalState);

  useEffect(() => {
    const apiFetch = async () => {
      setState({
        ...state,
        api: await func.fetchApi(),
        fullApi: await func.fetchApi(),
      });
    };
    if (!state.api || state.api.length < 1) {
      apiFetch();
    }
  });

  return [state, setState];
};

export default useFirstHook;
