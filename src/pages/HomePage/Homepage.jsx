import React from 'react'
import './Homepage.css';
import people from '../../img/people/people1.png'
import apple from '../../img/brand_logos/apple.png'
import huawei from '../../img/brand_logos/huawei.png'
import google from '../../img/brand_logos/google.png'
import xiaomi from '../../img/brand_logos/xiaomi.png'
import samsung from '../../img/brand_logos/samsung.png'
import phone1 from '../../img/section4/free-icon-iphone-1551230.png'
import phone2 from '../../img/section4/free-icon-smartphone-7344131.png'
import exchange from '../../img/section4/free-icon-exchange-152371.png'

export default function Homepage() {
  return (
    <div>
        <div className="section1">
            <div className="sc1-text">
                <h1 className="sc1-title">БУДЬ В ПЛЮСЕ!</h1>
                <p className="subtitle">Не просто связь, а твой лайфстайл!</p>
                <p className="subtitle">Мы – твой надежный друг в мире мобильных технологий! У нас ты найдешь самые крутые смартфоны, стильные аксессуары и выгодные тарифы от топовых операторов.</p>
            </div>
            <div>
                <img className="sc1-image" src={people} alt="картинка"/>
            </div>
        </div>
        <section className="sect2">
            <div className="section2">
                <div className="cs1-text">
                    <p className="title-sect2">Лучшие смартфоны</p>
                    <p className="title-sect21">Привлекательные цены</p>
                    <p className="subtitle-sect2">Забирай свежие флагманы по самым низким ценам и получай аксессуары в подарок</p>
                    <div className="phone-list-btn">
                        <p><a className="phone-list" href="#">Смартфоны</a></p>
                    </div>
                </div>
                <div className="cs2-image-container">
                    <div className="sc2-image">
                        <img src={apple} alt="картинка"/>
                    </div>
                    <div className="sc2-image">
                        <img src={huawei} alt="картинка"/>
                    </div>
                    <div className="sc2-image">
                        <img src={google} alt="картинка"/>
                    </div>
                    <div className="sc2-image">
                        <img src={xiaomi} alt="картинка"/>
                    </div>
                    <div className="sc2-image">
                        <img src={samsung} alt="картинка"/>
                    </div>
                </div>
            </div>
        </section>
        <section className="sect3">
            <div className="section3">
                <div className="cs1-text">
                    <p className="title-sect3">Сервисный центр</p>
                    <p className="subtitle-sect3">Устраним любую техничекскую неисправность</p>
                    <div className="servis-btn">
                        <p><a className="servis" href="pages/servis.html">Подробнее</a></p>
                    </div>
                </div>
                <div className="sc3-text-container">
                    <div className="sc3-text">
                        <p>Диагностика</p>
                    </div>
                    <div className="sc3-text">
                        <p>Ремонт</p>
                    </div>
                    <div className="sc3-text">
                        <p>Техническое обслуживание</p>
                    </div>
                    <div className="sc3-text">
                        <p>Консультация</p>
                    </div>
                    <div className="sc3-text">
                        <p>Гарантийное обслуживание</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="sect4">
            <div className="section4">
                <div className="cs4-text">
                    <p className="title-sect4">Trade-in</p>
                    <p className="subtitle-sect4">Сдай старый смартфон и получи скидку на новый</p>
                    <div className="trade-in-btn">
                        <p><a className="trade-in" href="pages/trade-in.html">Побробнее</a></p>
                    </div>
                </div>
                <div className="cs4-image-container">
                    <div class="sc4-image">
                        <img class="sc4-image-phone" src={phone1} alt="картинка"/>
                    </div>
                    <div class="sc4-image">
                        <img class="sc4-image-exchange" src={exchange} alt="картинка"/>
                    </div>
                    <div class="sc4-image">
                        <img class="sc4-image-phone" src={phone2} alt="картинка"/>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}