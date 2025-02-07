import React from "react";
import "./FormComponent.css";

function FormComponent() {
  return (
    <div className="form-outer">
      <h1>Form</h1>
      <form>
        <label htmlFor="firstname">First Name</label>
        <input type="text" placeholder="Enter First Name" name="firstname" />

        <label htmlFor="lastname">Last Name</label>
        <input type="text" placeholder="Enter Last Name" name="lastname" />

        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Enter Email" name="email" />

        <label htmlFor="contact">Contact</label>
        <input type="text" placeholder="Enter Phone" name="contact" />
        <br />
        <button className="save-btn">Save</button>
        <button className="update-btn">Update</button>
        <button className="delete-btn">Delete</button>
        <button className="clear-btn">Clear</button>
      </form>
    </div>
  );
}

export default FormComponent;
