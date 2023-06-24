import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Addpoll.css'

function Addpoll() {
  const [data,setdata]=useState({name:'',class:'',result:'',description:''}) 
  let redirect=useNavigate()
  const setfun=(e)=>{
      setdata({...data,[e.target.name]:e.target.value})
      console.log(data);
  }
  const email=localStorage.getItem('admin')
  const submit=async(e)=>{
      e.preventDefault()
      const response= await fetch("http://localhost:8080/addpoll",{
         method:'POST',
         headers:{
          'Content-Type':'application/json',
         },
         body:JSON.stringify({name:data.name,class:data.class,result:data.result,description:data.description,email:email})
      })
      const resp=await response.json()
      console.log(resp);
      if(resp.success){
     


         redirect("/admin")
      }
      else if(!resp.success){
          alert("Enter valid details")
      }
      

  }



  return (
    <div>
        <form className="formreg" onSubmit={submit}>
  <h1>add poll</h1>
  <hr />
  <h3>Add your poll here</h3>
  <br />
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Poll name</label>
    <input type="text" class="form-control txt" id="exampleInputEmail1" name='name' onChange={setfun} aria-describedby="emailHelp" required/>
    <div id="emailHelp" class="form-text">Poll name is required since name is everything.</div>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlSelect1">Poll is for: </label>
    <select class="form-select slt" name='class' onChange={setfun} aria-label="Default select example">      
    <option>-select-</option>
      <option value='all'>All</option>
      <option value='cr'>CR-only</option>
      <option value='fea'>FEA</option>
      <option value='feb'>FEB</option>
      <option value='fec'>FEC</option>
      <option value='fee'>FEE</option>
      <option value='secompsa'>SEcompsA</option>
      <option value='secompsb'>SEcompsB</option>
      <option value='seecs'>SE-ECS</option>
      <option value='seaids'>SE-AIDS</option>
      <option value='semech'>SE-MECH</option>
      <option value='tecompsa'>TEcompsA</option>
      <option value='tecompsb'>TEcompsB</option>
      <option value='teecs'>TE-ECS</option>
      <option value='teaids'>TE-AIDS</option>
      <option value='temech'>TE-MECH</option>
      <option value='becompsa'>BEcompsA</option>
      <option value='becompsb'>BEcompsB</option>
      <option value='beecs'>BE-ECS</option>
      <option value='beaids'>BE-AIDS</option>
      <option value='bemech'>BE-MECH</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlSelect1">Show live Result?</label>
    <select class="form-select slt" name='result' onChange={setfun} aria-label="Default select example">
              <option>-select-</option>
      <option value='yes'>Yes</option>
      <option value='no'>No-Declare later</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Add description</label>
    <textarea
      className="form-control des"
      id="exampleFormControlTextarea1"
      rows={3}
      name='description' onChange={setfun}
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

export default Addpoll