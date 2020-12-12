import React from 'react';

const Header = () => (
  <header className="header">
    <img className="header__logo" src="/src/assets/img/objetive-logo.png" alt="Objetive-logo" />
    <div className="header__content">
      <div className="header__info">
        <p className="header__text is-bold">Flávio Andrade</p>
        <p className="header__text">Teste de Front-end</p>
      </div>
      <a className="header__btn">CB</a>
    </div>
  </header>
);

export default Header;
