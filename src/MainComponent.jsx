import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './MainComponent.css';

const figures = [
  {
    src: "../img/gallery/20_2880.png",
    // srcSet: "../img/gallery/20_480.png 480w, ../img/gallery/20_960.png 960w, ../img/gallery/20_1440.png 1440w, ../img/gallery/20_1920.png 1920w, ../img/gallery/20_2880.png 2880w",
    alt: "«ОКО» конструкторское бюро"
  },
  {
    src: "../img/gallery/22_2880.png",
    // srcSet: "../img/gallery/22_480.png 480w, ../img/gallery/22_960.png 960w, ../img/gallery/22_1440.png 1440w, ../img/gallery/22_1920.png 1920w, ../img/gallery/22_2880.png 2880w",
    alt: "«ОКО» конструкторское бюро"
  },
  {
    src: "../img/gallery/21_2880.png",
    // srcSet: "../img/gallery/21_480.png 480w, ../img/gallery/21_960.png 960w, ../img/gallery/21_1440.png 1440w, ../img/gallery/21_1920.png 1920w, ../img/gallery/21_2880.png 2880w",
    alt: "«ОКО» конструкторское бюро"
  },
  {
    src: "../img/gallery/23_2880.png",
    // srcSet: "../img/gallery/23_480.png 480w, ../img/gallery/23_960.png 960w, ../img/gallery/23_1440.png 1440w, ../img/gallery/23_1920.png 1920w, ../img/gallery/23_2880.png 2880w",
    alt: "«ОКО» конструкторское бюро"
  },
  {
    src: "../img/gallery/25_2880.png",
    // srcSet: "../img/gallery/25_480.png 480w, ../img/gallery/25_960.png 960w, ../img/gallery/25_1440.png 1440w, ../img/gallery/25_1920.png 1920w, ../img/gallery/25_2880.png 2880w",
    alt: "«ОКО» конструкторское бюро"
  },
  {
    src: "../img/gallery/15_2880.jpg",
    // srcSet: "../img/gallery/15_480.jpg 480w, ../img/gallery/15_960.jpg 960w, ../img/gallery/15_1440.jpg 1440w, ../img/gallery/15_1920.jpg 1920w, ../img/gallery/15_2880.jpg 2880w",
    alt: "«ОКО» конструкторское бюро"
  },
  {
    src: "../img/gallery/13_2880.jpg",
    // srcSet: "../img/gallery/13_480.jpg 480w, ../img/gallery/13_960.jpg 960w, ../img/gallery/13_1440.jpg 1440w, ../img/gallery/13_1920.jpg 1920w, ../img/gallery/13_2880.jpg 2880w",
    alt: "«ОКО» конструкторское бюро"
  },
  {
    src: "../img/gallery/24_2880.png",
    // srcSet: "../img/gallery/24_480.png 480w, ../img/gallery/24_960.png 960w, ../img/gallery/24_1440.png 1440w, ../img/gallery/24_1920.png 1920w, ../img/gallery/24_2880.png 2880w",
    alt: "«ОКО» конструкторское бюро"
  },
  {
    src: "../img/gallery/6_2880.jpg",
    // srcSet: "../img/gallery/6_480.jpg 480w, ../img/gallery/6_960.jpg 960w, ../img/gallery/6_1440.jpg 1440w, ../img/gallery/6_1920.jpg 1920w, ../img/gallery/6_2880.jpg 2880w",
    alt: "«ОКО» конструкторское бюро"
  },
  {
    src: "../img/gallery/7_2880.jpg",
    // srcSet: "../img/gallery/7_480.jpg 480w, ../img/gallery/7_960.jpg 960w, ../img/gallery/7_1440.jpg 1440w, ../img/gallery/7_1920.jpg 1920w, ../img/gallery/7_2880.jpg 2880w",
    alt: "«ОКО» конструкторское бюро"
  },
  {
    src: "../img/gallery/26_2880.png",
    // srcSet: "../img/gallery/26_480.png 480w, ../img/gallery/26_960.png 960w, ../img/gallery/26_1440.png 1440w, ../img/gallery/26_1920.png 1920w, ../img/gallery/26_2880.png 2880w",
    alt: "«ОКО» конструкторское бюро"
  }
];

