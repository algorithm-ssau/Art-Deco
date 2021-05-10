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
<<<<<<< Updated upstream
				<div className="container">
					<h1>Декор</h1>
=======
				<div className="box">
				<p>
				Чтобы придать интерьеру законченный вид,широко используется архитектурный декор. Известно, что в классическом дизайне без декора
				не обойтись: он подчеркивает изящество и утонченность стиля. Однако, и в более современных
				направлениях декор используется довольно часто. Грамотно подобранные декоративные изделия без лишнего пафоса
				сделают акценты на преимуществах помещения, подчеркнут уникальность интерьера и скроют недостатки планировки.
				</p>
>>>>>>> Stashed changes
				</div>
				<div className="box_right">
                				<p>
                				Декор может присутствовать в интерьере в самых разных вариациях: лепнина и панно,
                				молдинги и плинтуса, колонны и капители, арки и карнизы, розетки и медальоны, пьедесталы и пилястры.
                				Такие архитектурные элементы дают большой для творчества, с ними можно воплотить в жизнь самые разные идеи.
                				Важную роль при использовании декора играет цвет: белая лепнина эффектно смотрится почти в любом интерьере,
                				но при желании она легко и быстро красится в любой выбранный вами цвет.
                				</p>
                				</div>

				<ProductList products={this.products}/>
			</>
		)
	}
}