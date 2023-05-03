import React, { useEffect } from 'react'
import './main.css'
import logo from './img/logo.svg'
import hero from './img/hero.png' 
import leaf from './img/leaf.png'
import { useNavigate } from 'react-router-dom'



export default function Home() { 
    const redirect=useNavigate()
  const handle=()=>{
   localStorage.removeItem('userid') 
   localStorage.removeItem('voted') 

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
                            <a href="/" class="menu__link">Team</a>
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
                    <h1 class="hero__title">A New Way to Vote on your Device</h1>
                    <p class="hero__description">
                       This website provides student and teachers to vote and add pole easily
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
                    <div class="opportunity">
                        {/* <img src="assets/img/opportunites/opportunity-1.svg" alt="Icon" class="opportunity__icon"/> */}
                        <h2 class="opportunities__title">Results and previous votes</h2>
                        <p class="opportunity__description">On clicking the below button you can see the previous votes and the resuls of the poll
                        </p>
                        <a href="/prev" class="btn btn__hero">Result</a>

                    </div>

                    <div class="opportunity ">
                        {/* <img src="assets/img/opportunites/opportunity-2.svg" alt="Icon" class="opportunity__icon"/> */}
                        <h2 class="opportunities__title">vote now easily</h2>
                    <p class="opportunities__description">On clicking the below button you can see current ongoing vote for you</p>
                    <a href="/votemid" class="btn btn__hero">Vote now</a>
                    </div>
                    <div class="opportunity">
                        {/* <img src="assets/img/opportunites/opportunity-3.svg" alt="Icon" class="opportunity__icon"/> */}
                        <h4 class="opportunity__title">All votes
                        </h4>
                        <p class="opportunity__description">
                           here you can see all the votes which is going on in campus
                        </p>
                        <a href="#" class="btn btn__hero">Explore Now</a>

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
                            <a href="#" class="footer_nav__link">Contact</a>
                        </li>
                    </ul>
                  
                   
=                </nav>
               
            </div>
            <div class="footer__bottom">
                <div class="footer__bottom__content w-105">
                    <div class="footer__logo">
                        <img src={logo} alt="Logo"/>
                    </div>
                    <p class="footer_copyright">
                        © Copyright : Ali malik,shubham sonar,roland D'cruz, Royston
                    </p>
                </div>
            </div>
        </footer>
    </div>
    </div>
  )
}
