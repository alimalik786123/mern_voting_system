import React from 'react'
import { Chart as ChartJS,BarElement, CategoryScale,LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale,LinearScale, Tooltip, Legend );


function Result() {
    const data={
        labels: ['mon','tue','wed'],
        datasets: [{
            label:'369',
            data: [3,6,9],
            backgroundColor:'blue',
            height:'450px'

        }]
    }
    const options={}
  return (
    <div>
        <div class="container">
            <nav class="header__nav bg">
                <div class="header__logo">
                    <img src="assets/img/logo.svg" alt="Logo"/>
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
        
    <div class="banner">
        <h1>hello</h1>
    </div>
    <div class="banner2">
        <h1>banner2</h1>
    </div>
<div class="hide1"></div> 
  <div class="container1">
   <div class="result1">
   <Bar
          
            data={data}
            options={options}
          
        /> 
        <hr />
    </div></div>
    </div></div>
  )
}

export default Result