import React, { useEffect } from 'react'
import '../components/home/main.css'
import logo from './img/logo.svg'
import hero from './img/hero.png'
import leaf from './img/leaf.png'
import { useNavigate } from 'react-router-dom'



export default function Admin() {
    const redirect=useNavigate()
  const handle=()=>{
   localStorage.removeItem('userid') 
   redirect('/login')
  } 
  useEffect(()=>{
    if(!localStorage.getItem("userid")){
        redirect('/login')
    }
},[])
  return (
    <div>
     <div class="container">
        <header>
            <nav class="header__nav w-120">
                <div class="header__logo">
                    <img src={logo} alt="Logo"/>
                </div>
                <div class="header__nav__content">
                    <div class="nav-close-icon"></div>
                    <ul class="header__menu">
                        <li class="menu__item">
                            <a href="/" class="menu__link active">Home</a>
                        </li>
                        <li class="menu__item">
                            <a href="/" class="menu__link">Product</a>
                        </li>
                        <li class="menu__item">
                            <a href="/" class="menu__link">Team</a>
                        </li>
                        <li class="menu__item">
                            <a href="/" class="menu__link">Blog</a>
                        </li>
                        <li class="menu__item">
                            <a href="/" class="menu__link">Contact</a>
                        </li>
                    </ul>
                    <div class="header__signup">
                        <a href="/" class="btn btn__signup" onClick={handle}>
                            <i class="fas fa-user-plus"></i> Sign out
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
        </header>

        <section class="hero w-120">
            <div class="hero__content">
                <div class="hero__text">
                    <h1 class="hero__title">Welcome </h1>
                    <p class="hero__description">
                       Now you are an admin, you can add/delete vote
                    </p>
                    <a href="#" class="btn btn__hero">Explore Now</a>
                </div>
                <div class="hero__img">
                    <img src={hero} alt=""/>
                </div>
            </div>
        </section>

        <section class="opportunities">
            <div class="opportunities__img">
                <img src={leaf} alt=""/>
            </div>
            <div class="opportunities__content w-105">
                <div class="opportunities__head">
                    <h2 class="opportunities__title">vote now easily</h2>
                    <p class="opportunities__description">On clicking the below button you can see current ongoing vote for you</p>

                </div>
                <div class="opportunities__body">
                    <div class="opportunity1">
                        {/* <img src="assets/img/opportunites/opportunity-1.svg" alt="Icon" class="opportunity__icon"/> */}
                        <h2 class="opportunities__title">Add poll</h2>
                        <p class="opportunity__description">On clicking the below button you can add poll
                        </p>
                        <a href="/addpoll" class="btn btn__hero">Add now</a>

                    </div>

                    <div class="opportunity1 ">
                        {/* <img src="assets/img/opportunites/opportunity-2.svg" alt="Icon" class="opportunity__icon"/> */}
                        <h2 class="opportunities__title">See you votes</h2>
                    <p class="opportunities__description">On clicking the below button you can see your polls</p>
                    <a href="/allpoll" class="btn btn__hero">See now</a>
                    </div>
                   
                </div>
            </div>
        </section>

        

       

        <footer class="footer">
            <div class="footer__body w-105">
                <nav class="footer__nav">
                    <ul class="footer_nav__menu">
                        <li class="footer_nav__item">
                            <h4 class="footer_nav__menu__title">COMPANY</h4>
                        </li>
                        <li class="footer_nav__item">
                            <a href="#" class="footer_nav__link">About Us</a>
                        </li>
                        <li class="footer_nav__item">
                            <a href="#" class="footer_nav__link">Team</a>
                        </li>
                        <li class="footer_nav__item">
                            <a href="#" class="footer_nav__link">Careers</a>
                        </li>
                        <li class="footer_nav__item">
                            <a href="#" class="footer_nav__link">Contact</a>
                        </li>
                    </ul>
                    <ul class="footer_nav__menu">
                        <li class="footer_nav__item">
                            <h4 class="footer_nav__menu__title">INVEST</h4>
                        </li>
                        <li class="footer_nav__item">
                            <a href="#" class="footer_nav__link">Features</a>
                        </li>
                        <li class="footer_nav__item">
                            <a href="#" class="footer_nav__link">How it works</a>
                        </li>
                        <li class="footer_nav__item">
                            <a href="#" class="footer_nav__link">Pricing</a>
                        </li>
                        <li class="footer_nav__item">
                            <a href="#" class="footer_nav__link">Login</a>
                        </li>
                    </ul>
                    <ul class="footer_nav__menu">
                        <li class="footer_nav__item">
                            <h4 class="footer_nav__menu__title">LEGAL</h4>
                        </li>
                        <li class="footer_nav__item">
                            <a href="#" class="footer_nav__link">Privacy</a>
                        </li>
                        <li class="footer_nav__item">
                            <a href="#" class="footer_nav__link">Terms</a>
                        </li>
                        <li class="footer_nav__item">
                            <a href="#" class="footer_nav__link">Security</a>
                        </li>
                    </ul>
                </nav>
                <div class="footer__contact">
                    <h5 class="footer__contact__title">Blog Zou</h5>
                    <span>Write email to us</span>
                    <a href="mailto:info@zoufarm.com" class="email">info@zoufarm.com</a>
                    <a href="#" class="btn btn__signin">
                        <i class="far fa-user"></i> Sign In
                    </a>
                </div>
            </div>
            <div class="footer__bottom">
                <div class="footer__bottom__content w-105">
                    <div class="footer__logo">
                        <img src={logo} alt="Logo"/>
                    </div>
                    <p class="footer_copyright">
                        © Copyright 2021. Zou Capital Pty Ltd (ABN 45 4545 87363).
                    </p>
                </div>
            </div>
        </footer>
    </div>
    </div>
  )
}
