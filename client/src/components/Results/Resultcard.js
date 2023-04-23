import React from 'react'
import '../home/main.css'

function Resultcard(props) {
  return (
    <>
    <div className='col-12 col-md-6 col-lg-3 mx-3'>
    <div class="card col" id='card1' >
            <div class="card-body">
              <h1 class="card-title">{props.data2.Name}</h1>
              <hr />
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              {/* <Link to='/vote' className='rem' state={new1}>vote</Link> */}
              {/* <button class="res" id="RJD" data-toggle="modal" data-target="#exampleModalCenter"  >Result</button> */}
              <h1 className='count'>Count : {props.data2.Count} </h1>
            </div>
          </div>
          </div>
    </>
  )
}

export default Resultcard