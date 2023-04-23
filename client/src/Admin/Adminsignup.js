import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Screens/Signup/regstyle.css'

function Adminreg() {
    const [data,setdata]=useState({name:'',email:'',password:''})
    let redirect=useNavigate()
    const setfun=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
        console.log(data);
    }
    const submit=async(e)=>{
        e.preventDefault()
        const response= await fetch("http://localhost:8080/user",{
           method:'POST',
           headers:{
            'Content-Type':'application/json',
           },
           body:JSON.stringify({name:data.name,email:data.email,password:data.password})
        })
        const resp=await response.json() 
        console.log(resp);
        if(resp.success){
          window.localStorage.setItem("admin",data.email)
        //   window.localStorage.setItem("class",data.class)


           redirect("/")
        }
        else if(!resp.success){
            alert("Enter valid details")
        }
        

    }
  return (
    <div>
      <>
  {/* Required meta tags */}
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  {/* Bootstrap CSS */}
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossOrigin="anonymous"
  />
  <link rel="stylesheet" href="regstyle.css" />
  <title>Registration</title>
  <section className="Form my-4 ">
    <div className="container">
      <div className="row1 no-gutters">
        <div className="col-lg-5">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="imgfluid"
          />
        </div>
        <div className="col-lg-7 px-5 pt-5">
          <h1 className="font-weight-bold py-3">Administrator</h1>
          <h4 className="">Register for administrator account</h4>
          <form onSubmit={submit}>
            <div className="form-row">
              <div className="col-lg-8">
                <input
                  type="text"
                  name="name"
                  className="form-control my-3 p-4"
                  placeholder="Full Name"
                  required="This should be fill"
                  onChange={setfun}
                />
              </div>
            </div>
    
            <div className="form-row">
              <div className="col-lg-8">
                <input
                  type="email"
                  className="form-control my-3 p-4 "
                  name="email"
                  placeholder="Email"
                  required=""
                  onChange={setfun}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-lg-8">
                {/* <input
                  type="email"
                  className="form-control my-3 p-4 "
                  name="email"
                  placeholder="Email"
                  required=""
                /> */}
              
    
  

 

              </div>
            </div>
            <div className="form-row">
              <div className="col">
                <input
                  type="password"
                  className="form-control my-3 p-4  new1"
                  name="password"
                  placeholder="New password"
                  onChange={setfun}
                />
              </div>
              <div className="col">
                {" "}
                <input
                  type="password"
                  className="form-control my-3 p-4  new2"
                  name="password2"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-lg-8">
                <button type='submit' className="btn-1 mt-3 mb-5">Register</button>
              </div>
            </div>
            <p>
              Already have an account?<a href="/login">Login</a>
            </p>
            <p>
              Signup as administrator<a href="/adminreg"> :Click here for admin</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</>


    </div>
  )
}

export default Adminreg