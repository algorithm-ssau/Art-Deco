import React, {Component } from 'react'

import "materialize-css/dist/css/materialize.css"

import {ProductList} from "../app";
import '../../resources/static/style.css'



import '../../resources/static/style.css'
import {Link} from 'react-router-dom';
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