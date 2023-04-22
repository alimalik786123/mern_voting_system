import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../home/main.css'

export default function Card() {
//   const [new1,setnew]=useState(props.data3.candidates)
  const location=useNavigate()
//   const handle=(e)=>{
//     // setnew(e.target.value)
//     // console.log(new1);
//     window.localStorage.setItem("id",e.target.name)

//     location("/vote",new1 && {state:new1})
//   }
  return (
    <>
    <div className='col-12 col-md-6 col-lg-3 mx-3'>
    <div class="card col" id='card1' >
            <div class="card-body">
              <h2 class="card-title">hello</h2>
              <hr />
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              {/* <Link to='/vote' className='rem' state={new1}>vote</Link> */}
              <button class="res" id="RJD" data-toggle="modal" data-target="#exampleModalCenter" onClick={()=>{location('/result')}} >Result</button>
            </div>
          </div>
          </div>
    </>
  )
}
