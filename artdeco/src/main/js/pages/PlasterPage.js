import React, {Component } from 'react'
//import 'materialize-css'
/*import img from "../../resources/static/img/parallax4.jpg"
import img2 from "../../resources/static/img/parallax3.jpg"*/
import "materialize-css/dist/css/materialize.css"
//import {Parallax} from "react-parallax";
import {ProductList} from "../app";
import '../../resources/static/style.css'
import {Link} from 'react-router-dom';


export class PlasterPage extends Component{
<html>
<head>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Forum&display=swap" rel="stylesheet" />
    <meta charSet="utf-8" />
    <meta name="keywords" content="штукатурка, фреска, краска,
      обои, декор, декоративный, ремонт" />
    <meta name="description" content />
    <title> Art Deco </title>
</head>
<body>
<div id="header"></div>
<div id="container"></div>
constructor(props) {
    		super(props);
    		this.products = props.products
    	}
<script type="text/babel">
    ReactDOM.render(
                    <div>
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
             ,
             document.getElementById("header"),
             function(){ console.log("рендеринг элемента React");}
    		)
    		ReactDOM.render(
    		<h1>Штукатурка&&&&DFDTRRSSD</h1>

            <ProductList products={this.products}/>
            ,
            document.getElementById("container"),
            function(){ console.log("рендеринг элемента React");}
            )
</script>
</body>
</html>
}