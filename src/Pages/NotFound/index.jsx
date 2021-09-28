import React from 'react';
import Footer from '../../Components/Footer/index';
import Header from '../../Components/Header';
import MountTitle from '../../Context/customHooks/MountTitle';

function NotFound() {
  MountTitle('NotFound');
  return (
    <div>
      <Header />
      <h1>Not Found</h1>
      <Footer />
    </div>
  );
}

export default NotFound;
