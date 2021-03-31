import React from 'react'

export const MainPage = () => {
	return(
		<>
  <link rel="stylesheet" href="../static/style.css"/>
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
        <a href="#">Art Deco</a>
      </div>                
      <ul className="header-nav clearfix">
        <div className="header-nav-container">
          <li><a href="/plaster">Декоративная штукатурка</a></li>
          <li><a href="#">Фрески</a></li>
          <li><a href="/paint">Краски</a></li>
          <li><a href="/wallpaper">Обои</a></li>
          <li><a href="/decor">Декор</a></li>
          <li><a href="#">Наши проекты</a></li>
          <li><a href="#">Контакты</a></li>
        </div>                    
      </ul>
    </div>            
    <p className="header-text">Уникальные покрытия.
      <br />Уникальные решения</p>
  </header>
  <main>
    <section className="about-container">
      <div className="about">
        <p>Art DECO — это широкий выбор декоративных 
          покрытий от лучших производителей. 
          Мы предлагаем интересные решения 
          для любого ценового диапазона и любой 
          площади пространства. Вместе с Вами мы 
          создадим неповторимый дизайн, добавив 
          помещению свежести и пространства.</p>
      </div>
    </section>
    <section className="features">
      <ul className="features-list">
        <li className="eco">
          <img src alt />
          <h2>Экологичность</h2>
          <div className="box">
            <p>При оформлении интерьера не следует 
              забывать о здоровье, поэтому при выборе
              отделочных материалов особенно важно 
              обращать внимание на их безвредность. 
              Вся наша продукция изготавливается из 
              высококачественного сырья, которое 
              проходит тщательную санитарную проверку 
              и является экологически безопасным. В 
              состав интерьерных покрытий входят только 
              натуральные компоненты, поэтому они не 
              токсичны и гипоаллергенны.
            </p>
          </div>
        </li>
        <li className="practic">
          <img src alt />
          <h2>Практичность</h2>
          <div className="box_right">
            <p>
              Мы не устаем доказывать, что дизайн может 
              быть стильным и практичным одновременно. 
              Наши декоративные покрытия паропроницаемы, 
              долговечны, морозоустойчивы и не нуждаются 
              в длительной подготовке поверхности под 
              покрытие. Наши решения подойдут для семей 
              с детьми и питомцами. А еще мы даем гарантию 
              5 лет на все материалы.
            </p>
          </div>
        </li>
        <li className="aesth">
          <img src alt />
          <h2>Эстетичность</h2>
          <div className="box">
            <p>
              Изящный и неповторимый интерьер можно создать 
              в любом помещении благодаря особенностям наших 
              материалов, большому выбору способов его 
              нанесения и широкому цветовому спектру. 
              Почувствуйте себя настоящим дизайнером, ведь 
              единственное, что вас ограничивает – это 
              ваше воображение. 
            </p>
          </div>
        </li>
      </ul>
    </section>
    <section className="offer">
      <h3>Мы предлагаем:</h3>
      <ul>
        <li>Качественные материалы и большой 
          выбор декоративных покрытий</li>
        <li>Готовые проекты интерьера</li>
        <li>Возможность создать свой уникальный дизайн</li>
        <li>Обучение технологиям нанесения</li>
        <li>Поддержка проекта вплоть до его завершения</li>
      </ul>
    </section>
    <section className="reviews">
      <div className="reviews-title">
        <h2>Отзывы наших клиентов</h2>
      </div>
      <div className="reviews-content">
        <div className="reviews-about">
          <p>За нашими плечами сотни крупных объектов 
            строительства и тысячи розничных клиентов.</p>
        </div>
        <div className="reviews-item">
          <blockquote>
            Текст отзыва
            <cite>Автор</cite>
          </blockquote>
        </div>
      </div>                        
    </section>
  </main>
  <footer>
    <div className="footer-top clearfix">
      <a href="#" className="footer-logo">Art Deco</a>
      <ul className="footer-nav clearfix">
        <div className="footer-nav-container">
          <li><a href="/plaster">Декоративная штукатурка</a></li>
          <li><a href="#">Фрески</a></li>
          <li><a href="/paint">Краски</a></li>
          <li><a href="/wallpaper">Обои</a></li>
          <li><a href="/decor">Декор</a></li>
          <li><a href="#">Наши проекты</a></li>
          <li><a href="#">Контакты</a></li>
        </div>                
      </ul>
    </div>
    <div className="footer-bottom clearfix">
      <div className="footer-left">
        <p className="address">г. Самара, ул.Ново-Садовая, д. 163</p>
        <p className="contacts">тел. +7 (846) 248-08-78<br />
          e-mail: artdeco63@inbox.ru</p>
      </div>
      <div className="footer-right">
        <a className="inst-icon" href="#"><img height="40px" src="img/inst1.png" alt="Инстаграм" /></a>
        <span className="inst-text">artdeco_63</span>
        <span className="middle-el" />
      </div>
      <p className="copyright">© 2021 Art Deco</p>            
    </div>
  </footer>
</>

	)
}