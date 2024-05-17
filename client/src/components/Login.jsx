import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
// const navigate = useNavigate(); // from inside the function component
const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
      </div>
      {/* <div className="blogImageSection"
        onClick={() =>
          navigate('PersonalArea', { password }) // this is how to pass data with useNavigate
        }> ... </div> */}
    </div>

  )
}

export default Login