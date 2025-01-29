import React from 'react';
import {useNavigate} from "react-router-dom";


export default function Login() {

    const[loginFormData, setLoginFormData] = React.useState({email: '', password: ''})

    function handleSubmit(e){
        e.preventDefault()
        console.log(loginFormData)
           }

    function handleChange(e) {
        const {name, value} = e.target
        setLoginFormData( prev =>({
        ...prev,
        [name] : value
    }))
    }

  return (
    <div>
     <h1>Sign in to your account</h1>
     <form>
      <input
        name="email"
        type="email"
        onChange={handleChange}
        value=""
        className="email-form"
        placeholder="Email address"
        />
      <input  
        type="password"
        name="password"
        className="password-form"
        placeholder="Password"
        onChange={handleChange}
        value=""
        />
    <button type="submit" className="submit-btn">Log in</button>        
    </form>
    </div>
  )
}

