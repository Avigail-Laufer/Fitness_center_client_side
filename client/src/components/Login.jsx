import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const onMouseClick = async () => {
    try {
      const url = `http://localhost:5168/api/client/id/${password}`;
      const response = await fetch(url);

      if (response.ok) {
        navigate(`/PersonalArea/${password}`);
      } else {
        // Handle error or navigate to a different page
        // navigate(`/ContactUs/${password}`);
        console.log('Error occurred');
      }

      console.log("Response data:", response);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onMouseClick();
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
          onKeyUp={handleKeyPress}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" value={'Log in'} onClick={onMouseClick} />
      </div>
    </div>
  );
};

export default Login;
