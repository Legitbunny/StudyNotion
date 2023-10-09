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

    const[showConfirmPassword, setShowConfirmPassword] = useState(false)

    const navigate = useNavigate();

    const[accountType, setAccountType] = useState("student")

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
        const finalData = {
            ...accountData,
            accountType
        }
        console.log("printing final data")
        console.log(finalData)
        navigate("/dashboard")

    }

  return (
    <div>
        <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>

            {/* student-instructor tab */}
            <button onClick={() => setAccountType("student")}
            className={`${accountType === "student" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} 
            py-2 px-5 rounded-full tramsition-all duration-200`}>
                Student
            </button>

            <button onClick={() => setAccountType("instructor")}
            className={`${accountType === "instructor" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"}
             py-2 px-5 rounded-full tramsition-all duration-200`}>
                Instructor
            </button>
        </div>

        <form onSubmit={submitHandler} >
            {/* firstname and last name */}
            <div className='flex gap-x-4 w-full mt-[20px]'>
                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'
                    >First Name<sup className='text-pink-200'>*</sup></p>

                    <input type='text' name='firstname' onChange={changeHandler} 
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    placeholder='Enter your first name' value={formData.firstname} />
                </label>

                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'
                    >Last Name<sup className='text-pink-200'>*</sup></p>

                    <input
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                     type='text' name='lastname' onChange={changeHandler} placeholder='Enter your last name' value={formData.lastname} />
                </label>
            </div>

            {/* email */}
            <div className='mt-[20px]'>
                <label className=' w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'
                    >Email Address<sup className='text-pink-200'>*</sup></p>

                    <input 
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    type='email' name='email' onChange={changeHandler} placeholder='Enter your email' value={formData.email} />
                </label>
            </div>

            {/* create and confirm password */}

            <div className='flex gap-x-4 w-full mt-[20px]'>
                <label className='relative w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'
                    >Create password<sup className='text-pink-200'>*</sup></p>

                    <input 
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    type={showPassword ? ("text") : ("password")} name='password' onChange={changeHandler} placeholder='Enter password' value={formData.password} />

                    <span
                    className='absolute right-3 top-[38px] cursor-pointer'
                     onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>

                <label className='relative w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'
                    >Confirm password<sup className='text-pink-200'>*</sup></p>

                    <input 
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    type={showConfirmPassword ? ("text") : ("password")} name='confirmPassword' onChange={changeHandler} placeholder='Confirm password' value={formData.confirmPassword} />

                    <span
                    className='absolute right-3 top-[38px] cursor-pointer'
                     onClick={() => setShowConfirmPassword((prev) => !prev)}>
                        {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>
            </div>

            {/* button */}
            <button className=' w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
                Create Account
            </button>

        </form>
    </div>
  )
}

export default SignupForm