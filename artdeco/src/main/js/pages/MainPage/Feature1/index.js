import React from 'react';

import image from '../../../../resources/static/img/main/eco.jpg';

import './style.scss';


export default function Feature1() {
    return (
      <section className="feature1">
          <div className="container feature__container">

              <img className="feature__image" alt src={image} />

              <h2 className="feature__title">Экологичность</h2>

              <p className="feature__text">При выборе отделочных материалов
                  для нас важно не забывать о здоровье.
                  Наша продукция изготавливается из экологически
                  безопасного и высококачественного сырья. В состав
                  интерьерных покрытий входят только натуральные
                  компоненты - не токсичные и гипоаллергенные.</p>

          </div>
      </section>
    );
}