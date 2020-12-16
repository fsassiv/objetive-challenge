import Header from '@components/Header';
import SearchBar from '@components/SearchBar';
import React from 'react';
import Table from './components/Table';

const App = () => {
  const handleSubmit = (text: String) => {
    console.log('Submit', text);
  };
  return (
    <>
      <Header />
      <div className="container">
        <h1 className="app__title">Busca de personagens</h1>
        <SearchBar handleSubmit={handleSubmit} />
        <Table />
      </div>
    </>
  );
};

export default App;
