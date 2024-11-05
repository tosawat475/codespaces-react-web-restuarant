import React, { useState } from 'react';
import HomePage from './HomePage';
import Main from './Main';
import Header from './Header';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('main');

  const goToHomePage = () => {
    setCurrentPage('homepage');
  };

  const backmain = () => {
    setCurrentPage('main');
  }

  return (
    <div className="App">
      {currentPage === 'main' ? (
        <Main goToHomePage={goToHomePage} />
      ) : (
        <HomePage backmain={backmain} />
      )}
    </div>
  );
};

export default App;
