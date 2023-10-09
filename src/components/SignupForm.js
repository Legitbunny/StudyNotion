import React, { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const SignupForm = ({setIsLoggedIn}) => {

    const[formData, setFormData] = useState({
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    const[showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate();

    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name] : event.target.value
        }))
    }

    function submitHandler(event) {
        event.preventDefault()
        if(formData.password !== formData.confirmPassword) {
            toast.error("Password do not match")
            return;
        }

        setIsLoggedIn(true);
        toast.success("Account created successfully")
        const accountData = {
            ...formData
        }
        console.log(accountData)
        navigate("/dashboard")

    }

  return (
    <div>
        <div>
            {/* student-instructor tab */}
            <button>
                Student
            </button>
            <button>
                Instructor
            </button>
        </div>

        <form onSubmit={submitHandler} >
            {/* firstname and last name */}
            <div>
                <label>
                    <p>First Name<sup>*</sup></p>

                    <input type='text' name='firstname' onChange={changeHandler} placeholder='Enter your first name' value={formData.firstname} />
                </label>

                <label>
                    <p>Last Name<sup>*</sup></p>

                    <input type='text' name='lastname' onChange={changeHandler} placeholder='Enter your last name' value={formData.lastname} />
                </label>
            </div>

            {/* email */}
            <label>
                <p>Email Address<sup>*</sup></p>

                <input type='email' name='email' onChange={changeHandler} placeholder='Enter your email' value={formData.email} />
            </label>

            {/* create and confirm password */}

            <div>
                <label>
                    <p>Create password<sup>*</sup></p>

                    <input type={showPassword ? ("text") : ("password")} name='password' onChange={changeHandler} placeholder='Enter password' value={formData.password} />

                    <span onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                    </span>
                </label>

                <label>
                    <p>Confirm password<sup>*</sup></p>

                    <input type={showPassword ? ("text") : ("password")} name='confirmPassword' onChange={changeHandler} placeholder='Confirm password' value={formData.confirmPassword} />

                    <span onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                    </span>
                </label>
            </div>

            {/* button */}
            <button>
                Create Account
            </button>

        </form>
    </div>
  )
}

export default SignupForm