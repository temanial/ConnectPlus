import React from 'react'
import './TradeIn.css'

export default function TradeIn() {
  return (
    <div>
      <section className="section-trade-in">
          <div className="section4">
              <div className="trade-in-text">
                  <p className="title-trade-in">Trade-in</p>
                  <p className="subtitle-trade-in">Принесите свой старый смартфон нам в салон, и наши специалисты оценят его состояние.</p>
                  <p className="subtitle-trade-in"><a href="https://www.google.com/maps?ll=53.345207,83.782256&z=17&t=m&hl=ru&gl=RU&mapclient=embed&cid=17270919713324245201">Показать салон на карте</a></p>
                  <p className="subtitle-trade-in2">Вы сможете получить значительную скидку на покупку нового устройства!</p>
                  <ul>
                      <li><p className="subtitle-li">Это удобно</p></li>
                      <li><p className="subtitle-li">Экономично</p></li>
                      <li><p className="subtitle-li">Экологично</p></li>
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
                  <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.801011046643!2d83.78025807704965!3d53.3468181746879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42dda44dcb8688b5%3A0xefaea1f958fba0d1!2z0JDQu9GC0LPRgtGD!5e0!3m2!1sru!2sru!4v1732389583032!5m2!1sru!2sru"></iframe>
              </div>
          </div>
      </section>
    </div>
  )
}
