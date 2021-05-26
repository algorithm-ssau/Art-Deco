import React from "react";

import './style.scss';
import '../../../../resources/static/img/main/feedback.jpg';


export default function Review() {
    return (
        <section className="review">
            <div className="review__title">
                <h2>Отзывы наших клиентов</h2>
            </div>
            <div className="review__content">
                <div className="review__about">
                    <p>За нашими плечами сотни крупных объектов
                        строительства и тысячи розничных клиентов.</p>
                </div>
                <div className="review__item">
                    <blockquote>
                        Здесь будет великолепный текст, который напишут Ира и Таня. Он будет просто замечательный. Вам
                        точно понравится. А пока смотрите на картинки, шрифты и расположение всего на страницах.
                        <cite>Автор</cite>
                    </blockquote>
                </div>
            </div>
        </section>
    )
}