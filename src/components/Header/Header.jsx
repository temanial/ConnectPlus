import React from 'react'
import './Header.css';

export default function Header() {
  return (
    <div>
        <header>
            <div className="header-container">
                <a href="index.html" className="logo_header">
                    <span>СONNECT</span>
                    <span className="plus">plus</span>
                </a>
                <div className="burger-menu" id="burger-menu">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <div className="header-pages" id="nav-menu">
                    <ul className="header-menu">
                        <li><a href="pages/trade-in.html">Trade-in</a></li>
                        <li><a href="pages/phone_list.php">Смартфоны</a></li>
                        <li><a href="pages/tariff.php">Тарифные планы</a></li>
                        <li><a href="pages/servis.html">Сервис</a></li>
                        <li><a className="user" href="pages/login.php">Личный кабинет</a></li>
                    </ul>
                </div>
            </div>
        </header>
    </div>
  )
}
