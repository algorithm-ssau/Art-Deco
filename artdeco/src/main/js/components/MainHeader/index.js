import React from 'react';

import Navigation from "../Navigation";

import './style.scss';


export default function MainHeader() {
    return (
        <header className="header-main">
            <nav className="header-main__container nav-extended">

                <Navigation />

                <div className="header-main__content nav-content center">
                    <span className="header-main__text nav-title">
                        Уникальные покрытия. <br/>
                        Уникальные решения
                    </span>
                </div>

            </nav>
        </header>
    )
}