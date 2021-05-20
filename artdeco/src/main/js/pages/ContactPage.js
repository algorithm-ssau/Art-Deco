import React from 'react';

import DefaultHeader from "../components/DefaultHeader";

import '../../resources/static/style.css';


export const ContactPage = () => {
    return (
        <>
            <DefaultHeader text="Контакты"/>

            <div className="container">
                <iframe src="https://www.google.com/maps/d/embed?mid=1F_Qrm-aMVdCb0_d2sA55u9iaCz1ENHti" width="640"
                        height="480"></iframe>


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