import React from 'react';
import {Link} from "react-router-dom";


export default function Navigation () {
    return (
        <nav className="navigation nav-wrapper">

            <a href="#" className="navigation__logo brand-logo left">
                <Link to={'/'}>Art Deco</Link>
            </a>

            <ul className="navigation__list right">
                <li>
                    <Link to={'/plaster'}>Декоративная штукатурка</Link>
                </li>
                <li>
                    <Link to={'/fresco'}>Фрески</Link>
                </li>
                <li>
                    <Link to={'/paint'}>Краски</Link>
                </li>
                <li>
                    <Link to={'/wallpaper'}>Обои</Link>
                </li>
                <li>
                    <Link to={'/decor'}>Декор</Link>
                </li>
                <li>
                    <Link to={'/project'}>Наши проекты</Link>
                </li>
                <li>
                    <Link to={'/contact'}>Контакты</Link>
                </li>
            </ul>
        </nav>
    );
}

import './style.scss';
