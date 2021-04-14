import React, {Component } from 'react'
import "materialize-css/dist/css/materialize.css"
import {ProductList} from "../app";


export class DecorPage extends Component{
	constructor(props) {
		super(props);
		this.products = props.products
	}

	render() {
		return (
			<>
				<div className="container">
					<h1>Декор</h1>
				</div>

				<ProductList products={this.products}/>
			</>
		)
	}
}