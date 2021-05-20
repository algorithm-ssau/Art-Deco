import React, {Component} from 'react';

import DefaultHeader from "../components/DefaultHeader";
import {ProductList} from "../app";

import '../../resources/static/style.css';


export class WallpaperPage extends Component {
    constructor(props) {
        super(props);
        this.products = props.products
    }

    render() {
        return (
            <>
                <DefaultHeader text="Обои" />

                <div className="text">
                    <p>Обои, наверное, самая привычная для нас разновидность отделочных материалов.
                        Причина их популярности – разнообразие. Действительно, легко потеряться в
                        неограниченном ассортименте рисунков, текстур, стилей и фактур. Однако при оформлении
                        интерьера нельзя ограничиваться только выбором красивого принта, необходимо помнить о
                        безопасности выбираемого покрытия.</p>
                </div>

                <div className="text">
                    <p>Самыми экологичными по праву считаются флизелиновые обои. Помимо гипоаллергенности,
                        воздухопроницаемости и прочности, к их достоинствам относят также легкость и скорость
                        поклейки, так как клей наносится только на стену, что упрощает монтаж и экономит время.
                        Такие обои не сжимаются после высыхания, скрывают микротрещины, не рвутся и не деформируются
                        при усадке стен новостроек.</p>
                </div>
                <div className="container">
                    <h1>Обои</h1>
                </div>

                <ProductList products={this.products}/>
                <div className="text">
                    <p>Мы предлагаем обои премиального качества с самыми разнообразными принтами, и вы сможете найти
                        что-то
                        для себя, какой бы дизайн вы ни выбрали: от классического барокко до современного лофта.
                        Продукция,
                        которую мы предоставляем, соответствует российским и международным санитарным требованиям и
                        стандартам качества.</p>
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
}