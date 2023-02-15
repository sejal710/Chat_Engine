import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.jpg'

function Register() {
  const [values,setValues] = useState({
    username :"",
    email:"",
    password:"",
    confirmPassword:""
  })
  const handleSubmit = (event) => {
    event.prventDefault();
    alert("form")
  }
  // const handleValidation = () => {
  //   const {password,confirmPassword,username,email} = values;
  //   if(password !== confirmPassword){
  //     // toast.error("password and confirm password should be same")
  //   }
  // }

  const handleChange = (event) => {

    setValues({...values,[event.target.name]:event.target.value});
  }
  return (
    <>
    <FormContainer >
      <form onSubmit={(event) =>handleSubmit(event)}>
        <div className="brand">
          <img src={logo} alt="Logo" />
          <h1>Chating Dude</h1>
        </div>
        <input 
        type="text"
        placeholder='Username'
        name='username'
        onChange={(e) => handleChange(e)}
        />
        <input 
        type="email"
        placeholder='Email'
        name='email'
        onChange={(e) => handleChange(e)}
        />
        <input 
        type="password"
        placeholder='Password'
        name='password'
        onChange={(e) => handleChange(e)}
        />
        <input 
        type="password"
        placeholder='Confirm Password'
        name='confirmPassword'
        onChange={(e) => handleChange(e)}
        />
        <button type='submit'>Create User</button>
        <span>Already have an account ? <Link to='/login'>Login</Link> </span>
      </form>
    </FormContainer>
    </>
  )
}

const FormContainer = styled.div`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
gap: 1rem;
align-items: center;
background-color: #131324;
.brand {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  img {
    height: 5rem;
  }
  h1 {
    color: white;
    text-transform: uppercase;
  }
}
form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: #00000076;
  border-radius: 2rem;
  padding: 3rem 5rem;
}
input {
  background-color: transparent;
  padding: 1rem;
  border: 0.1rem solid #4e0eff;
  border-radius: 0.4rem;
  color: white;
  width: 100%;
  font-size: 1rem;
  &:focus {
    border: 0.1rem solid #997af0;
    outline: none;
  }
}
button {
  background-color: #4e0eff;
  color: white;
  padding: 1rem 2rem;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0.4rem;
  font-size: 1rem;
  text-transform: uppercase;
  &:hover {
    background-color: #4e0eff;
  }
}
span {
  color: white;
  text-transform: uppercase;
  a {
    color: #4e0eff;
    text-decoration: none;
    font-weight: bold;
  }
}
`;

export default Register;