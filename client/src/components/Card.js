import React, { useState } from 'react'
import './home/main.css'
import Vote from './Vote/Vote'

export default function Card(props) {
  const [new1,setnew]=useState('')
  const handle=(e)=>{
    console.log(e.target.value);
   return(<Vote
    name='hello'
    />)
  }
  return (
    <>
    <div className='col-12 col-md-6 col-lg-3 mx-5'>
    <div class="card col" id='card1' >
            <div class="card-body">
              <h3 class="card-title">{props.data3.name}</h3>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button class="rem" id="RJD" data-toggle="modal" data-target="#exampleModalCenter" value={props.data3.candidates} onClick={handle} >Vote</button>
            </div>
          </div>
          </div>
    </>
  )
}
