import React, {Component } from 'react'
import "materialize-css/dist/css/materialize.css"
import {ProductList} from "../app";

import '../../resources/static/style.css'
import {Link} from 'react-router-dom';


export class DecorPage extends Component{
	constructor(props) {
		super(props);
		this.products = props.products
	}

	render() {
		return (
			<>
			 <link rel="preconnect" href="https://fonts.gstatic.com" />
              <link href="https://fonts.googleapis.com/css2?family=Forum&display=swap" rel="stylesheet" />
              <meta charSet="utf-8" />
              <meta name="keywords" content="штукатурка, фреска, краска,
                обои, декор, декоративный, ремонт" />
              <meta name="description" content />
              <title> Art Deco </title>
              <header>
                <div className="header-top clearfix">
                  <div className="header-logo">
                    <a href="/">Art Deco</a>
                  </div>
                  <ul className="header-nav clearfix">
                    <div className="header-nav-container">
                      <Link to = {'/plaster'}>Декоративная штукатурка</Link>
                      <Link to = {'/fresco'}>Фрески</Link>
                      <Link to = {'/paint'}>Краски</Link>
                      <Link to = {'/wallpaper'}>Обои</Link>
                      <Link to = {'/decor'}>Декор</Link>
                      <Link to = {'/project'}>Наши проекты</Link>
                      <Link to = {'/contact'}>Контакты</Link>
                    </div>
                  </ul>
                </div>
                <p className="header-text">Уникальные покрытия.
                  <br />Уникальные решения</p>
              </header>

				<div className="text">
				<td><img src="img/decor2.jpg" width="400" height="400" alt="Decor" /></td>
				<td>Чтобы придать интерьеру законченный вид,широко используется архитектурный декор. Известно, что в классическом дизайне без декора
				не обойтись: он подчеркивает изящество и утонченность стиля. Однако, и в более современных
				направлениях декор используется довольно часто. Грамотно подобранные декоративные изделия без лишнего пафоса
				сделают акценты на преимуществах помещения, подчеркнут уникальность интерьера и скроют недостатки планировки.</td>


				</div>



				<div className="text">
                				<p>
                				Декор может присутствовать в интерьере в самых разных вариациях: лепнина и панно,
                				молдинги и плинтуса, колонны и капители, арки и карнизы, розетки и медальоны, пьедесталы и пилястры.
                				Такие архитектурные элементы дают большой для творчества, с ними можно воплотить в жизнь самые разные идеи.
                				Важную роль при использовании декора играет цвет: белая лепнина эффектно смотрится почти в любом интерьере,
                				но при желании она легко и быстро красится в любой выбранный вами цвет.
                				</p>
                				</div>


				<ProductList products={this.products}/>

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
                        <p className="contacts">тел. +7 (846) 248-08-78<br />
                          e-mail: artdeco63@inbox.ru</p>
                      </div>
                      <div className="footer-right">
                        <a className="inst-icon" href="https://www.instagram.com/artdeco_63/"></a>
                        <span className="inst-text">artdeco_63</span>
                        <span className="middle-el" />
                      </div>
                      <p className="copyright">© 2021 Art Deco</p>
                    </div>
                  </footer>
			</>
		)
	}
}