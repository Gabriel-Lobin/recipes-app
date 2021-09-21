import React, { useContext } from 'react';
import Context from '../../Context/Context';

const MIN_LENGTH = 6;

function Login() {
  const { user, setUser } = useContext(Context);

  const handleChange = ({ target: { name, value } }) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  //   function validateEmail(email) {
  //     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //     return re.test(String(email).toLowerCase());
  //   }

  const validate = () => {
    const { email, password } = user;
    if (email.includes('@') && email.includes('.com') && password.length > MIN_LENGTH) {
      return false;
    }
    return true;
  };

  return (
    <div>
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
            type="text"
            name="password"
            id="password-input"
          />
        </label>
        <button
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

export default Login;
