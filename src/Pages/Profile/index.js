import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../../Components/Footer/index';
import Header from '../../Components/Header';
import './profile.css';
import functions from '../../Services';

function Profile() {
  const goTo = useHistory();
  functions.profileLocalStorage('make');

  return (
    <div>
      <div className="profile-header">
        <Header h1="Profile" />
      </div>
      <div className="profile-body">
        <h2 data-testid="profile-email">
          email@mail.com
        </h2>

        <button
          type="button"
          data-testid="profile-done-btn"
          onClick={ () => goTo.push('/receitas-feitas') }
        >
          Receitas Feitas
        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ () => goTo.push('/receitas-favoritas') }
        >
          Receitas Favoritas
        </button>
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ () => {
            functions.profileLocalStorage('erase');
            goTo.push('/');
          } }
        >
          Sair
        </button>

      </div>
      <Footer />
    </div>
  );
}

export default Profile;
