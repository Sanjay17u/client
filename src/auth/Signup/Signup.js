import React, { useState } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
    contact: "",
  });

  const [errors, setErrors] = useState({}); 

  // Input fields change handler
  const changeEventHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  // validation function
  const validate = () => {
    let validationErrors = {};
    let isValid = true;

    // Validate full name (not empty)
    if (!input.fullname) {
      validationErrors.fullname = "Full Name is required";
      isValid = false;
    }

    // Validate email (simple regex)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!input.email) {
      validationErrors.email = "Email is required";
      isValid = false;
    } else if (!emailPattern.test(input.email)) {
      validationErrors.email = "Invalid email format";
      isValid = false;
    }

    // Validate password (at least 7 characters)
    if (!input.password) {
      validationErrors.password = "Password is required";
      isValid = false;
    } else if (input.password.length < 7) {
      validationErrors.password = "Password must be at least 7 characters";
      isValid = false;
    }

    // Validate contact (10 digits + optional +91)
    const contactPattern = /^(?:\+91[-\s]?)?\d{10}$/;
    if (!input.contact) {
      validationErrors.contact = "Contact number is required";
      isValid = false;
    } else if (!contactPattern.test(input.contact)) {
      validationErrors.contact = "Invalid contact number";
      isValid = false;
    }

    setErrors(validationErrors);
    return isValid;
  };

  // Form submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    // Validate the form
    if (validate()) {
      console.log(input);  
    }
  };

  const [loading] = useState(false);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card p-4" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">DecorHarmony</h3>
        <form onSubmit={submitHandler}>
          
          <div className="mb-3">
            <label htmlFor="inputFullname" className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="inputFullname"
              name="fullname"
              value={input.fullname}
              onChange={changeEventHandler}
            />
            {errors.fullname && <div className="text-danger">{errors.fullname}</div>}
          </div>

          
          <div className="mb-3">
            <label htmlFor="inputEmail3" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail3"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
            />
            {errors.email && <div className="text-danger">{errors.email}</div>}
          </div>

          
          <div className="mb-3">
            <label htmlFor="inputPassword3" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword3"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
            />
            {errors.password && <div className="text-danger">{errors.password}</div>}
          </div>

          
          <div className="mb-3">
            <label htmlFor="inputContact" className="form-label">Contact</label>
            <input
              type="text"
              className="form-control"
              id="inputContact"
              name="contact"
              value={input.contact}
              onChange={changeEventHandler}
              placeholder="+91"
            />
            {errors.contact && <div className="text-danger">{errors.contact}</div>}
          </div>

          <button type="submit" className="btn btn-primary w-100">
            {loading ? "Loading..." : "Sign Up"}
          </button>
        </form>
        <hr />
        <p>
          Already Registered?{" "}
          <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
