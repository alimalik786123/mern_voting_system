import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'

function Login() {

  const [data,setdata]=useState({roll:null,password:''})
    let redirect1=useNavigate()
    const setfun=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }
    const submit=async(e)=>{
        e.preventDefault()
        const response= await fetch("http://localhost:8080/login",{
           method:'POST',
           headers:{
            'Content-Type':'application/json',
           },
           body:JSON.stringify({roll:data.roll,password:data.password})
        })
        const resp=await response.json()
        console.log(resp);
        if(resp.success){
          const arr=resp.userdata.voted
          window.localStorage.setItem('voted',JSON.stringify(arr))
          window.localStorage.setItem("userid",data.roll)

           redirect1("/adminhome")
        }
        else if(!resp.success){
            alert("Enter valid details")
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
        <h1 className="font-weight-bold py-3">welcome</h1>
        <h4 className="">Log into your account</h4>
        <form onSubmit={submit}>
          <div className="form-row">
            <div className="col-lg-8">
              <input
                type="number"
                name="roll"
                className="form-control my-3 p-4"
                id="roll"
                placeholder="Roll number"
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
        </form>
      </div>
    </div>
  </div>
</section>

</>

  )
}

export default Login