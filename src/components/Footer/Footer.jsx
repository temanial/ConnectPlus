import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div>
        <section className="sect5">
            <footer>
                <div className="footer-container">
                    <div className="spisok">
                        <p className="list-name">Социальные сети</p>
                        <ul>
                            <li>
                                <a href="https://t.me/Temanial"><p>telegram</p></a>
                            </li>
                            <li>
                                <a href="https://vk.com/temanial"><p>vk</p></a>
                            </li>
                        </ul>
                    </div>
                    <div className="spisok">
                        <p className="list-name">Электронная почта</p>
                        <ul>
                            <li>
                                <a href="mailto:vadim.starostin.07@gmail.com"><p>vadim.starostin.07@gmail.com</p></a>
                            </li>
                        </ul>
                    </div>
                    <div className="spisok">
                        <p className="list-name">Номер телефона</p>
                        <ul>
                            <li>
                                <a href="tel:89231621593"><p>+7(923)162-15-93</p></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <p>© В. С. Старостин, 2024</p>
                </div>
            </footer>
        </section>
    </div>
  )
}
