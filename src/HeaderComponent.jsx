import React, { useEffect } from 'react';

const HeaderComponent = () => { 
  useEffect(() => {
    const header = document.querySelector('.header');

    const handleScroll = () => {
      if (window.scrollY > 80) {
        header.classList.add('header--visible');
      } else {
        header.classList.remove('header--visible');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
  <header className="header">
    <div className="wrapper header__wrapper">
      <a className="header__logo" href="#">
        <svg viewBox="0 0 192 32" preserveAspectRatio="xMinYMid">
          <use xlinkHref="#logo"></use>
        </svg>
      </a>
      <nav className="header__nav nav">
        <a className="header__link nav__link" href="#mainBlock">О нашем КБ</a>
        <a className="header__link nav__link" href="#projectBlock2">Проект «Привет-82»</a>
        <a className="header__link nav__link" href="#projectBlock1">Проект «Привет-120»</a>
        <a className="header__link nav__link" href="#roadmapBlock">Дорожная карта</a>
        <a className="header__link nav__link" href="#donationsBlock">Поддержать нас</a>
        <a className="header__link nav__link" href="#contactsBlock">Контакты</a>
      </nav>
      <div className="header__social">
        <a className="social social--vk" href="https://vk.com/kb_oko" target="_blank" rel="noopener noreferrer">
          https://vk.com/kb_oko
        </a>
        <a className="social social--tg" href="https://t.me/kb_oko" target="_blank" rel="noopener noreferrer">
          https://t.me/kb_oko
        </a>
      </div>
    </div>
  </header>
)};

export default HeaderComponent;