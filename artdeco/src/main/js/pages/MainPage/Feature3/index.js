import React from 'react';

import image from '../../../../resources/static/img/main/estet.jpg';

import './style.scss';


export default function Feature3() {
    return (
        <section className="feature3">
            <div className="container feature__container">

                <img className="feature__image" alt src={image}/>

                <h2 className="feature__title">Эстетичность</h2>

                <p className="feature__text">Изящный и неповторимый интерьер
                    можно создать в любом помещении благодаря
                    особенностям наших материалов, большому выбору
                    способов его нанесения и широкому цветовому
                    спектру. Почувствуйте себя настоящим дизайнером,
                    ведь единственное, что вас ограничивает, –
                    это ваше воображение.</p>
            </div>
        </section>
    );
}