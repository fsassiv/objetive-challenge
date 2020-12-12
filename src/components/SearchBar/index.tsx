import SearchIcon from '@assets/img/search.svg';
import React, { useState } from 'react';
import { SearchBarProps } from './types';

const SearchBar = (props: SearchBarProps) => {
  const { handleSubmit } = props;
  const [text, setText] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(text);
  };

  return (
    <div className="search-bar">
      <h4 className="search-bar__title">Nome do personagem</h4>
      <form onSubmit={onSubmit} className="search-bar__form">
        <input onChange={(e: React.SyntheticEvent<EventTarget>) => setText(e.target.value)} type="input" className="search-bar__input" placeholder="Search" />
        <SearchIcon onClick={() => handleSubmit(text)} className="search-bar__icon" />
      </form>
    </div>
  );
};

export default SearchBar;
