import React, { useEffect, useState } from 'react'
import Card from '../Card'

function Votemid() {
    
    const [data1,setdata1]=useState([])
    const Datafood=async()=>{
        let data=await fetch('http://localhost:8080/votedata',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            }
        })
        data=await data.json()
        setdata1(data)

       
         console.log(data)
    //    data1[0].map((data3)=>{console.log(data3.name);})
     

    }
    console.log(data1)
    console.log(data1)
    useEffect(()=>{
        Datafood()},[])
  return ( 


    <div>
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
        <h1></h1>
    </div>
<div class="hide1"></div> 
    </div>
    
    <div class="container1">
    <div className='row'>
    
    { data1[0] && data1[0].map((data3)=>{return(<Card name={data3.name} btn={data3._id}/>)})}

       
          </div>
    </div>        
    </div>
    </div>
  )
}

export default Votemid