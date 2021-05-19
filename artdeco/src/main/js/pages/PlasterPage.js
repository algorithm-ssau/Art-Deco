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
			<div className="row">
              <div className="column">
                <img src="img/Photo Art Deco/project/1/1.jpg" alt="1" onclick="openImg(this);">
              </div>
              <div className="column">
                <img src="img/Photo Art Deco/project/1/2.jpg" alt="2" onclick="openImg(this);">
              </div>
              <div className="column">
                <img src="img/Photo Art Deco/project/1/3.jpg" alt="3" onclick="openImg(this);">
              </div>
              <div className="column">
                <img src="img/Photo Art Deco/project/1/4.jpg" alt="4" onclick="openImg(this);">
              </div>
            </div>

            <!-- The expanding image container -->
            <div className="container1">
              <!-- Close the image -->
              <span onclick="this.parentElement.style.display='none'" class="closebtn">&times;</span>

              <!-- Expanded image -->
              <img id="expandedImg" style="width:100%">

              <!-- Image text -->
              <div id="imgtext"></div>
            </div>
            <script>function myFunction(imgs) {
                      // Get the expanded image
                      var expandImg = document.getElementById("expandedImg");
                      // Get the image text
                      var imgText = document.getElementById("imgtext");
                      // Use the same src in the expanded image as the image being clicked on from the grid
                      expandImg.src = imgs.src;
                      // Use the value of the alt attribute of the clickable image as text inside the expanded image
                      imgText.innerHTML = imgs.alt;
                      // Show the container element (hidden with CSS)
                      expandImg.parentElement.style.display = "block";
                    }
            </script>


				<div className="container">
					<h1>Штукатурка</h1>
				</div>

				<ProductList products={this.products}/>
			</>
		)
	}
}