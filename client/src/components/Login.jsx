import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
 // from inside the function component

const Login = (props) => {
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const navigate = useNavigate(); 




  
    const onMouseClick= async () => {
     
      try {
        debugger
          const url = "http://localhost:5168/api/client/id/"+password;
         
          const response = await fetch(url);
          
          if (response){
          navigate(`/PersonalArea/${password}`)
          }
          // else{
          //   navigate(`/ContactUs/${password}`)
          // }
          

         
          // console.log("data: " , json.items);
      
      


          console.log("data: " , response);
      } catch (error) {
          console.log("error: ", error);
      }
  };

    


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
        <input className={'inputButton'} type="button"  value={'Log in'} onClick={onMouseClick} />
      </div>
      
    </div>

  )
  }
export default Login