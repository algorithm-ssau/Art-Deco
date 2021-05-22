import React from 'react';

import Lamp from '../../../../resources/static/img/vector/lamp.svg';

import './style.scss';


export default function Description () {
    return (
        <section className="about">
            <div className="container about__container">

                <div className="about__text">
                    <p>Art DECO — это широкий выбор декоративных
                        покрытий от лучших производителей.
                        Мы предлагаем интересные решения
                        для любого ценового диапазона и любой
                        площади пространства. <br/>
                        <br/>
                        Вместе с Вами мы создадим неповторимый дизайн,
                        добавив помещению свежести и пространства.</p>
                </div>

                <img alt className="about__image" src={Lamp} />

            </div>
        </section>
    );
}