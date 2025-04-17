import React from 'react'
import './ServiceCenter.css';

export default function Servis() {
  return (
    <div>
        <section className="section-servis">
          <div className="section4">
              <div className="trade-in-text">
                  <p className="title-trade-in">Сервис</p>
                  <p className="subtitle-trade-in">Добро пожаловать в наш сервисный центр!</p>
                  <p className="subtitle-trade-in"><a href="https://www.google.com/maps?ll=53.346815,83.782833&z=17&t=m&hl=ru&gl=RU&mapclient=embed&cid=7487585162540971715">Показать салон на карте</a></p>
                  <p className="subtitle-trade-in2">Мы рады приветствовать вас в нашем сервисном центре, где качество обслуживания и удовлетворение клиентов стоят на первом месте. Наша команда профессионалов готова помочь вам с ремонтом и обслуживанием вашей техники.</p>
                  <ul>
                      <li><p className="subtitle-li">Опытные специалисты</p></li>
                      <li><p className="subtitle-li">Качество услуг</p></li>
                      <li><p className="subtitle-li">Гарантия</p></li>
                      <li><p className="subtitle-li">Удобство</p></li>
                  </ul>
                  <p className="subtitle-li">Ещё остались вопросы?</p>
                  <div className="super-btn-container">
                      <div className="super-btn"><a href="https://vk.com/temanial"><p>vk</p></a></div>
                      <div className="super-btn"><a href="https://t.me/Temanial"><p>tg</p></a></div>
                      <div className="super-btn"><a href="mailto:vadim.starostin.07@gmail.com"><p>email</p></a></div>
                      <div className="super-btn4"><a href="tel:89231621593"><p>+7(923)162-15-93</p></a></div>
                  </div>
              </div>
              <div className="cs4-image-container">
                  <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1684.2231386752037!2d83.782477269848!3d53.34591970305529!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42dda44d916a0af5%3A0x67e93f08cebd76c3!2z0JDQu9GC0JPQotCj!5e0!3m2!1sru!2sru!4v1732481052372!5m2!1sru!2sru"></iframe>        </div>
          </div>
        </section>
    </div>
  )
}
