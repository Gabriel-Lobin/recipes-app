import React from 'react';

function Login() {
  return (
    <div>
      <form>
        <label htmlFor="email-input">
          <input
            data-testid="email-input"
            type="text"
            name=""
            id="email-input"
          />
        </label>
        <label htmlFor="password-input">
          <input
            data-testid="password-input"
            type="text"
            name=""
            id="password-input"
          />
        </label>
        <button
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
