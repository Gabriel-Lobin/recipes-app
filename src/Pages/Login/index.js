import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import Context from '../../Context/Context';
import './styles.css';
import rockGlass from '../../images/rockGlass.svg';

const MIN_LENGTH = 6;

function Login({ history }) {
  const { user, setUser } = useContext(Context);

  const handleChange = ({ target: { name, value } }) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  const validate = () => {
    const { email, password } = user;
    if (email.includes('@') && email.includes('.com') && password.length > MIN_LENGTH) {
      return false;
    }
    return true;
  };

  const startSetups = () => {
    const Token = 1;
    const email = { email: user.email };
    localStorage.setItem('mealsToken', Token);
    localStorage.setItem('cocktailsToken', Token);
    localStorage.setItem('user', JSON.stringify(email));
    history.push('/comidas');
  };

  return (
    <div>
      <div className="meals">
        <span className="logo">TRYBE</span>
        <object
          className="rocksGlass"
          type="image/svg+xml"
          data={ rockGlass }
        >
          Glass
        </object>
      </div>
      <form>
        <label htmlFor="email-input">
          <input
            value={ user.email }
            onChange={ (e) => handleChange(e) }
            data-testid="email-input"
            type="text"
            name="email"
            id="email-input"
          />
        </label>
        <label htmlFor="password-input">
          <input
            value={ user.password }
            onChange={ (e) => handleChange(e) }
            data-testid="password-input"
            type="password"
            name="password"
            id="password-input"
          />
        </label>
        <button
          onClick={ startSetups }
          disabled={ validate() }
          data-testid="login-submit-btn"
          type="button"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
