import PropTypes from 'prop-types';
import React from 'react';
import Context from './Context';
import useFirstHook from '../Hooks/useFirstHook';

function Provider({ children }) {
  const [state, setState] = useFirstHook();

  return (
    <main>
      <Context.Provider value={ { state, setState } }>
        {children}
      </Context.Provider>
    </main>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
