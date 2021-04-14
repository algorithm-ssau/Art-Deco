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
				<div className="container">
					<h1>Штукатурка</h1>
				</div>

				<ProductList products={this.products}/>
			</>
		)
	}
}