const MainComponent = () => {

  useEffect(() => {
    AOS.init({
      // Глобальные настройки:
      disable: false,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
    
      // Настройки, которые могут быть переопределены для каждого элемента, с помощью атрибутов `data-aos-*`:
      offset: 260,
      delay: 0,
      duration: 1200,
      easing: 'ease',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom'
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const swiperSlides = document.querySelectorAll('.swiper-slide');
      swiperSlides.forEach(slide => {
        slide.style.width = '666px'; // Установка ширины в 666px
      });
    };

    handleResize(); // Устанавливаем ширину сразу после монтирования компонента

    window.addEventListener('resize', handleResize); // Устанавливаем обработчик изменения размера окна
    return () => window.removeEventListener('resize', handleResize); // Убираем обработчик при размонтировании компонента
  }, []);
  
  return (
  <main className="main">
    <div className="about" id="mainBlock">
      <div className="about__background background">
        <figure>
          <img
            src="./img/png/smoke-top-480.png"
            srcSet="
              ./img/png/smoke-top-480.png 480w,
              ./img/png/smoke-top-960.png 960w,
              ./img/png/smoke-top-1440.png 1440w,
              ./img/png/smoke-top-1920.png 1920w,
              ./img/png/smoke-top-2880.png 2880w"
            alt="«ОКО» конструкторское бюро"
          />
        </figure>
      </div>
      <div className="about__wrapper wrapper">
        <div className="about__logo">
          <svg viewBox="0 0 784 554">
            <use xlinkHref="#type"></use>
          </svg>
        </div>
        <div className="about__baraddur">
          <figure>
            <img
              src="./img/png/oko_2880.png"
              srcSet="
                ./img/png/oko_2880.png 480w,
                ./img/png/oko_2880.png 960w,
                ./img/png/oko_2880.png 1440w,
                ./img/png/oko_2880.png 1920w,
                ./img/png/oko_2880.png 2880w"
              alt="«ОКО» конструкторское бюро"
            />
          </figure>
        </div>
        <div className="about__info text column column--2">
          <h1>Молодое конструкторское бюро из &nbsp;Санкт-Петербурга, работающее по &nbsp;принципам IT-стартапа</h1>
          <p className="big">
            Специализация компании &nbsp;— сверхдешевые многофункциональные беспилотные летательные аппараты, нацеленные на &nbsp;решение задач добровольческих батальонов и &nbsp;ЧВК
          </p>
          <p>
            Россия, г.&nbsp;Санкт-Петербург<br />Основано в &nbsp;2022 году
          </p>
        </div>
        <div className="about__cols columns">
          <div className="about__col column column--4 text" data-aos="fade-up">
            <p>Команда проектно-конструкторского бюро «Око» — это коллектив увлеченных своим делом профессионалов в областях микроэлектроники, IT, проектирования и авиастроения</p>
          </div>
          <div className="about__col column column--4 text" data-aos="fade-up" data-aos-delay="50">
            <p>Мы считаем, что современный мир дает возможность выпускать высокотехнологичные устройства на базе стандартных производственных решений. Переводя на русский язык — мы стремимся создавать устройства «из хозмага» по цене крупной бытовой техники</p>
          </div>
          <div className="about__col column column--4 text" data-aos="fade-up" data-aos-delay="100">
            <p>Десять лет опыта в IT-индустрии гарантируют, что наши процессы структурированы и отлажены. Мы используем современные методологии планирования и управления проектами</p>
          </div>
          <div className="about__col column column--4 text" data-aos="fade-up" data-aos-delay="150">
            <p><strong>Работа в бюро</strong></p>
            <p>Мы любим и развиваем свою команду и поэтому все получается качественно и без нервов. Напишите нам на oko-kb@yandex.ru с пометкой в теме письма «Карьера»</p>
          </div>
        </div>
      </div>
    </div>
    <div className="project">
      <div className="project__background background">
        <figure>
          <img
            src="./img/png/smoke-bottom-480.png"
            srcSet="
              ./img/png/smoke-bottom-480.png 480w,
              ./img/png/smoke-bottom-960.png 960w,
              ./img/png/smoke-bottom-1440.png 1440w,
              ./img/png/smoke-bottom-1920.png 1920w,
              ./img/png/smoke-bottom-2880.png 2880w"
            alt="«ОКО» конструкторское бюро"
          />
        </figure>
      </div>
      <div className="project__wrapper wrapper columns" id="projectBlock2">
        <div className="project__cover column column--3x2">
          <div className="project__coverBox">
            <div className="project__coverLogo">
              <img src="./img/projects/1/logo.svg" alt="Project Logo" />
            </div>
            <figure className="project__coverImg" data-aos="slide-right" data-aos-duration="1200">
              <img
                src="./img/projects/1/drone-480.png"
                srcSet="
                  ./img/projects/1/drone-480.png 480w,
                  ./img/projects/1/drone-960.png 960w,
                  ./img/projects/1/drone-1440.png 1440w,
                  ./img/projects/1/drone-1920.png 1920w,
                  ./img/projects/1/drone-2880.png 2880w"
                alt="Проект Привет-82"
              />
            </figure>
          </div>
        </div>
        <div className="project__info column column--3 column text" data-aos="fade-up">
          <h2>Проект Привет-82</h2>
          <p className="big">Камикадзе самолетного типа</p>
          <ul className="table">
            <li><strong>Мотор </strong> электрический</li>
            <li><strong>Дальность полета</strong> до 30 км</li>
            <li><strong>Полезная нагрузка</strong> до 5.5 кг (мина 82 мм)</li>
            <li><strong>Взлет</strong> автоматический, с катапульты</li>
            <li><strong>Скорость полета</strong> до 140км/ч (горизонтально)</li>
            <li><strong>&nbsp;</strong> 90 км/ч (крейсерская)</li>
            <li><strong>&nbsp;</strong> 160км/ч (в пикировании)</li>
          </ul>
          <p>
            <strong>Вариант используемых частот<br /></strong>
            &bull;980Мгц (управление) + 1,2ГГц (видео)
          </p>
          <p>
            <strong>Наведение<br /></strong>
            &bull;Вручную, по видеосигналу, с электронной стабилизацией полета<br />
            &bull;По GPS c полетом в автономном режиме<br />&bull;Полет по GPS в заданный район в режиме радиомолчания, с дальнейшим ручным донаведением по видеосигналу оператором, находящимся в районе цели
          </p>
          <p>
            <strong>Подтвержденная на ЛБС максимальная дальность применения<br /></strong>
            &bull;&nbsp;18км через Днепр
          </p>
        </div>
      </div>
      <div className="project__wrapper wrapper columns" id="projectBlock1">
        <div className="project__cover column column--3x2">
          <div className="project__coverBox">
            <div className="project__coverLogo">
              <img src="./img/projects/0/logo.svg" alt="Project Logo" />
            </div>
            <figure className="project__coverImg" data-aos="slide-right" data-aos-duration="1200">
              <img
                src="./img/projects/0/drone-480.png"
                srcSet="
                  ./img/projects/0/drone-480.png 480w,
                  ./img/projects/0/drone-960.png 960w,
                  ./img/projects/0/drone-1440.png 1440w,
                  ./img/projects/0/drone-1920.png 1920w,
                  ./img/projects/0/drone-2880.png 2880w"
                alt="Проект Привет-120"
              />
            </figure>
          </div>
        </div>
        <div className="project__info column column--3 column text" data-aos="fade-up">
          <h2>Проект Привет-120</h2>
          <p className="big">Камикадзе самолетного типа</p>
          <ul className="table">
            <li><strong>Мотор </strong> электрический</li>
            <li><strong>Дальность полета</strong> до 50 км</li>
            <li><strong>Полезная нагрузка</strong> до 7 кг (мина 120 мм)</li>
            <li><strong>Взлет</strong> автоматический, с катапульты</li>
            <li><strong>Скорость полета</strong> до 150 км/ч (горизонтально)</li>
            <li><strong>&nbsp;</strong> 90 км/ч (крейсерская)</li>
            <li><strong>&nbsp;</strong> 160 км/ч (в пикировании)</li>
          </ul>
          <p>
            <strong>Вариант используемых частот<br /></strong>
            &bull;980Мгц (управление) + 1,2ГГц (видео)
          </p>
          <p>
            <strong>Наведение<br /></strong>
            &bull;Вручную, по видеосигналу, с электронной стабилизацией полета<br />
            &bull;По GPS c полетом в автономном режиме<br />&bull;Полет по GPS в заданный район в режиме радиомолчания, с дальнейшим ручным донаведением по видеосигналу оператором, находящимся в районе цели
          </p>
          <p>
            <strong>Подтвержденная на ЛБС максимальная дальность применения<br /></strong>
            &bull;&nbsp;15км через Днепр
          </p>
        </div>
      </div>
    </div>
    <div className="pvopro" id="pvoproBlock">
      <div className="pvopro__wrapper wrapper columns">
        <div
          className="pvopro__info column column--5x2 text aos-init aos-animate"
          data-aos="fade-up"
        >
          <h2>Противодействие ПВО/ПРО</h2>
          <p className="big">
            В связи с крайне низкой ценой изделия, ПВО/ПРО противника преодолевается
            большим количеством запущенных изделий.
          </p>
          <p>
            При попытке уничтожения изделия осуществляется демаскировка и
            обнаружение позиций ПВО противника, при этом каждое поражение крылатой
            ракеты является крайне экономически неэффективным для противника
          </p>
        </div>
        <a
          className="pvopro__map column column--5x3 aos-init aos-animate"
          href="../img/png/map_2880.png"
          data-aos="zoom-in"
        >
          <figure>
            <img
              src="../img/png/map_480.png"
              srcSet="
              ../img/png/map_480.png 480w,
              ../img/png/map_960.png 960w,
              ../img/png/map_1440.png 1440w,
              ../img/png/map_1920.png 1920w,
              ../img/png/map_2880.png 2880w
            "
              alt="«ОКО» конструкторское бюро"
            />
          </figure>
        </a>
      </div>
    </div>
    <Swiper
        modules={[Navigation, Pagination]}
        initialSlide={1}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          1560: {
            initialSlide: 1,
            slidesPerView: 3,
          },
        }}
      >
        {
          figures.map((sliderFigure, index) => (
            <SwiperSlide key={index} virtualIndex={index} className="aos-init aos-animate" data-aos="fade-up" style={{width:'666px'}}>
              <figure>
                <img  src={sliderFigure.src} alt={sliderFigure.alt} style={{ maxWidth: '100%', height: '444px', objectFit: 'cover' }}/>
              </figure>
            </SwiperSlide>
          ))
        }
    </Swiper>
    {/* <div className="gallery" id="galleryBlock">
      <div className="gallery__wrapper wrapper columns">
        <div className="gallery__slider column column--2 swiper-initialized swiper-horizontal swiper-pointer-events">
          <div
            className="gallery__sliderWrapper"
            id="swiper-wrapper-f8a15f9adb8c501c"
            aria-live="polite"
            style={{ transform: 'translate3d(-714px, 0px, 0px)', transitionDuration: '0ms' }}
          >
            <div
              className="gallery__sliderSlide aos-init gallery__sliderSlide--prev aos-animate"
              data-aos="fade-up"
              style={{ width: '666px', marginRight: '48px' }}
              role="group"
              aria-label="1 / 11"
            >
              <figure>
                <img
                  src="../img/gallery/20_480.png"
                  srcSet="
                  ../img/gallery/20_480.png 480w,
                  ../img/gallery/20_960.png 960w,
                  ../img/gallery/20_1440.png 1440w,
                  ../img/gallery/20_1920.png 1920w,
                  ../img/gallery/20_2880.png 2880w
                "
                  alt="«ОКО» конструкторское бюро"
                />
              </figure>
            </div>
            <div
              className="gallery__sliderSlide aos-init gallery__sliderSlide--active aos-animate"
              data-aos="fade-up"
              style={{ width: '666px', marginRight: '48px' }}
              role="group"
              aria-label="2 / 11"
            >
              <figure>
                <img
                  src="../img/gallery/22_480.png"
                  srcSet="
                  ../img/gallery/22_480.png 480w,
                  ../img/gallery/22_960.png 960w,
                  ../img/gallery/22_1440.png 1440w,
                  ../img/gallery/22_1920.png 1920w,
                  ../img/gallery/22_2880.png 2880w
                "
                  alt="«ОКО» конструкторское бюро"
                />
              </figure>
            </div>
            <div
              className="gallery__sliderSlide aos-init gallery__sliderSlide--next aos-animate"
              data-aos="fade-up"
              style={{ width: '666px', marginRight: '48px' }}
              role="group"
              aria-label="3 / 11"
            >
              <figure>
                <img
                  src="../img/gallery/21_480.png"
                  srcSet="
                  ../img/gallery/21_480.png 480w,
                  ../img/gallery/21_960.png 960w,
                  ../img/gallery/21_1440.png 1440w,
                  ../img/gallery/21_1920.png 1920w,
                  ../img/gallery/21_2880.png 2880w
                "
                  alt="«ОКО» конструкторское бюро"
                />
              </figure>
            </div>
            <div
              className="gallery__sliderSlide aos-init aos-animate"
              data-aos="fade-up"
              style={{ width: '666px', marginRight: '48px' }}
              role="group"
              aria-label="4 / 11"
            >
              <figure>
                <img
                  src="../img/gallery/23_480.png"
                  srcSet="
                  ../img/gallery/23_480.png 480w,
                  ../img/gallery/23_960.png 960w,
                  ../img/gallery/23_1440.png 1440w,
                  ../img/gallery/23_1920.png 1920w,
                  ../img/gallery/23_2880.png 2880w
                "
                  alt="«ОКО» конструкторское бюро"
                />
              </figure>
            </div>
            <div
              className="gallery__sliderSlide aos-init aos-animate"
              data-aos="fade-up"
              style={{ width: '666px', marginRight: '48px' }}
              role="group"
              aria-label="5 / 11"
            >
              <figure>
                <img
                  src="../img/gallery/25_480.png"
                  srcSet="
                  ../img/gallery/25_480.png 480w,
                  ../img/gallery/25_960.png 960w,
                  ../img/gallery/25_1440.png 1440w,
                  ../img/gallery/25_1920.png 1920w,
                  ../img/gallery/25_2880.png 2880w
                "
                  alt="«ОКО» конструкторское бюро"
                />
              </figure>
            </div>
            <div
              className="gallery__sliderSlide aos-init aos-animate"
              data-aos="fade-up"
              style={{ width: '666px', marginRight: '48px' }}
              role="group"
              aria-label="6 / 11"
            >
              <figure>
                <img
                  src="../img/gallery/15_480.jpg"
                  srcSet="
                  ../img/gallery/15_480.jpg 480w,
                  ../img/gallery/15_960.jpg 960w,
                  ../img/gallery/15_1440.jpg 1440w,
                  ../img/gallery/15_1920.jpg 1920w,
                  ../img/gallery/15_2880.jpg 2880w
                "
                  alt="«ОКО» конструкторское бюро"
                />
              </figure>
            </div>
            <div
              className="gallery__sliderSlide aos-init aos-animate"
              data-aos="fade-up"
              style={{ width: '666px', marginRight: '48px' }}
              role="group"
              aria-label="7 / 11"
            >
              <figure>
                <img
                  src="../img/gallery/13_480.jpg"
                  srcSet="
                  ../img/gallery/13_480.jpg 480w,
                  ../img/gallery/13_960.jpg 960w,
                  ../img/gallery/13_1440.jpg 1440w,
                  ../img/gallery/13_1920.jpg 1920w,
                  ../img/gallery/13_2880.jpg 2880w
                "
                  alt="«ОКО» конструкторское бюро"
                />
              </figure>
            </div>
            <div
              className="gallery__sliderSlide aos-init aos-animate"
              data-aos="fade-up"
              style={{ width: '666px', marginRight: '48px' }}
              role="group"
              aria-label="8 / 11"
            >
              <figure>
                <img
                  src="../img/gallery/24_480.png"
                  srcSet="
                  ../img/gallery/24_480.png 480w,
                  ../img/gallery/24_960.png 960w,
                  ../img/gallery/24_1440.png 1440w,
                  ../img/gallery/24_1920.png 1920w,
                  ../img/gallery/24_2880.png 2880w
                "
                  alt="«ОКО» конструкторское бюро"
                />
              </figure>
            </div>
            <div
              className="gallery__sliderSlide aos-init aos-animate"
              data-aos="fade-up"
              style={{ width: '666px', marginRight: '48px' }}
              role="group"
              aria-label="9 / 11"
            >
              <figure>
                <img
                  src="../img/gallery/6_480.jpg"
                  srcSet="
                  ../img/gallery/6_480.jpg 480w,
                  ../img/gallery/6_960.jpg 960w,
                  ../img/gallery/6_1440.jpg 1440w,
                  ../img/gallery/6_1920.jpg 1920w,
                  ../img/gallery/6_2880.jpg 2880w
                "
                  alt="«ОКО» конструкторское бюро"
                />
              </figure>
            </div>
            <div
              className="gallery__sliderSlide aos-init aos-animate"
              data-aos="fade-up"
              style={{ width: '666px', marginRight: '48px' }}
              role="group"
              aria-label="10 / 11"
            >
              <figure>
                <img
                  src="../img/gallery/7_480.jpg"
                  srcSet="
                  ../img/gallery/7_480.jpg 480w,
                  ../img/gallery/7_960.jpg 960w,
                  ../img/gallery/7_1440.jpg 1440w,
                  ../img/gallery/7_1920.jpg 1920w,
                  ../img/gallery/7_2880.jpg 2880w
                "
                  alt="«ОКО» конструкторское бюро"
                />
              </figure>
            </div>
            <div
              className="gallery__sliderSlide aos-init aos-animate"
              data-aos="fade-up"
              style={{ width: '666px', marginRight: '48px' }}
              role="group"
              aria-label="11 / 11"
            >
              <figure>
                <img
                  src="../img/gallery/26_480.png"
                  srcSet="
                  ../img/gallery/26_480.png 480w,
                  ../img/gallery/26_960.png 960w,
                  ../img/gallery/26_1440.png 1440w,
                  ../img/gallery/26_1920.png 1920w,
                  ../img/gallery/26_2880.png 2880w
                "
                  alt="«ОКО» конструкторское бюро"
                />
              </figure>
            </div>
          </div>
          <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
        </div>
        <div
          className="gallery__arrow gallery__arrow--prev"
          tabIndex="0"
          role="button"
          aria-label="Previous slide"
          aria-controls="swiper-wrapper-f8a15f9adb8c501c"
          aria-disabled="false"
        ></div>
        <div
          className="gallery__arrow gallery__arrow--next"
          tabIndex="0"
          role="button"
          aria-label="Next slide"
          aria-controls="swiper-wrapper-f8a15f9adb8c501c"
          aria-disabled="false"
        ></div>
      </div>
    </div> */}
    <div className="roadmap" id="roadmapBlock">
      <div className="roadmap__background background">
        <figure>
          <img
            src="../img/png/smoke-bottom-480.png"
            srcSet="
            ../img/png/smoke-bottom-480.png 480w,
            ../img/png/smoke-bottom-960.png 960w,
            ../img/png/smoke-bottom-1440.png 1440w,
            ../img/png/smoke-bottom-1920.png 1920w,
            ../img/png/smoke-bottom-2880.png 2880w
          "
            alt="«ОКО» конструкторское бюро"
          />
        </figure>
      </div>
      <div className="roadmap__wrapper wrapper columns">
        <div className="roadmap__info column column--2 text">
          <h2 className="roadmap__title">
            <svg viewBox="0 0 192 32" preserveAspectRatio="xMinYMid">
              <use xlinkHref="#roadmap" />
            </svg>
            <span>Дорожная карта</span>
          </h2>
          <div className="accordion">
            <div className="accordion__section aos-init" data-aos="fade-up">
              <div className="accordion__control">Выполнено</div>
              <div className="accordion__content">
                <ul>
                  <li className="done">Разработка и проверка концепции Привет-120</li>
                  <li className="done">СFD-проектирование, расчет аэродинамической модели Привет-120</li>
                  <li className="done">Запуск собственного опытно-конструкторского производства</li>
                  <li className="done">Прототип Привет-120 «Кенни-1», отладка базовой авионики</li>
                  <li className="done">Прототип Привет-120 «Кенни-2», отладка полной траектории полета, включая финальный заход на цель</li>
                  <li className="done">Прототип Привет-120 «Кенни-3», первый полет полномасштабной модели на корде</li>
                  <li className="done">Летный прототип Привет-82, испытания взлета</li>
                  <li className="done">Привет-82 Создание собственной катапульты для запуска</li>
                  <li className="done">Привет-82. Создание 20-ти летных прототипов, тестирование летных характеристик, максимальной полетной нагрузки и дальности полета</li>
                  <li className="done">Привет-82. Отладка FPV-комплектов</li>
                  <li className="done">Привет 82. Автоматический взлет с катапульты, полеты в стабилизированном режиме</li>
                  <li className="done">Привет-82. Тесты заходов на цель и попаданий по видеосигналу</li>
                  <li className="done">Летный прототип Привет-82РТЛ (Ретранслятор)</li>
                  <li className="done">Закрытая презентация Привет-82, полный цикл демонстрационного полета, включая попадание по цели</li>
                  <li className="done">Развертывание мелкосерийного производства Привет-82</li>
                </ul>
              </div>
            </div>
            <div className="accordion__section aos-init" data-aos="fade-up">
              <div className="accordion__control">Март</div>
              <div className="accordion__content">
                <ul>
                  <li className="list">Летные испытания Привет-82РТЛ</li>
                  <li className="list">Изготовление нескольких партий Привет-82 (в сумме до 100 шт) для наших заказчиков</li>
                  <li className="list">Стандартизация программы обучения пилотов</li>
                  <li className="list">Разработка ретрансляции управляющего сигнала</li>
                </ul>
              </div>
            </div>
            <div className="accordion__section aos-init" data-aos="fade-up">
              <div className="accordion__control">Апрель</div>
              <div className="accordion__content">
                <ul>
                  <li className="list">Развертывание масштабного производства Привет-82</li>
                  <li className="list">Начало работ по конвертации Привет-82 в бомбардировщик</li>
                  <li className="list">Разработка системы наведения с применением OpenCV (распознавание цели при помощи компьютерного зрения)</li>
                </ul>
              </div>
            </div>
            <div className="accordion__section aos-init" data-aos="fade-up">
              <div className="accordion__control">Отложено</div>
              <div className="accordion__content">
                <ul>
                  <li className="list">Прототип Привет-120 «Кенни-4» Свободный полет полномасштабной модели, проектирование предсерийного образца</li>
                  <li className="list">Развертывание мелкосерийного производства Привет-120, ограниченная партия 20 шт</li>
                  <li className="list">Развертывание серийного производства Привет-120. Разработка визуальной системы навигации и наведения с использованием технологий нейронных сетей и машинного зрения</li>
                  <li className="list">Прототип Привет-120 «Кенни-5», увеличение дальности полета, тестирование визуальной системы навигации и наведения</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="donations" id="donationsBlock">
    <div className="donations__wrapper wrapper">
      <div className="donations__info column column--3x2">
        <h2 className="donations__title">
          <svg viewBox="0 0 192 32" preserveAspectRatio="xMinYMid">
            <use xlinkHref="#donations" />
          </svg>
          <span>Поддержать нас</span>
        </h2>
        <div className="donations__cols columns">
          <div className="donations__col column column--3 text aos-init aos-animate" data-aos="fade-up">
            <h3>Переводом на криптокошелек</h3>
            <p className="crypto" data-clipboard-text="13fhnkmpBBWXUQucJd6efWvXdEj78DKavk">
              <strong>Bitcoin:</strong>
              <span className="wallet">13fhnkmpBBWXUQucJd6efWvXdEj78DKavk</span>
            </p>
            <p className="crypto" data-clipboard-text="0x19F8f2B0915Daa12a3f5C9CF01dF9E24D53794F7">
              <strong>ETH:</strong>
              <span className="wallet">0x19F8f2B0915Daa12a3f5C9CF01dF9E24D53794F7</span>
            </p>
            <p className="crypto" data-clipboard-text="0x19F8f2B0915Daa12a3f5C9CF01dF9E24D53794F7">
              <strong>USDT (ETH):</strong>
              <span className="wallet">0x19F8f2B0915Daa12a3f5C9CF01dF9E24D53794F7</span>
            </p>
            <p className="crypto" data-clipboard-text="TFdTr9C3BqQrzKBXqSxJfAZFTh8UwBAfSg">
              <strong>USDT (TRX):</strong>
              <span className="wallet">TFdTr9C3BqQrzKBXqSxJfAZFTh8UwBAfSg</span>
            </p>
            <p className="crypto" data-clipboard-text="0x19F8f2B0915Daa12a3f5C9CF01dF9E24D53794F7">
              <strong>Binance USD (ETH):</strong>
              <span className="wallet">0x19F8f2B0915Daa12a3f5C9CF01dF9E24D53794F7</span>
            </p>
            <p className="small">Кликните по кошельку, чтобы скопировать его адрес</p>
          </div>
          <div className="donations__col column column--3 text aos-init aos-animate" data-aos="fade-up" data-aos-delay="50">
            <h3>Переводом на банковский счет</h3>
            <p>Вы можете совершить перевод с помощью банковской карты любого российского банка</p>
            <a className="button share share--cd" href="https://www.tinkoff.ru/cf/8edevFOpYtI" target="_blank" rel="noopener noreferrer">
              <span>Сделать перевод</span>
            </a>
          </div>
          <div className="donations__col column column--3 text aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <h3>Поддержать информационно</h3>
            <p>Мы будем рады, если вы поделитесь информацией о нас в социальных сетях</p>
            <div className="shares">
              <a className="button share share--vk" href="http://vkontakte.ru/share.php?url=https://oko-kb.ru" target="_blank" rel="noopener noreferrer">
                <span>Поделиться Вконтакте</span>
              </a>
              <button className="button share share--lk" data-clipboard-text="https://oko-kb.ru">
                <span>Скопировать ссылку</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    {/* <div className="contacts">
      <div className="contacts__wrapper wrapper">
        <div className="contacts__info">
          <p className="text">
            <strong>Телефон:</strong> +7 911 136 59 25<br />
            <strong>Почта:</strong> oko-kb@yandex.ru<br />
            <strong>Адрес:</strong> Санкт-Петербург, ул. Малой улицы 17
          </p>
        </div>
        <div className="contacts__logo">
          <svg viewBox="0 0 784 554">
            <use xlinkHref="#type"></use>
          </svg>
        </div>
      </div>
    </div> */}
  </main>
)};

export default MainComponent;
