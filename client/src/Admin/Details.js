import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Candcard from './Candcard'

export default function Details() {
    const redirect=useNavigate()
    const recieve=useLocation() 
    var data=localStorage.getItem("currdata")
    var newdata=JSON.parse(data)
    console.log(newdata,"haia");

  const handle=()=>{ 
    redirect('/addcand')
  }
  return (
    <>
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
                            <a href="#" class="menu__link"><h3>Tea</h3></a>
                        </li>
                        <li class="menu__item">
                            <a href="#" class="menu__link"><h3>Blog </h3></a>
                        </li>
                        <li class="menu__item">
                            <a href="#" class="menu__link"><h3>Contact </h3></a>
                        </li>
                    </ul>
                    <div class="header__signup">
                        <a href="/admin" class="btn btn__signup">
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
        <h1></h1>
    </div>
    <div class="banner2">
        <div className="half1 pollname">Add candidates by using below button</div>
        {/* <h1 className='half2 desc1'>Description : this election poll is only for 3rd year student only 3rd year studentsare allowd to vote for the student remember election is your right {recieve.state.Name}</h1> */}
        <h3 className='desc'></h3>
    </div>
<div class="hide1"></div> 
   <div class="container2">
    <div className='row'>
        {/* <h1>{props.name}</h1> */}
    {newdata.map((data3)=>{return(<Candcard data3={data3} />)})}
 
</div>
       
          </div>
       
    </div>
    </div>
    <button className='addcan' onClick={handle}><h2>Add candidates</h2></button>
    </>
    )
}
