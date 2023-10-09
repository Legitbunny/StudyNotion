import React, { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import {toast} from 'react-hot-toast'


const LoginForm = ({setIsLoggedIn}) => {

    const[formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const[showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate();

    function changeHandler(event){
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }))
    }

    function submitHandler(event){
        event.preventDefault()
        setIsLoggedIn(true)
        toast.success("Logged in")
        navigate("/dashboard")
    }



  return (
    <form onSubmit={submitHandler}>
        <label>
            <p>Email Address<sup>*</sup></p>

            <input type="email" required placeholder='Enter email id' value ={formData.email} onChange={changeHandler} name='email'/>
        </label>

        <label>
            <p>Password<sup>*</sup></p>

            <input required placeholder="Enter your password" type={showPassword ? ("text") : ("password")} onChange={changeHandler} value={formData.password} name='password' />

            <span onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
            </span>

            <Link to='#'>
                <p>Forgot Password</p>
            </Link>

        </label>
        
        <button>
            Sign in
        </button>

    </form>
  )
}

export default LoginForm