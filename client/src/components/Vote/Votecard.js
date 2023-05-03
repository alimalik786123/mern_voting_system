import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../home/main.css'
import logo from '../home/img/logo.png'


export default function Votecard(props) {
   
  const [data,setdata]=useState(props.data3._id)
  let redirect=useNavigate()
  const vote=async(e)=>{
    //  console.log(e.target.value);
     setdata(e.target.value)
     console.log(data); 
     let user=window.localStorage.getItem('userid')
     let voteid=window.localStorage.getItem('id')
     const response= await fetch("http://localhost:8080/up",{
      method:'POST',
      headers:{
       'Content-Type':'application/json',
      },

      body:JSON.stringify({id:data,user:user,voteid:voteid})
   })
   const resp=await response.json()
   console.log(resp);
   if(resp.success){
    const arr = [localStorage.getItem("voted")]
    arr.push(voteid)
    console.log(arr);
    localStorage.setItem("voted",arr)
    localStorage.removeItem("id")

    redirect('/')
  }
   else if(!resp.success){
       alert("Enter valid details")
   }
   

}  
  
  return (
    <>
    <div className='col-12 col-md-6 col-lg-3 mx-3'>
    <div class="card col" id='card1' >
            <div class="card-body">
              <h1 class="card-title">{props.data3.Name}</h1>
              <p class="card-text">{props.data3.Moto}</p>
              <hr />
              <h3>Roll no.:{props.data3.Roll} </h3>
              <br />
              <button class="rem" id="RJD" value={props.data3._id} onClick={vote} data-toggle="modal" data-target="#exampleModalCenter"  >Vote</button>
            </div>
          </div>
          </div>
    </>
  )
}
