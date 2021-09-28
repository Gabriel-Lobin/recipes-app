import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../../Components/Footer/index';
import Header from '../../Components/Header';
import MountTitle from '../../Context/customHooks/MountTitle';
import './profile.css';
import functions from '../../Services';
import Context from '../../Context/Context';

function Profile() {
  const { user: { email } } = useContext(Context);
  const goTo = useHistory();
  functions.profileLocalStorage('make');
  MountTitle('Profile');
  return (
    <div>
      <div className="profile-header">
        <Header />
      </div>
      <div className="profile-body">
        <h2 data-testid="profile-email">
          {email || 'email@mail.com'}
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
