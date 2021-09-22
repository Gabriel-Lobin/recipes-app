import React from 'react';
import Footer from '../../Components/Footer/index';
import Header from '../../Components/Header';
import MountTitle from '../../Context/customHooks/MountTitle';

function Profile() {
  MountTitle('Profile');
  return (
    <div>
      <Header />
      Perfil
      <Footer />
    </div>
  );
}

export default Profile;
