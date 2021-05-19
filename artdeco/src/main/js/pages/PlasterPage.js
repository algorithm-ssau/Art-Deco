import React, {Component } from 'react'

import "materialize-css/dist/css/materialize.css"

import {ProductList} from "../app";
import '../../resources/static/style.css'



import '../../resources/static/style.css'
import {Link} from 'react-router-dom';
function openImg(imgs) {
                                    var expandImg = document.getElementById("expandedImg");
                                   var imgText = document.getElementById("imgtext");
                                   expandImg.src = imgs.src;
                                   imgText.innerHTML = imgs.alt;
                                   expandImg.parentElement.style.display = "block";
                                }
export class PlasterPage extends Component{
	constructor(props) {
		super(props);
		this.products = props.products
	}

	render() {
		return (
			<>
			<div className="row">
              <div className="column">
                <img src="img/Photo Art Deco/project/1/1.jpg" alt="1" onclick="openImg(this);"/>
              </div>
              <div className="column">
                <img src="img/Photo Art Deco/project/1/2.jpg" alt="2" onclick="openImg(this);"/>
              </div>
              <div className="column">
                <img src="img/Photo Art Deco/project/1/3.jpg" alt="3" onclick="openImg(this);"/>
              </div>
              <div className="column">
                <img src="img/Photo Art Deco/project/1/4.jpg" alt="4" onclick="openImg(this);"/>
              </div>
            </div>


            <div className="container1">

              <span onclick="this.parentElement.style.display='none'" class="closebtn">&times;</span>


              <img id="expandedImg" style="width:100%"/>


              <div id="imgtext"></div>
            </div>





				<div className="container">
					<h1>Штукатурка</h1>
				</div>

				<ProductList products={this.products}/>
			</>
		)
	}

}
