import React, { useEffect, useState } from 'react'
import Card from './Admincard'
import {io} from 'socket.io-client'
import logo from '../components/home/img/logo.png'
var socket
function Allpoll() {
    const [data1,setdata1]=useState([])
    let by=localStorage.getItem('admin')
 
    const Datafood=async()=>{
        let data=await fetch('http://localhost:8080/adminpoll',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({email:by})
        })
        data=await data.json()
        setdata1(data)
       
        console.log(data1)

        // window.localStorage.setItem('voted',user[0].voted)

       
    //    data1[0].map((data3)=>{console.log(data3.name);})
     

    }
    
    
    // const voted=user[0].voted
    // console.log(voted);

    useEffect(()=>{
        Datafood()},[])
    
    
    useEffect(()=>{
        socket=io('http://localhost:8080/votedata')
    })
    // const class1=localStorage.getItem("class")
    // const votes=localStorage.getItem("voted")
    // const arr=votes.split(",")
    // console.log(arr);
  return ( 


    <div>
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
                            <a href="#" class="menu__link"><h3>Aboutus </h3></a>
                        </li>
                        <li class="menu__item">
                            <a href="#" class="menu__link"><h3>Contact </h3></a>
                        </li>
                    </ul>
                    <div class="header__signup">
                        <a href="/admin" class="btn btn__signup">
                            <i class="fa-solid fa-house"></i> HOME
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
    </div>
    <div class="banner2">
        <div className="half1 pollname">Your all polls details</div>
        <h1 className='half2 desc1'>Description : Here you can see all your polls and add candidates after clicking on details </h1>
        <h3 className='desc'></h3>
    </div>
<div class="hide1"></div> 
    </div>
      
    <div class="container1">
    <div className='row'>
    
    { data1 && data1.map((data3)=>{return(<Card data3={data3} btn={data3._id}/>)})}

       
          </div>
    </div>        
    </div>
    </div>
  )
}

export default Allpoll