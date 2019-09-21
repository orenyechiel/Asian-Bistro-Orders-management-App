import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import "../../style/loginPage.css";

const Login = props => {

  const [inputs, setInputs] = useState({
    user: "",
    password: ""
  });

  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    console.log("start");
  },[]);

  const Enter = e => {
    e.preventDefault();
    setInputs({
        user: document.getElementById('name_field').value, 
        password: document.getElementById('telephone_field').value
    })

    if (inputs.user === 'admin' && inputs.password === 'admin') {
        setAuth(true)
    } 
    
    if(isAuth){
        // return <Redirect to='/main' />
        console.log('good');
    } else {
        console.log('bad');
    }
  };

  return (
    <div className="login-box">
      <form onSubmit={Enter}>
        <div className="input-field">
          <i className="material-icons prefix">person</i>
          <input id="name_field" type="text" className="validate" name="user"
            // value={userInput.user}
            // onChange={e => setInputs(inputs.user === e.target.value)}
            required />
          <label htmlFor="name_field">User</label>
        </div>

        <div className="input-field">
          <i className="material-icons prefix">fingerprint</i>
          <input id="telephone_field" type="password" className="validate" name="password"
            // value={userInput.password}
            // onChange={e => setInputs(inputs.password === e.target.value)}
            required />
          <label htmlFor="telephone_field">Password</label>
        </div>

        <button
          type="submit" className="btn blue-grey darken-3 waves-effect waves-light" name="action" >
            Login
          <i className="material-icons right">send</i>
        </button>
      </form>
    </div>
  );
};

export default Login;

/* im using hooks in this components */
