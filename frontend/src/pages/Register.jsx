import React from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import styled from "styled-components";

function Register() {
  const handelSubmit = (event) =>{
    event.preventDefault();
    alert("form");
  }
  const handelChange = (event) =>{

  }
  return (
    <>
      <FormContainer>
        <form onSubmit={(event) => handelSubmit(event)}>
          <div className="brand">
            <img src={logo} alt="Logo" />
            <h1>Atya Talks</h1>
          </div>
          <input type="text" name="username" placeholder='Enter Your Name' onChange={e=>handelChange(e)}/>
          <input type="email" name="email" placeholder='Enter Your Email' onChange={e=>handelChange(e)}/>
          <input type="password" name="password" placeholder='Enter Your Password' onChange={e=>handelChange(e)}/>
          <input type="password" name="Confrmpassword" placeholder='Enter Your Confirm Password' onChange={e=>handelChange(e)}/>
          <button type='submit'>Create User</button>
          <span>Already have a account ? <Link to="/login">Login </Link> </span>
        </form>
      </FormContainer>
    </>
  )
}

const FormContainer = styled.div`
height : 100vh;
width : 100vw;
display : flex;
flex-direction : column;
justify-content : center;
gap : 1rem;
background-color : #131324;
align-items :center;
.brand{
  display:flex;
  align-items :center;
  gap : 1rem;
  justify-content:center;
  img{
    height : 5rem;
  }
  h1{
    color:white;
    text-transform:uppercase;
  }
}
form{
  display : grid;
  flex-direction : column;
  gap:2rem;
  background-color : #00000076;
  border-radius : 2rem;
  padding : 3rem 5rem;
  input{
    background-color : transparent;
    padding : 1rem;
    border : 0.1rem solid #4e0eff; 
    border-radius : 0.4rem;
    color : white;
    width : 100%;
    font-size : 1rem;
    &:focus{
      border : 0.1rem solid #997af0;
      outline : none;
    }
  }
  button {
    background-color : #997af0;
    color : white;
    padding : 1rem 2rem ;
    border : none;
    font-weight : bold;
    cursor : pointer;
    border-radius : 0.4rem;
  }

}

`;

export default Register
