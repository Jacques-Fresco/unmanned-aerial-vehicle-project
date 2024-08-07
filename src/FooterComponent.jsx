import React from 'react';

const FooterComponent = () => (
  <footer className="footer" id="contactsBlock">
    <div className="footer__wrapper wrapper">
      <div className="footer__contacts column column--3x2 text">
        <p className="big">С &nbsp;нами можно связаться любым удобным для Вас способом, но &nbsp;лучше писать нам на &nbsp;почту</p>
        <p className="big">
          <a href="mailto:oko-kb@yandex.ru">oko-kb@yandex.ru</a>
        </p>
        <p>&nbsp;</p>
        <p>
          <a className="social social--big social--vk" href="https://vk.com/kb_oko" target="_blank" rel="noopener noreferrer">https://vk.com/kb_oko</a>
          <a className="social social--big social--tg" href="https://t.me/kb_oko" target="_blank" rel="noopener noreferrer">https://t.me/kb_oko</a>
        </p>
      </div>
      <a className="footer__logo" href="#mainBlock">
        <svg viewBox="0 0 192 32" preserveAspectRatio="xMidYMid">
          <use xlinkHref="#logo--footer"></use>
        </svg>
      </a>
      <div className="footer__copy">&copy;&nbsp;Конструкторское бюро «ОКО», 2022</div>
    </div>
  </footer>
);

export default FooterComponent;