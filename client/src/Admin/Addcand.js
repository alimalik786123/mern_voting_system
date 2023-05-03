import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Addpoll.css'

function Addcand() {
  const [data,setdata]=useState({Name:'',Roll:0,Moto:''})
  let redirect=useNavigate()
  const id=localStorage.getItem('currid')
  const setfun=(e)=>{
      setdata({...data,[e.target.name]:e.target.value})
      console.log(data);
  }
  const submit=async(e)=>{
      e.preventDefault()
      const response= await fetch("http://localhost:8080/addcand",{
         method:'POST',
         headers:{
          'Content-Type':'application/json',
         },
         body:JSON.stringify({id:id,name:data.Name,roll:data.Roll,moto:data.Moto})
      })
      const resp=await response.json()
      console.log(resp);
      if(resp.success){
          var studata=localStorage.getItem("currdata")
          studata=JSON.parse(studata)
          console.log(studata,"before");
          studata.push(data)
          studata=JSON.stringify(studata)
          window.localStorage.setItem("currdata",studata)
          redirect('/detail')

      }
      else if(!resp.success){
          alert("Enter valid details")
      }
      

  }



  return (
    <div>
        <form className="formreg" onSubmit={submit}>
  <h1>Add candidates</h1>
  <hr />
  <h3>Add candidates/options here</h3>
  <br />
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control txt" id="exampleInputEmail1" name='Name' onChange={setfun} aria-describedby="emailHelp" required/>
    <div id="emailHelp" class="form-text">Name is required since name is everything.</div>
  </div>
  <div className="form-group">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Roll number</label>
    <input type="number" class="form-control txt" id="exampleInputEmail1" name='Roll' placeholder='null' onChange={setfun} aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">If not applicable than keep it blank</div>
  </div>
  </div>
  <div className="form-group">
  
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Add Moto</label>
    <textarea
      className="form-control des"
      id="exampleFormControlTextarea1"
      rows={3}
      name='Moto' onChange={setfun} 
      defaultValue={""}
    />
  </div>
  <button type="submit" className="btn btn-primary btn1">
    Submit
  </button>
</form>

    </div>
  )
}

export default Addcand