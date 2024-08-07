import React from 'react';

const MobileNavComponent = () => (
  <div className="mobile mobile--hidden">
    <div className="mobile__wrapper">
      <div className="mobile__nav">
        <a className="mobile__link nav__link" href="#mainBlock">О нашем КБ</a>
        <a className="mobile__link nav__link" href="#projectsBlock2">Проект «Привет-82»</a>
        <a className="mobile__link nav__link" href="#projectsBlock1">Проект «Привет-120»</a>
        <a className="mobile__link nav__link" href="#roadmapBlock">Дорожная карта</a>
        <a className="mobile__link nav__link" href="#donationsBlock">Поддержать нас</a>
        <a className="mobile__link nav__link" href="#contactsBlock">Контакты</a>
      </div>
    </div>
  </div>
);

export default MobileNavComponent;