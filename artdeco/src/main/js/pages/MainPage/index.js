import React from 'react';

import MainHeader from "../../components/MainHeader";
import Description from "./Description";
import Description2 from "./Description2";
import Feature1 from "./Feature1";
import Feature3 from "./Feature3";
import Feature2 from "./Feature2";
import FeatureTest from './FeatureTest';
import Footer from "../../components/Footer";

import '../../../resources/static/style.css';


export const MainPage = () => {
    return (
        <>
            <MainHeader/>

            <main>
                <Description />
                <Description2 />

                <Feature1 />
                <Feature2 />
                <Feature3 />
                <FeatureTest />

                <section className="offer">
                    <h3>Мы предлагаем:</h3>
                    <ul>
                        <li>Качественные материалы и большой
                            выбор декоративных покрытий
                        </li>
                        <li>Готовые проекты интерьера</li>
                        <li>Возможность создать свой уникальный дизайн</li>
                        <li>Обучение технологиям нанесения</li>
                        <li>Поддержка проекта вплоть до его завершения</li>
                    </ul>
                </section>
                <section className="reviews">
                    <div className="reviews-title">
                        <h2>Отзывы наших клиентов</h2>
                    </div>
                    <div className="reviews-content">
                        <div className="reviews-about">
                            <p>За нашими плечами сотни крупных объектов
                                строительства и тысячи розничных клиентов.</p>
                        </div>
                        <div className="reviews-item">
                            <blockquote>
                                Текст отзыва
                                <cite>Автор</cite>
                            </blockquote>
                        </div>
                    </div>
                </section>
            </main>

            <Footer/>
        </>
    );
}