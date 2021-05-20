import React from 'react';
import { Link } from "react-router-dom";

import './style.scss';


export default function MainHeader() {
    return (
        <header className="header-main">
            <nav className="header-main__container nav-extended">
                <div className="header-main__nav nav-wrapper">

                    <a href="#" className="header-main__logo brand-logo left">Art Deco</a>

                    <ul className="header-main__list right">
                        <li className="header-main__item">
                            <Link to={'/plaster'}>Декоративная штукатурка</Link>
                        </li>
                        <li className="header-main__item">
                            <Link to={'/fresco'}>Фрески</Link>
                        </li>
                        <li className="header-main__item">
                            <Link to={'/paint'}>Краски</Link>
                        </li>
                        <li className="header-main__item">
                            <Link to={'/wallpaper'}>Обои</Link>
                        </li>
                        <li className="header-main__item">
                            <Link to={'/decor'}>Декор</Link>
                        </li>
                        <li className="header-main__item">
                            <Link to={'/project'}>Наши проекты</Link>
                        </li>
                        <li className="header-main__item">
                            <Link to={'/contact'}>Контакты</Link>
                        </li>
                    </ul>
                </div>

                <div className="header-main__content nav-content center">
                    <span className="header-main__text nav-title">
                        Уникальные покрытия. <br/>
                        Уникальные решения
                    </span>
                </div>
            </nav>
        </header>
        // <header>
        //     <div className="header-top clearfix">
        //         <div className="header-logo">
        //             <a href="/">Art Deco</a>
        //         </div>
        //         <ul className="header-nav clearfix">
        //             <div className="header-nav-container">
        //                 <Link to={'/plaster'}>Декоративная штукатурка</Link>
        //                 <Link to={'/fresco'}>Фрески</Link>
        //                 <Link to={'/paint'}>Краски</Link>
        //                 <Link to={'/wallpaper'}>Обои</Link>
        //                 <Link to={'/decor'}>Декор</Link>
        //                 <Link to={'/project'}>Наши проекты</Link>
        //                 <Link to={'/contact'}>Контакты</Link>
        //             </div>
        //         </ul>
        //     </div>
        //     <p className="header-text">Уникальные покрытия.
        //         <br/>Уникальные решения</p>
        // </header>
    )
}