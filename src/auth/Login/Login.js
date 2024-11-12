import React, { useState } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
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

          <button type="submit" className="btn btn-primary w-100">
            {loading ? "Loading..." : "Sign In"}
          </button>
          <div className="flex justify-center items-center mt-3 text-center">
          <Link to="/forgot-password" className="text-decoration-none">Forgot Password</Link>
          </div>
        </form>
        <hr />
        <p>
          Don't Have an Account?{" "}
          <Link to="/signup" className="text-decoration-none">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
