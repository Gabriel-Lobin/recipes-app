import React from 'react';
import Header from '../../Components/Header';
import MountTitle from '../../Context/customHooks/MountTitle';

function Profile() {
  MountTitle('Profile');
  return (
    <div>
      <Header />
      Perfil
    </div>
  );
}

export default Profile;
