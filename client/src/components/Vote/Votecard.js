import React from 'react'
import '../home/main.css'

export default function Votecard(props) {
  console.log(props.name);
  return (
    <>
    <div className='col-12 col-md-6 col-lg-3 mx-5'>
    <div class="card col" id='card1' >
            <div class="card-body">
              <h3 class="card-title">{props.name}</h3>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button class="rem" id="RJD" data-toggle="modal" data-target="#exampleModalCenter"  >Vote</button>
            </div>
          </div>
          </div>
    </>
  )
}
