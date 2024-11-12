
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const ResetPassword = () => {

    const [newPassword, setNewPassword] = useState("")
    const [Loading] = useState(false)

    return(
        <>
        <div className='d-flex align-items-center justify-content-center min-vh-100 w-100'>
            <form className='d-flex flex-column gap-3 p-4 w-10 max-w-25 mx-4 rounded'>
                <div className='text-center'>
                    <h1 className='fw-bold'>Reset Password</h1>
                    <p className='fs-6 text-muted'>Enter your new password to reset old one.</p>
                </div>
                <div className='d-flex align-items-center justify-content-center'>
                    <input 
                    type="password"
                    placeholder='Enter your new password'
                    className='form-control form-control-lg w-100' 
                    value={newPassword} 
                    onChange={(e) => 
                    {setNewPassword(e.target.value)}} />
                </div>

                <button type='submit' className='btn btn-primary'>
                    {Loading ? 'Please Wait...' : "Reset"}
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

export default ResetPassword