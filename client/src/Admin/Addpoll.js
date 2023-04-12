import React from 'react'
import './Addpoll.css'

function Addpoll() {
  return (
    <div>
        <form className="formreg">
  <h1>add poll</h1>
  <hr />
  <h3>Add your poll here</h3>
  <br />
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="text" class="form-control txt" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlSelect1">Poll is for: </label>
    <select class="form-select slt" aria-label="Default select example">      
    <option>-select-</option>
      <option>All</option>
      <option>CR-only</option>
      <option>FEA</option>
      <option>FEB</option>
      <option>FEC</option>
      <option>FEE</option>
      <option>SEcompsA</option>
      <option>SEcompsB</option>
      <option>SE-ECS</option>
      <option>SE-AIDS</option>
      <option>SE-MECH</option>
      <option>TEcompsA</option>
      <option>TEcompsB</option>
      <option>TE-ECS</option>
      <option>TE-AIDS</option>
      <option>TE-MECH</option>
      <option>BEcompsA</option>
      <option>BEcompsB</option>
      <option>BE-ECS</option>
      <option>BE-AIDS</option>
      <option>BE-MECH</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlSelect1">Show live Result?</label>
    <select class="form-select slt" aria-label="Default select example">
              <option>-select-</option>
      <option>Yes</option>
      <option>No-Declare later</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Add description</label>
    <textarea
      className="form-control des"
      id="exampleFormControlTextarea1"
      rows={3}
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