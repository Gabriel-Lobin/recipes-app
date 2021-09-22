import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Context from './Context';
import useFirstHook from '../Hooks/useFirstHook';

function Provider({ children }) {
  const [state, setState] = useFirstHook();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [title, setTitle] = useState('');

  const context = {
    state,
    setState,
    user,
    setUser,
    title,
    setTitle,
  };

  return (
    <main>
      <Context.Provider value={ context }>
        {children}
      </Context.Provider>
    </main>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
