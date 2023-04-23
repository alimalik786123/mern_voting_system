import React from 'react'
import { Chart as ChartJS,BarElement, CategoryScale,LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { useLocation } from 'react-router-dom';
import Resultcard from './Resultcard'


ChartJS.register(BarElement, CategoryScale,LinearScale, Tooltip, Legend );


function Result() {
    const recieve=useLocation()
    const data1=recieve.state
    console.log(data1);
    const data={
        labels: data1.map(data2=>data2.Name),
        datasets: [{
            label:['369'],
            data: data1.map(data2=>data2.Count),
            backgroundColor:'#d4c08c',
           

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
                            <a href="/" class="menu__link"><h1>Home</h1></a>
                        </li>
                        <li class="menu__item">
                            <a href="/aboutus" class="menu__link"><h1>Team </h1></a>
                        </li>

                        <li class="menu__item">
                            <a href="/contactus" class="menu__link"><h1>Contact </h1></a>
                        </li>
                    </ul>
                    <div class="header__signup">
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
    </div>
    <div class="banner2">
    <div className="half1 pollname">Poll name : CR election</div>
        <h1 className='half2 desc1'>Description : this election poll is only for 3rd year student only 3rd year studentsare allowd to vote for the student remember election is your right </h1>
        <h3 className='desc'></h3>
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
    <hr />
    <div class="container1">
    <div className='row'>
        {data1.map((data2=>{return(<Resultcard data2={data2}/>)}))}
     
     {/* <Card></Card> */}

       
          </div>
    </div>
    </div></div>
  )
}

export default Result