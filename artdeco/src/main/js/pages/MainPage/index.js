import React from 'react';

import MainHeader from "../../components/MainHeader";
import Description from "./Description";
import Description2 from "./Description2";
import Footer from "../../components/Footer";

import '../../../resources/static/style.css';


export const MainPage = () => {
    return (
        <>
            <MainHeader/>

            <main>
                <Description />
                <Description2 />

                <section className="features">
                    <ul className="features-list">
                        <li className="eco">
                            <img src alt/>
                            <h2>Экологичность</h2>
                            <div className="box">
                                <p>При оформлении интерьера не следует
                                    забывать о здоровье, поэтому при выборе
                                    отделочных материалов особенно важно
                                    обращать внимание на их безвредность.
                                    Вся наша продукция изготавливается из
                                    высококачественного сырья, которое
                                    проходит тщательную санитарную проверку
                                    и является экологически безопасным. В
                                    состав интерьерных покрытий входят только
                                    натуральные компоненты, поэтому они не
                                    токсичны и гипоаллергенны.
                                </p>
                            </div>
                        </li>
                        <li className="practic">
                            <img src alt/>
                            <h2>Практичность</h2>
                            <div className="box_right">
                                <p>
                                    Мы не устаем доказывать, что дизайн может
                                    быть стильным и практичным одновременно.
                                    Наши декоративные покрытия паропроницаемы,
                                    долговечны, морозоустойчивы и не нуждаются
                                    в длительной подготовке поверхности под
                                    покрытие. Наши решения подойдут для семей
                                    с детьми и питомцами. А еще мы даем гарантию
                                    5 лет на все материалы.
                                </p>
                            </div>
                        </li>
                        <li className="aesth">
                            <img src alt/>
                            <h2>Эстетичность</h2>
                            <div className="box">
                                <p>
                                    Изящный и неповторимый интерьер можно создать
                                    в любом помещении благодаря особенностям наших
                                    материалов, большому выбору способов его
                                    нанесения и широкому цветовому спектру.
                                    Почувствуйте себя настоящим дизайнером, ведь
                                    единственное, что вас ограничивает – это
                                    ваше воображение.
                                </p>
                            </div>
                        </li>
                    </ul>
                </section>
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