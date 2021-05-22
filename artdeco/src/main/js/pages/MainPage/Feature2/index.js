import React from 'react';

import image from '../../../../resources/static/img/main/practice.jpg';

import './style.scss';


export default function Feature2() {
    return (
      <section className="feature2">
          <div className="container feature__container">

              <p className="feature__text">Мы не устаем доказывать,
                  что дизайн может быть стильным и практичным
                  одновременно. Наши декоративные покрытия
                  паропроницаемы, долговечны, морозоустойчивы и
                  не нуждаются в длительной подготовке поверхности
                  под покрытие. Наши решения, а также гарантия
                  на 5 лет подойдут для семей с детьми и питомцами.</p>

              <h2 className="feature__title">Практичность</h2>

              <img className="feature__image" alt src={image} />

          </div>
      </section>
    );
}