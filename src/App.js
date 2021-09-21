import React from 'react';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Pages/Routes';
import Provider from './Context/Provider';

function App() {
  return (
    <Provider>
      <Routes />
    </Provider>
  );
}

export default App;
