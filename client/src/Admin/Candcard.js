import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../components/home/main.css'


export default function Candcard(props) {
   
  const [data,setdata]=useState(props.data3._id)
  const [roll,setname]=useState(props.data3.Roll)
  let redirect=useNavigate()
  const remove=async(e)=>{
    //  console.log(e.target.value);
     setdata(e.target.value)
     setname(e.target.name)
     
    //  let user=window.localStorage.getItem('userid')
    //  let voteid=window.localStorage.getItem('id')
     const response= await fetch("http://localhost:8080/del",{
      method:'POST',
      headers:{
       'Content-Type':'application/json',
      },

      body:JSON.stringify({id:data})
   })
   const resp=await response.json()
   console.log(resp);
   if(resp.success){
    var currdata=localStorage.getItem("currdata")
    currdata=JSON.parse(currdata)
    console.log(currdata,"hhhhhhhh");
    console.log(roll);
    var roll3=currdata.map((data)=>data.Roll)
    console.log(roll3,'sow');
    var indx=roll3.indexOf(roll)
    currdata.splice(indx,1)
    console.log(currdata,'new');
    currdata=JSON.stringify(currdata)
    window.localStorage.setItem('currdata',currdata)
    redirect('/detail')
   
  }
   else if(!resp.success){
       alert("Enter valid details")
   }
   

}  
  
  return (
    <>
    <div className='col-3'>
    <div class="card" id='card1' >
            <div class="card-body">
              <h1 class="card-title">{props.data3.Name}</h1>
              <p class="card-text">{props.data3.Moto}</p>
              <hr />
              <h3>Roll no.:{props.data3.Roll} </h3>
              <br />
              <button class="rem2" id="RJD" value={props.data3._id} name={props.data3.Name} onClick={remove} data-toggle="modal" data-target="#exampleModalCenter"  >Remove</button>
            </div>
          </div>
          </div>
    </>
  )
}
