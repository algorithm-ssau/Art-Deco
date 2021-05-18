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

			<div class="slider">
                <div class="item">
                    <img src="img/parallax1.jpg" alt="Первый слайд">
                    <div class="slideText">Заголовок слайда 1</div>
                </div>

                <div class="item">
                    <img src="img/parallax2.jpg" alt="Второй слайд">
                    <div class="slideText">Заголовок слайда 2</div>
                </div>

                <div class="item">
                    <img src="img/parallax3.jpg" alt="Третий слайд">
                    <div class="slideText">Заголовок слайда 3</div>
                </div>

                <a class="prev" onclick="minusSlide()">&#10094;</a>
                <a class="next" onclick="plusSlide()">&#10095;</a>
            </div>

            <div class="slider-dots">
                <span class="slider-dots_item" onclick="currentSlide(1)"></span>
                <span class="slider-dots_item" onclick="currentSlide(2)"></span>
                <span class="slider-dots_item" onclick="currentSlide(3)"></span>
            </div>
            var slideIndex = 1;
            showSlides(slideIndex);

            /* Функция увеличивает индекс на 1, показывает следующй слайд*/
            function plusSlide() {
                showSlides(slideIndex += 1);
            }

            /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
            function minusSlide() {
                showSlides(slideIndex -= 1);
            }

            /* Устанавливает текущий слайд */
            function currentSlide(n) {
                showSlides(slideIndex = n);
            }

            /* Основная функция слайдера */
            function showSlides(n) {
                var i;
                var slides = document.getElementsByClassName("item");
                var dots = document.getElementsByClassName("slider-dots_item");
                if (n > slides.length) {
                  slideIndex = 1
                }
                if (n < 1) {
                    slideIndex = slides.length
                }
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                for (i = 0; i < dots.length; i++) {
                    dots[i].className = dots[i].className.replace(" active", "");
                }
                slides[slideIndex - 1].style.display = "block";
                dots[slideIndex - 1].className += " active";
            }
				<div className="container">
					<h1>Штукатурка</h1>
				</div>

				<ProductList products={this.products}/>
			</>
		)
	}
}