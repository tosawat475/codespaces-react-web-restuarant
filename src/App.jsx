import React, { useState } from 'react';
import HomePage from './HomePage';
import Main from './Main';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('main');

  const goToHomePage = () => {
    setCurrentPage('homepage');
  };

  return (
    <div className="App">
      {currentPage === 'main' ? <Main goToHomePage={goToHomePage} /> : <HomePage />}
    </div>
  );
};

export default App;
