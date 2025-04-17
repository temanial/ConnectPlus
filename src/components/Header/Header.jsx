import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const location = useLocation();
  return (
    <div>
      <header>
        <div className="header-container">
          <Link to="/" className="logo_header">
            <span>СONNECT</span>
            <span className="plus">plus</span>
          </Link>
          <div className="burger-menu" id="burger-menu">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className="header-pages" id="nav-menu">
            <ul className="header-menu">
              {location.pathname !== '/TradeIn' && (
                <li><Link to="/TradeIn">Trade-in</Link></li>
              )}
              <li><Link to="/smartphones">Смартфоны</Link></li>
              <li><Link to="/tariffs">Тарифные планы</Link></li>
              {location.pathname !== '/ServiceCenter' && (
                <li><Link to="/ServiceCenter">Сервис</Link></li>
              )}
              <li><Link className="user" to="/login">Личный кабинет</Link></li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
