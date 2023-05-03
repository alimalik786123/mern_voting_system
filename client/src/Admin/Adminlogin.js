import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Screens/Login/login.css'

function Adminlog() {

  const [data,setdata]=useState({email:'',password:''})
    let redirect1=useNavigate()
    const setfun=(e)=>{
      
        
        setdata({...data,[e.target.name]:e.target.value})
        console.log(data);
    }
    const submit=async(e)=>{
 
        e.preventDefault()
        if(data.password.length<7){
            console.log('hi');
            alert('length of password must be atleast 8 characters')
        }
        else{
        const response= await fetch("http://localhost:8080/adminlog",{
           method:'POST',
           headers:{
            'Content-Type':'application/json',
           },
           body:JSON.stringify({email:data.email,password:data.password})
        })
        const resp=await response.json()
        console.log(resp);
        if(resp.success){
          window.localStorage.setItem("admin",data.email)

           redirect1("/admin")
        }
        else if(!resp.success){
            alert("Enter valid details")
        }
    }

    }
  return (
    <>
  <section className="Form my-4 mx-2">
  <div className="container" id="fit">
    <div className="row no-gutters">
      <div className="col-lg-5">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3j3PyYLsHz2xgGv3MN_T7CZAkz-JTz4bkxw&usqp=CAU"
          alt=""
          className="imgfluid"
        />
      </div>
      <div className="col-lg-7 px-5 pt-5">
        <h1 className="font-weight-bold py-3">Admin</h1>
        <h4 className="">Log into your account as an administrator</h4>
        <form onSubmit={submit}>
          <div className="form-row">
            <div className="col-lg-8">
              <input
                type="email"
                name="email"
                className="form-control my-3 p-4"
                id="email"
                placeholder="Email"
                required="This should be fill"
                onChange={setfun}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col-lg-8">
              <i className="bi bi-envelope-fill" />{" "}
              <input
                type="password"
                className="form-control my-3 p-4 "
                name="password"
                placeholder="Password"
                onChange={setfun}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col-lg-8">
              <button className="btn-1 mt-3 mb-5">login</button>
            </div>
          </div>
          <a href="#">forgot password</a>
          <p>
            dont have account?<a href="/signup">Register now</a>
          </p>
          <p>
            are you a student?<a href="/login">Click here</a>
          </p>
        </form>
      </div>
    </div>
  </div>
</section>

</>

  )
}

export default Adminlog