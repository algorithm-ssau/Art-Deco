import React, {Component } from 'react'
//import 'materialize-css'
/*import img from "../../resources/static/img/parallax4.jpg"
import img2 from "../../resources/static/img/parallax3.jpg"*/
import "materialize-css/dist/css/materialize.css"
//import {Parallax} from "react-parallax";
import {ProductList} from "../app";


export class PlasterPage extends Component{
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
                </header>
				<div className="container">
					<h1>Штукатурка</h1>
				</div>

				<ProductList products={this.products}/>
			</>
		)
	}
}