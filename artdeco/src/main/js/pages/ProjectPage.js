import React from 'react';

import DefaultHeader from "../components/DefaultHeader";

import '../../resources/static/style.css';


export const ProjectPage = () => {
    return (
        <>
            <DefaultHeader text="Наши проекты" />

            <div>
                <h1>Наши проекты</h1>
            </div>
            <div class="container1">
                <div class="box1">
                    <img src="img/1/1.jpg"/>

                </div>
                <div class="box1">
                    <img src="img/1/4.jpg"/>

                </div>
                <div class="box1">
                    <img src="img/1/8.jpg"/>

                </div>
                <div class="box1">
                    <img src="img/1/6.jpg"/>

                </div>
                <div class="box1">
                    <img src="img/2.jpg"/>

                </div>
                <div class="box1">
                    <img src="img/4.jpg"/>

                </div>
            </div>
            <footer>
                <div className="footer-top clearfix">
                    <a href="#" className="footer-logo">Art Deco</a>
                    <ul className="footer-nav clearfix">
                        <div className="footer-nav-container">
                            <li><a href="/plaster">Декоративная штукатурка</a></li>
                            <li><a href="/fresco">Фрески</a></li>
                            <li><a href="/paint">Краски</a></li>
                            <li><a href="/wallpaper">Обои</a></li>
                            <li><a href="/decor">Декор</a></li>
                            <li><a href="/project">Наши проекты</a></li>
                            <li><a href="/contact">Контакты</a></li>
                        </div>
                    </ul>
                </div>
                <div className="footer-bottom clearfix">
                    <div className="footer-left">
                        <p className="address">г. Самара, ул.Ново-Садовая, д. 163</p>
                        <p className="contacts">тел. +7 (846) 248-08-78<br/>
                            e-mail: artdeco63@inbox.ru</p>
                    </div>
                    <div className="footer-right">
                        <a className="inst-icon" href="https://www.instagram.com/artdeco_63/"></a>
                        <span className="inst-text">artdeco_63</span>
                        <span className="middle-el"/>
                    </div>
                    <p className="copyright">© 2021 Art Deco</p>
                </div>
            </footer>
        </>

    )
}