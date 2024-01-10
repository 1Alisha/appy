import React, { useState } from 'react'
import Header from './Header'
const Login = () => {
     const[isSignInForm, setIsSignInForm]=useState(true);
     const toggleSignIn=()=>{
       setIsSignInForm(!isSignInForm);
     }
  return (
    <div>
        
      <Header/>
     
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/b8dd5151-d491-4e91-b1fb-a19df70df5fc/7acd48e1-92f0-4aa7-bcc6-684b3ee50946/IN-en-20240102-trifectadaily-perspective_alpha_website_large.jpg' alt=''/>
      </div>
      <form 
           className='absolute bg-black p-12 w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
        <h1 

            className='font-bold text-3xl py-4'>
            { isSignInForm ? "Sign In" : "Sign Up" }

        </h1>

        {!isSignInForm &&(
        <input 

            type="text" 
            placeholder='Full Name' 
            className='p-4 my-4 w-full bg-gray-800 rounded-lg'
            /> 
        )}

        <input 

            type="text"
            placeholder='Email-address' 
            className='p-4 my-4 w-full bg-gray-800 rounded-lg bg-opacity-80'

            /> 
       
       

        <input 

            type="password" 
            placeholder='Password' 
            className='p-4 my-4 w-full bg-gray-800 rounded-lg'
            /> 

        <button 

            className="p-4 my-6 bg-red-700 w-full rounded-lg" >
            { isSignInForm ? "Sign In" : "Sign Up" }

        </button>
        <p 
            className='py-4 cursor-pointer' 
            onClick={toggleSignIn}>
            { isSignInForm ? " New to netflix? Sign Up Now" : "Already registered? Sign In Now" }
           
        </p>

      </form>
    </div>
  )
}

export default Login
