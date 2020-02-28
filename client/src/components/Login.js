import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = props => {
console.log("Login props", props)
  const [userLogin, setUserLogin] = useState({
      username: '',
      password: ''
  })


  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const handleChange = event => {
    setUserLogin({
      ...userLogin,
      [event.target.name]: event.target.value
  })}

  const submitLogin = event => {
    event.preventDefault();
    console.log("This is userLogin", userLogin);
    axiosWithAuth()
    .post('api/login', userLogin)
    .then(res =>{
      console.log('Login post response', res);
      if(window.localStorage){
          window.localStorage.setItem('token', res.data.payload);
          props.history.push('/bubblepage');
      }
    })
    .catch(err=>(console.log('Login post error', err)));
  }
  
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={submitLogin}>
        <input name="username" type="text" placeholder='User Name' value={userLogin.username} onChange={handleChange} />
        <input name="password" type="password" placeholder='Password' value={userLogin.password} onChange={handleChange} />
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
