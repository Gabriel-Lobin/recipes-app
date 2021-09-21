import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Provider from './Context/Provider';
import Routes from './Pages/Routes';

function App() {
  return (
    <Provider>
      <Routes />
    </Provider>
  );
}

export default App;
