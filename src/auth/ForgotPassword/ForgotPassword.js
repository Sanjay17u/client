import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const ForgotPassword = () => {

    const [email, setEmail] = useState("")
    const [Loading] = useState(false)

    return(
        <>
        <div className='d-flex align-items-center justify-content-center min-vh-100 w-100'>
            <form className='d-flex flex-column gap-3 p-4 w-10 max-w-25 mx-4 rounded'>
                <div className='text-center'>
                    <h1 className='fw-bold'>Forgot Password</h1>
                    <p className='fs-6 text-muted'>Enter your email address to reset your Password</p>
                </div>
                <div className='d-flex align-items-center justify-content-center'>
                    <input 
                    type="email"
                    placeholder='Enter your email'
                    className='form-control form-control-lg w-100' 
                    value={email} 
                    onChange={(e) => 
                    {setEmail(e.target.value)}} />
                </div>

                <button type='submit' className='btn btn-primary'>
                    {Loading ? 'Please Wait...' : "Send Reset Link"}
                </button>
                <hr />
                <span className='text-center'>
                    Back to{" "}
                    <Link className='text-decoration-none' to='/Login'>Login</Link>
                </span>
            </form>
        </div>
        </>
    )
}

export default ForgotPassword