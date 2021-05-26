import React from 'react';

import "./style.scss";


export  default function Offer () {
    return (
        <section className="offer">
            <div className="wrapper">
                <h3 className="offer__title">Мы предлагаем:</h3>
                <ul className="offer__list">
                    <li className="offer__item">Качественные материалы и большой
                        выбор декоративных покрытий
                    </li>
                    <li className="offer__item">Готовые проекты интерьера</li>
                    <li className="offer__item">Возможность создать свой уникальный дизайн</li>
                    <li className="offer__item">Обучение технологиям нанесения</li>
                    <li className="offer__item">Поддержка проекта вплоть до его завершения</li>
                </ul>
            </div>
        </section>
    );
};