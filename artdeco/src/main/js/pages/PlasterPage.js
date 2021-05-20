import React, {Component} from 'react';

import DefaultHeader from "../components/DefaultHeader";
import {ProductList} from "../app";

import '../../resources/static/style.css';


export class PlasterPage extends Component {
    constructor(props) {
        super(props);
        this.products = props.products
    }

    render() {
        return (
            <>
                <DefaultHeader text="Декоративная штукатурка"/>

                <div className="text">
                    <p>Декоративная штукатурка – один из самых выигрышных отделочных материалов. Она выгодно отличается
                        от обоев и плитки бесшовностью,
                        неповторимостью текстуры и богатой цветовой палитрой. Одним из главных достоинств декоративной
                        штукатурки является ее неприхотливость:
                        это влаго- и термостойкий материал, который можно наносить на любой тип поверхности без ее
                        специальной подготовки. Кроме этого, штукатурка
                        позволяет помещению лучше сохранять тепло, обеспечивает дополнительную изоляцию от шума, не
                        впитывает запахи и скрывает дефекты и неровности стен.</p>
                </div>
                <div className="text">
                    <p>Декоративные штукатурки могут придавать поверхности эффект камня, мрамора, дерева, металла, камня
                        или даже ткани,
                        а широкий цветовой спектр дает возможность легко обновить интерьер в любой момент:
                        декорированные штукатуркой стены можно быстро перекрасить.
                        Они легко моются и не боятся когтей домашних животных. Это определенно лучший вариант, если в
                        семье есть дети или питомцы. Экологичность и практичность – сильные стороны этого материала.</p>
                </div>
                <div className="container">
                    <h1>Штукатурка</h1>
                </div>

                <ProductList products={this.products}/>

                <div className="text">
                    <p>Возможности применения декоративной штукатурки безграничны: от урбанистического стиля лофт до
                        утонченного классицизма, от эффекта мрамора до эффекта состаренных стен. Что бы вы ни задумали,
                        штукатурка идеально для этого подойдет.
                        Благодаря неограниченному выбору способов ее нанесения, вы можете воплотить все свои идеи в
                        жизнь – мы с удовольствием вам в этом поможем!</p>
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