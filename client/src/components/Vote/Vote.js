import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';  
import Votecard from './Votecard'
import logo from '../home/img/logo.png'

const Vote=(props)=>{
    const redirect=useNavigate()
    useEffect(()=>{ 
        if(!localStorage.getItem("id")){
            redirect('/')
        }
    },[])
    const recieve=useLocation()
    console.log(recieve.state);
  return (
    <div>
        <div class="container">
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
                            <a href="#" class="menu__link"><h3>Home</h3></a>
                        </li>
                        <li class="menu__item">
                            <a href="#" class="menu__link"><h3>Back</h3></a>
                        </li>
                        <li class="menu__item">
                            <a href="#" class="menu__link"><h3>Aboutus</h3></a>
                        </li>
                        <li class="menu__item">
                            <a href="#" class="menu__link"><h3>Contact </h3></a>
                        </li>
                    </ul>
                    <div class="header__signup">
                        <a href="#" class="btn btn__signup">
                             Back
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
        <h1></h1>
    </div>
    <div class="banner2">
        <div className="half1 pollname">Poll name : CR election</div>
        <h1 className='half2 desc1'>Description : this election poll is only for 3rd year student only 3rd year studentsare allowd to vote for the student remember election is your right {recieve.state.Name}</h1>
        <h3 className='desc'></h3>
    </div>
<div class="hide1"></div> 
   <div class="container1">
    <div className='row'>
        <h1>{props.name}</h1>
    {recieve.state.map((data3)=>{return(<Votecard data3={data3} />)})}
 
</div>
       
          </div>
       
    </div>
    </div>
  )
}

export default Vote