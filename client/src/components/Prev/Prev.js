import React, { useEffect, useState } from 'react'
import Prevcard from './Prevcard'
import {io} from 'socket.io-client'
var socket
function Prev() {
    const [data1,setdata1]=useState([])
    const [user,setuser]=useState([])
    let roll=window.localStorage.getItem('userid')
 
    const Datafood=async()=>{
        let data=await fetch('http://localhost:8080/votedata',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({roll:roll})
        })
        data=await data.json()
        setdata1(data[0])
        setuser(data[1])
        window.localStorage.setItem('voted',user[0].voted)

       
    //    data1[0].map((data3)=>{console.log(data3.name);})
     

    }
    
    console.log(data1)
    console.log()
    // const voted=user[0].voted
    // console.log(voted);

    useEffect(()=>{
        Datafood()},[]) 
    
    
    useEffect(()=>{
        socket=io('http://localhost:8080/votedata')
    })
    const class1=localStorage.getItem("class")
    const votes=localStorage.getItem("voted")
    const arr=votes.split(",")
    console.log(arr);
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
                        <a href="/" class="btn btn__signup">
                            <i class="fas fa-user-plus"></i> Home
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
    <div className="half1 pollname">Results page(voted)</div>
        <h1 className='half2 desc1'>Description : Here you can see results of all polls which you have voted </h1>
        <h3 className='desc'></h3>
    </div>
<div class="hide1"></div> 
    </div>
     
    <div class="container1">
    <div className='row'>
    { data1 && data1.filter((data2,index)=>data2.class===class1 && arr.includes(data2._id)).map((data3)=>{return(<Prevcard data3={data3} btn={data3._id}/>)})}
     {/* <Prevcard/>
     <Prevcard/>
     <Prevcard/> */}

       
          </div>
    </div>        
    </div>
    </div>
  )
}

export default Prev