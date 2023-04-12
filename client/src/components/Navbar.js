import React from 'react'
import "./home/main.css"
import logo from './home/img/logo.svg'

export default function Navbar() {
  return (
    <div class="container">
    <header>
        <nav class="header__nav bg">
            <div class="header__logo">
                <img src={logo} alt="Logo"/>
            </div>
            <div class="header__nav__content">
                <div class="nav-close-icon"></div>
                <ul class="header__menu">
                    <li class="menu__item">
                        <a href="#" class="menu__link active"><h3>Home</h3></a>
                    </li>
                    <li class="menu__item">
                        <a href="#" class="menu__link"><h3>Product</h3></a>
                    </li>
                    <li class="menu__item">
                        <a href="#" class="menu__link"><h3>Team </h3></a>
                    </li>
                    <li class="menu__item">
                        <a href="#" class="menu__link"><h3>Blog </h3></a>
                    </li>
                    <li class="menu__item">
                        <a href="#" class="menu__link"><h3>Contact </h3></a>
                    </li>
                </ul>
                <div class="header__signup">
                    <a href="#" class="btn btn__signup">
                        <i class="fas fa-user-plus"></i> Sign Up
                    </a>
                </div>
            </div>

            <div class="hamburger-menu-wrap">
                <div class="hamburger-menu">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div> 
                </div>
            </div>
        </nav>
    </header></div>
  )
}
