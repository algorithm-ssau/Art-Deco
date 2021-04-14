import React, {Component } from 'react'
import "materialize-css/dist/css/materialize.css"
import {ProductList} from "../app";


export class WallpaperPage extends Component{
	constructor(props) {
		super(props);
		this.products = props.products
	}

	render() {
		return (
			<>
				<div className="container">
					<h1>Обои</h1>
				</div>

				<ProductList products={this.products}/>
			</>
		)
	}
}