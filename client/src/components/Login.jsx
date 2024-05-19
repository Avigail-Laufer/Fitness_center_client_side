import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
 // from inside the function component

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const navigate = useNavigate(); 

  // const navigate = useNavigate()


  const onButtonClick = () => {
    console.log(password);
  }

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Login</div>
      </div><br></br>

      <div className={'inputContainer'}>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={()=>navigate(`/PersonalArea/${password}`)} value={'Log in'} />
      </div>
      {/* <div className="blogImageSection"
        onClick={() =>
          navigate('PersonalArea', { password }) // this is how to pass data with useNavigate
        }> ... </div> */}
    </div>

  )
}

export default Login